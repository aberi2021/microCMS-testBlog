//components/Pagination.js
import Link from "next/link";
import style from "../styles/Home.module.scss";

export const Footer = ({ home }) => {
  return (
    <footer>
      {!home && (
        <Link href="/" className={style.backToHomeButton}>
          ホームへ戻る
        </Link>
      )}
    </footer>
  );
};
