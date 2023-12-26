'use client';
import React, { useState, useEffect } from 'react';

export default function QuestaoExtra() {
  const [lista, setLista] = useState(JSON.parse(localStorage.getItem('lista')) ?? []);

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista));
  }, [lista]);

  const addItem = () => {
    const input = document.getElementById("inputItem");
    const newLista = [...lista];

    newLista.push(input.value);

    setLista(newLista);
  }

  const removeAll = () => {
    setLista([]);
  }

  const removeItem = (index) => {
    const newLista = [...lista];

    newLista.splice(index,1);

    setLista(newLista);
  }

  return (
    <>
      <h1>Questão Extra</h1>
      <p>
        Crie um to-do app que adiciona e remove itens de uma lista.
        O app deve ter um pequeno formulário e um botão azul para adicionar itens.
        Cada item deve ter um botão para removê-lo.
        Deve existir também um botão verde para zerar a lista.
        Todos os botões precisam ser redondos e ficarem quadrados quando o mouse estiver sobre eles.
        A lista deve ser salva no localStorage.
      </p>

      <button onClick={() => removeAll()} className='removeAll'>Remover todos itens</button>
      <ul className='lista'>
        {
          lista.map((element, index) => {
            return(
              <li key={index}>
                <p>{element}</p>
                <button onClick={() => removeItem(index)}>Remover item</button>
              </li>
            )
          })
        }
      </ul>

      <div className='forms'>
        <textarea name="" id="inputItem" cols="30" rows="10" placeholder="Qual item você deseja fazer?"></textarea>
        <button type="submit" onClick={() => addItem()}>Adicionar item</button>
      </div>
    </>
  );
}
