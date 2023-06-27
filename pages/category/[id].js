// pages/category/[id].js
import Link from "next/link";
import { client } from "../../libs/client";
import style from "../../styles/Home.module.scss";

export default function CategoryId({ blog }) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return (
      <div>
        <p>ブログコンテンツがありません</p>
        <Link href="/" className={style.backToHomeButton}>
          ホームへ戻る
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>該当カテゴリーの記事一覧</h1>
      <p>ここにHTMLやJavascriptといった該当カテゴリー名を表示させたい。</p>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} className={style.textLink}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className={style.backToHomeButton}>
        ホームへ戻る
      </Link>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "category" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
