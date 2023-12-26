import Link from "next/link";
import styles from "./components.module.css";

export default function Voltar() {
  return (
    <div className={styles["voltar-container"]}>
      <Link href="/">Voltar</Link>
    </div>
  );
}
