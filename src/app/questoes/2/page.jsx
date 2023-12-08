'use client';
import React, {useState, useEffect} from 'react';

export default function Questao2() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    setContador(10);
  }, []);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>
      <div className='contador'>
        <h1>Contador:</h1>
        <div className="contadorNum">{contador}</div>
        <button onClick={incrementarContador} className="buttonContador incrementar">Incrementar</button>
        <button onClick={decrementarContador} className="buttonContador">Decrementar</button>
      </div>
    </>
  );
}
