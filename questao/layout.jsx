import "../globals.css";
import styles from "../page.module.css";
import Voltar from "../components/voltar";

export default function QuestoesLayout({ children }) {
  return (
    <main className={styles.main}>
      <div>
        <Voltar />
        {children}
      </div>
    </main>
  );
}
