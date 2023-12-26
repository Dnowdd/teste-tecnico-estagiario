import styles from "./page.module.css";
import Link from "next/link";

const questoes = [
  {
    id: 1,
    titulo: "Questão 1",
    descricao: `Crie um botão vermelho com as bordas arredondadas que exiba
  "Clique-me!" como texto. Ao clicar no botão, um alert deve ser
  disparado avisando que o botão foi clicado.`,
    path: "questoes/1",
  },
  {
    id: 2,
    titulo: "Questão 2",
    descricao: `Crie um contador inicializado em 0. O devem existir dois botões: um
  para incrementar o contador e outro para decrementar o contador.
  Implemente a lógica para atualizar o contador quando os botões são
  clicados.`,
    path: "questoes/2",
  },
  {
    id: 3,
    titulo: "Questão 3",
    descricao: `Escreva uma função JavaScript que recebe uma matriz de números
  inteiros e retorna a soma de todos os números pares. Exiba a soma na
  tela.`,
    path: "questoes/3",
  },
  {
    id: 4,
    titulo: "Questão 4",
    descricao: `Crie um componente funcional em React chamado 'ProductList' que
  recebe uma matriz de objetos de produto e renderiza uma lista de
  produtos. Cada produto deve exibir seu nome e preço.`,
    path: "questoes/4",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Teste Técnico</h1>
      </div>

      <div className={styles.grid}>
        {questoes.map((questao) => (
          <Link key={questao.id} href={questao.path} className={styles.card}>
            <h2>
              {questao.titulo} <span>-&gt;</span>
            </h2>
            <p>{questao.descricao}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
