//pages/index.js

import Link from "next/link";
import { client } from "../libs/client";
import style from "../styles/Home.module.scss";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} className={style.textLink}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
