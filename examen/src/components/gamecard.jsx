  import React from 'react';
  import { Link } from 'react-router-dom';

  export default function GameCard({ game }) {
    return (
      <div className="game-card" role="article" aria-label={game.title}>
        <div className="cover">
          <img src={game.cover} alt={`${game.title} portada`} />
        </div>
        <h3>{game.title}</h3>
        <p>{game.short}</p>
        <div style={{display:'flex', gap:10, marginTop:8}}>
          <Link to={`/game/${game.id}`} className="btn">Ver detalles</Link>
          <a className="btn ghost" href={game.moreUrl || '#'} onClick={e => e.preventDefault()}>Wiki</a>
        </div>
      </div>
    );
  }
