import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';

function NewsList() {
  return (
    <div>
      <h2>Новости</h2>
      {news.map(n => (
        <div key={n.id}>
          <Link to={`/news/${n.id}`}>{n.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;