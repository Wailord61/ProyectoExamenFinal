import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav.jsx';
import AppPage from './page/app';
import Home from './page/home';
import Detalles from './page/detalles';
import Login from './page/login';
import ItemDetalle from './page/ItemDetalle.jsx'; 
import './App.css';

function App() {
  const isAuth = () => !!localStorage.getItem('wg_user');

  return (
    <div className="app-root">
      <Nav />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<AppPage />}>
            <Route index element={<Home />} />
            <Route path="game/:id" element={<Detalles />} />
            <Route path="game/:id/item/:itemId" element={<ItemDetalle />} />

          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div style={{ padding: 20 }}>Página no encontrada</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
