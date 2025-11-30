import React from 'react';
import GameCard from '../components/gamecard.jsx';

// Sample data: juegos + items (puedes expandir)
const GAMES = [
  {
    id: 'fifa26',
    title: 'FIFA 26',
    short: 'Simulación de fútbol — modos carrera, Ultimate Team, clubs y más.',
    cover: '/FC.jpg',
    year: 2025,
    developer: 'EA Sports',
    genre: 'Deportes',
    description: `FIFA 26 es la entrega más reciente de la franquicia. En esta mini-wiki verás datos principales y ejemplos de items (cartas, kits, objetos).`,
    items: [
      { id: 'fifa26-card-ronaldo', name: 'Carta Icon - Cristiano Ronaldo', info: 'Extremo, 93 de media.' },
      { id: 'fifa26-kit-home', name: 'Kit del Barcelona 2025', info: 'Uniforme titular' }
    ]
  },
  {
    id: 'gta5',
    title: 'GTA V',
    short: 'Acción y mundo abierto — misiones, vehículos, armas.',
    cover: '/GTA.jpg',
    year: 2013,
    developer: 'Rockstar Games',
    genre: 'Acción Aventura',
    description: `Grand Theft Auto V, mundo abierto con múltiples protagonistas.`,
    items: [
      { id: 'gta5-car-infernus', name: 'Infernus', info: 'Supercoche clásico' },
      { id: 'gta5-weapon-sniper', name: 'Rifle francotirador', info: 'Alto daño, largo alcance' }
    ]
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    short: 'Sandbox de construcción, supervivencia y creatividad.',
    cover: '/maincra.jpg',
    year: 2011,
    developer: 'Mojang',
    genre: 'Sandbox',
    description: `Crea y explora mundos generados proceduralmente.`,
    items: [
      { id: 'mc-diamond', name: 'Diamante', info: 'Mineral valioso para herramientas' },
      { id: 'mc-ender-pearl', name: 'Perla ender', info: 'Teleportación' }
    ]
  }
];

export default function Home() {
  return (
    <div>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18}}>
        <div>
          <h1 style={{fontSize:26, color:'#e6f7ff'}}>Explorar juegos</h1>
          <p style={{color:'#9fcff6'}}>Encuentra información y items clave de cada juego.</p>
        </div>
      </header>

      <section className="games-grid" aria-label="Listado de juegos">
        {GAMES.map(game => (
          <GameCard key={game.id} game={{
            id: game.id,
            title: game.title,
            short: game.short,
            cover: game.cover.startsWith('/') ? game.cover : game.cover,
            moreUrl: '#'
          }} />
        ))}
      </section>
    </div>
  );
}
