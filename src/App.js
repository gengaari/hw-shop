import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import CategoryList from './components/CategoryList';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div>
        <h1>Магазин</h1>
        <button onClick={changeTheme}>
          Тема: {theme === 'light' ? 'Светлая' : 'Тёмная'}
        </button>

        <Routes>
          <Route path="/" element={
            <>
              <CategoryList />
              <ProductList />
              <NewsList />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:name" element={<ProductList />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;