import Link from "next/link";
import styles from "../styles/Layout.module.css";
import { FaAngleLeft } from "react-icons/fa";

export default function Layout(props) {
  return (
    <div>
      <div className={styles.layoutContent}>
        <div className={styles.layoutHeader}>
          <FaAngleLeft size={16} />
          <Link href="/">Voltar</Link>
        </div>
      </div>
      {props.children}
    </div>
  );
}
