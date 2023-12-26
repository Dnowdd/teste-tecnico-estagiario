const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SomaNumerosPares = ({ numeros }) => {
  const calcularSomaNumerosPares = (numeros) => {
    return numeros.reduce((soma, numero) => {
      if (numero % 2 === 0) {
        return soma + numero;
      }
      return soma;
    }, 0);
  };

  const soma = calcularSomaNumerosPares(numeros);

  return (
    <div>
      <p className="text"><b>Matriz de Números:</b> {numeros.join(', ')}.</p>
      <p className="text"><b>Soma dos Números pares:</b> {soma}.</p>
    </div>
  );
};

export default function Questao3() {
  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <p>Soma:</p>

      <div className="calculadora">
        <h1>Calculadora de Soma de Números Pares:</h1>
        <SomaNumerosPares numeros={numerosInteiros} />
      </div>
    </>
  );
}
