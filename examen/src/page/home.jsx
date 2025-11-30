import React from 'react';
import GameCard from '../components/gamecard.jsx';

// =======================================================
//     LISTA COMPLETA DE JUEGOS PARA EL HOME
// =======================================================

const GAMES = [
  // FIFA 26
  {
    id: 'fifa26',
    title: 'FIFA 26',
    short: 'Simulación de fútbol — Ultimate Team, modos carrera y más.',
    cover: '/FC.jpg'
  },

  // GTA V
  {
    id: 'gta5',
    title: 'GTA V',
    short: 'Acción, mundo abierto, misiones y vehículos.',
    cover: '/GTA.jpg'
  },

  // Minecraft
  {
    id: 'minecraft',
    title: 'Minecraft',
    short: 'Sandbox, supervivencia y creatividad infinita.',
    cover: '/maincra.jpg'
  },

  // Valorant
  {
    id: 'valorant',
    title: 'Valorant',
    short: 'FPS táctico con agentes y habilidades únicas.',
    cover: '/valo.jpg'
  },

  // Dragon Ball Sparking Zero
  {
    id: 'dbsz',
    title: 'Dragon Ball Sparking Zero',
    short: 'Peleas explosivas en 3D con cientos de personajes.',
    cover: '/db.jpg'
  },

  // Fall Guys
  {
    id: 'fallguys',
    title: 'Fall Guys',
    short: 'Caos colorido en minijuegos y carreras.',
    cover: '/fall.jpg'
  },

  // Super Smash Bros
  {
    id: 'smash',
    title: 'Super Smash Bros',
    short: 'Lucha caótica entre héroes de Nintendo.',
    cover: '/smash.jpg'
  },

  // Pokémon Rojo
  {
    id: 'pokemonrojo',
    title: 'Pokémon Rojo',
    short: 'Aventura clásica atrapando Pokémon.',
    cover: '/poke.jpg'
  },

  // Fortnite
  {
    id: 'fortnite',
    title: 'Fortnite',
    short: 'Battle Royale con construcción y cientos de skins.',
    cover: '/fornite.jpg'
  },

  // ⭐ NUEVO — CALL OF DUTY WARZONE (10° juego)
  {
    id: 'warzone',
    title: 'Call of Duty: Warzone',
    short: 'Battle Royale militar con armamento realista y acción intensa.',
    cover: '/cod.jpg'   // Agrégala en /public
  }
];

// =======================================================
//    HOME — LISTA DE JUEGOS
// =======================================================

export default function Home() {
  return (
    <div>
      <header 
        style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          marginBottom:18
        }}
      >
        <div>
          <h1 style={{fontSize:26, color:'#e6f7ff'}}>Explorar juegos</h1>
          <p style={{color:'#9fcff6'}}>Encuentra información y items clave de cada juego.</p>
        </div>
      </header>

      <section className="games-grid" aria-label="Listado de juegos">
        {GAMES.map(game => (
          <GameCard 
            key={game.id} 
            game={{
              id: game.id,
              title: game.title,
              short: game.short,
              cover: game.cover,
              moreUrl: `/game/${game.id}`
            }}
          />
        ))}
      </section>
    </div>
  );
}
