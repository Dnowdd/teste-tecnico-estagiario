import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Minha Lista de Produtos:</h2>
      <br />
      <div className="lista">
        {products.map((product, index) => (
          <div className="card" key={index} id={ product.id }>
            <h1>{ product.nome }</h1>
            <p>R$ { product.preco.toFixed(2).replace('.',',') }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
