import styles from "./page.module.css";
import Link from "next/link";

const questoes = [
  {
    id: 1,
    titulo: "Questão extra",
    descricao: `Crie um to-do app que adiciona e remove itens de uma lista.
    O app deve ter um pequeno formulário e um botão azul para adicionar itens.
    Cada item deve ter um botão para removê-lo.
    Deve existir também um botão verde para zerar a lista.
    A lista deve ser salva no localStorage.`,
    path: "questao/extra",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Teste Técnico 2</h1>
      </div>

      <div className={styles.grid}>
        {questoes.map((questao) => (
          <Link key={questao.id} href={questao.path} className={styles.card}>
            <h2>
              {questao.titulo} <span>-&gt;</span>
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
