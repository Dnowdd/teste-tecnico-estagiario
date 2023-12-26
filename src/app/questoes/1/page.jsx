'use client';

function notificar() {
  alert('O botão foi pressionado.');
}

export default function Questao1() {
  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba Clique-me!
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
      </p>
      <button type="button" onClick={() => notificar()} className="buttonStyle">
        Clique-me!
      </button>
    </>
  );
}
