import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Не найдено</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default ProductDetails;