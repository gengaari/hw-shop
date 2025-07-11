import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from '../data/news';

function NewsDetails() {
  const { id } = useParams();
  const n = news.find(x => x.id === parseInt(id));

  if (!n) return <p>Новость не найдена</p>;

  return (
    <div>
      <h2>{n.title}</h2>
      <p>{n.content}</p>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default NewsDetails;