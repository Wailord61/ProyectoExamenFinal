import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Aquí duplicamos la data mínima; en proyecto real vendría de un API o contexto
const DB = {
  fifa26: {
    id: 'fifa26',
    title: 'FIFA 26',
    cover: '/logo192.png',
    developer: 'EA Sports',
    year: 2025,
    genre: 'Deportes',
    description: 'FIFA 26 es la entrega más reciente de la franquicia, con mejoras en IA y modos en línea.',
    items: [
      { id: 'i1', name: 'Carta Icon - Cristiano Ronaldo', info: 'Extremo — 93 de media.' },
      { id: 'i2', name: 'Kit Barcelona 2025', info: 'Uniforme titular' }
    ]
  },
  gta5: {
    id: 'gta5',
    title: 'GTA V',
    cover: '/logo512.png',
    developer: 'Rockstar',
    year: 2013,
    genre: 'Acción Aventura',
    description: 'Grand Theft Auto V, mundo abierto con múltiples actividades.',
    items: [
      { id: 'i3', name: 'Infernus', info: 'Supercoche' },
      { id: 'i4', name: 'Rifle francotirador', info: 'Alta precisión' }
    ]
  },
  minecraft: {
    id: 'minecraft',
    title: 'Minecraft',
    cover: '/minecraft-cover.png',
    developer: 'Mojang',
    year: 2011,
    genre: 'Sandbox',
    description: 'Construye, explora y sobrevive.',
    items: [
      { id: 'i5', name: 'Diamante', info: 'Mineral raro' },
      { id: 'i6', name: 'Perla Ender', info: 'Teletransporte' }
    ]
  }
};

export default function Detalles() {
  const { id } = useParams();
  const game = DB[id] || {
    title: 'Juego no encontrado',
    description: 'No se encontró información para este juego.',
    cover: '/logo192.png',
    items: []
  };

  return (
    <div className="details" aria-live="polite">
      <div className="left">
        <img src={game.cover} alt={`${game.title} port`} style={{width:'100%', borderRadius:8, marginBottom:12}} />
        <h2 style={{color:'#e6f7ff'}}>{game.title}</h2>
        <div style={{color:'#9fcff6', marginBottom:10}}>
          {game.genre} • {game.developer} • {game.year}
        </div>

        <div style={{marginTop:12}}>
          <h4 style={{marginBottom:6}}>Items destacados</h4>
          <div className="item-list">
            {game.items.map(it => (
              <div className="item" key={it.id}>
                <div>
                  <div style={{fontWeight:700}}>{it.name}</div>
                  <div style={{fontSize:12, color:'#9bbfe0'}}>{it.info}</div>
                </div>
                <Link to="#" className="btn ghost" onClick={(e)=>e.preventDefault()}>Ver</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="right">
        <h3 style={{color:'#e6f7ff'}}>Descripción</h3>
        <p style={{color:'#cfe9ff', marginTop:8, lineHeight:1.6}}>{game.description}</p>

        <div style={{marginTop:20}}>
          <h4>Más información</h4>
          <p style={{color:'#9bbfe0'}}>En una versión extendida puedes enlazar a artículos internos, guías y estadísticas.</p>
        </div>

        <div style={{marginTop:22}}>
          <Link to="/" className="btn ghost">Volver</Link>
        </div>
      </div>
    </div>
  );
}
