import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

function CategoryList() {
  return (
    <div>
      <h2>Категории</h2>
      {categories.map((c, i) => (
        <div key={i}>
          <Link to={`/category/${c}`}>{c}</Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;