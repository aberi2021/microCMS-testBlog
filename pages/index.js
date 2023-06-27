//pages/index.js

import Link from "next/link";
import { client } from "../libs/client";
import style from "../styles/Home.module.scss";

export default function Home({ blog, category }) {
  return (
    <>
      <h1>あべりのmicroCMS勉強サイト</h1>
      <h2>カテゴリー一覧</h2>
      <ul>
        {category.map((category) => (
          <li key={category.id} className={style.textLink}>
            <Link href={`/category/${category.id}`}> {category.name}</Link>
          </li>
        ))}
      </ul>
      <h2>記事一覧</h2>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id} className={style.textLink}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

//データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  //カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: "category" });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
