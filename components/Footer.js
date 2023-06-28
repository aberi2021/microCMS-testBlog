//components/Pagination.js
import Link from "next/link";
import style from "../styles/Home.module.scss";
import Pagination from "./Pagination";

export const Footer = ({ totalCount }) => {
  return (
    <>
      <div className={style.Pagination}>
        <p>ページネーションだよ</p>
        <Pagination totalCount={totalCount} className={style.textLink} />
      </div>
      <Link href="/" className={style.backToHomeButton}>
        ホームへ戻る
      </Link>
    </>
  );
};
