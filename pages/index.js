//pages/index.js

import Link from "next/link";
import { client } from "../libs/client";
import style from "../styles/Home.module.scss";
import { Pagination } from "../components/Pagination";
import { Footer } from "../components/Footer";

export default function Home({ blog, category, totalCount }) {
  return (
    <>
      <h1>あべりのmicroCMS勉強サイト</h1>
      <section className={style.sectionMd}>
        <h2>カテゴリー一覧</h2>
        <ul>
          {category.map((category) => (
            <li key={category.id} className={style.textLink}>
              <Link href={`/category/${category.id}`}> {category.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={style.sectionMd}>
        <h2>記事一覧</h2>
        <p>最新の記事が5件でるよ</p>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className={style.textLink}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
        <div className={style.Pagination}>
          <p>ページネーションだよ</p>
          <Pagination totalCount={totalCount} className={style.textLink} />
          {/* <Footer totalCount={totalCount} /> */}
        </div>
      </section>
    </>
  );
}

//データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 5 },
  });
  //カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "category" });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
    },
  };
};
