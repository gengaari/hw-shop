import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductList() {
  const { name } = useParams();
  const list = name ? products.filter(p => p.category === name) : products;

  return (
    <div>
      <h2>Товары</h2>
      {list.map(p => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;