import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Base de datos extendida con más información REAL
const DB = {
  fifa26: {
    id: 'fifa26',
    title: 'FIFA 26',
    cover: '/FC.jpg',
    developer: 'EA Sports',
    year: 2025,
    genre: 'Deportes',
    description:
      'FIFA 26 introduce mejoras en HyperMotion V, nuevos modos competitivos, optimización del motor Frostbite y animaciones más fluidas basadas en captura de movimiento real. El Modo Carrera incluye sistemas de progresión más profundos y mayor control sobre cuerpos técnicos y estrategias.',
    infoExtendida:
      'La comunidad destaca que FIFA 26 ofrece una IA más reactiva y un sistema de impacto renovado. Ultimate Team añade colecciones dinámicas y eventos colaborativos.',
    items: [
      { id: 'i1', name: 'Carta Icon - Cristiano Ronaldo', info: 'Extremo — 93 de media.' },
      { id: 'i2', name: 'Kit Barcelona 2025', info: 'Uniforme titular' },
      { id: 'i3', name: 'Balón oficial 2025', info: 'Uso en competiciones internacionales' }
    ]
  },

  gta5: {
    id: 'gta5',
    title: 'GTA V',
    cover: '/GTA.jpg',
    developer: 'Rockstar Games',
    year: 2013,
    genre: 'Acción Aventura',
    description:
      'GTA V es un juego de mundo abierto donde puedes explorar Los Santos y el condado de Blaine. Ofrece misiones, conducción, acción, múltiples personajes y un modo online expansivo llamado GTA Online.',
    infoExtendida:
      'GTA Online continúa recibiendo contenido: golpes, negocios, propiedades, vehículos, armas y eventos semanales. Es uno de los juegos más vendidos de la historia.',
    items: [
      { id: 'i4', name: 'Infernus', info: 'Supercoche de alta velocidad' },
      { id: 'i5', name: 'Rifle francotirador', info: 'Arma de largo alcance' },
      { id: 'i6', name: 'Helicóptero Buzzard', info: 'Vehículo aéreo ligero y ágil' }
    ]
  },

  minecraft: {
    id: 'minecraft',
    title: 'Minecraft',
    cover: '/maincra.jpg',
    developer: 'Mojang',
    year: 2011,
    genre: 'Sandbox / Supervivencia',
    description:
      'Minecraft es un videojuego de construcción, minería y supervivencia. Los jugadores pueden explorar mundos infinitos, crear estructuras y enfrentarse a criaturas hostiles. Es uno de los juegos más influyentes de todos los tiempos.',
    infoExtendida:
      'El juego recibe actualizaciones constantes como la Caves & Cliffs, Nether Update y Trails & Tales. Ofrece modo supervivencia, creativo, aventura y multijugador.',
    items: [
      { id: 'i7', name: 'Diamante', info: 'El mineral más valioso del juego' },
      { id: 'i8', name: 'Perla Ender', info: 'Permite teletransportarse' },
      { id: 'i9', name: 'Totem de inmortalidad', info: 'Evita la muerte una vez' }
    ]
  }
};

export default function Detalles() {
  const { id } = useParams();
  const game =
    DB[id] || {
      title: 'Juego no encontrado',
      description: 'No se encontró información para este juego.',
      cover: '/logo192.png',
      items: []
    };

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        height: 'calc(100vh - 90px)',
        padding: 20,
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* COLUMNA IZQUIERDA — FIJA */}
      <div
        style={{
          width: '35%',
          background: 'rgba(255,255,255,0.04)',
          padding: 20,
          borderRadius: 12,
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        <img
          src={game.cover}
          alt={`${game.title} portada`}
          style={{
            width: '100%',
            borderRadius: 10,
            marginBottom: 12,
            objectFit: 'cover'
          }}
        />

        <h2 style={{ color: '#e6f7ff' }}>{game.title}</h2>

        <div style={{ color: '#9fcff6', marginBottom: 14 }}>
          {game.genre} • {game.developer} • {game.year}
        </div>

        <h4 style={{ marginBottom: 8 }}>Items destacados</h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {game.items.map((it) => (
            <div
              key={it.id}
              style={{
                background: 'rgba(255,255,255,0.06)',
                padding: 10,
                borderRadius: 8,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontWeight: 700 }}>{it.name}</div>
                <div style={{ fontSize: 12, color: '#9bbfe0' }}>{it.info}</div>
              </div>

              <button
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: 6,
                  padding: '4px 10px',
                  cursor: 'pointer',
                  color: '#cfe9ff'
                }}
              >
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* COLUMNA DERECHA — SCROLL */}
      <div
        style={{
          flexGrow: 1,
          background: 'rgba(255,255,255,0.03)',
          padding: 20,
          borderRadius: 12,
          overflowY: 'auto'
        }}
      >
        <h3 style={{ color: '#e6f7ff' }}>Descripción</h3>
        <p style={{ color: '#cfe9ff', marginTop: 10, lineHeight: 1.7 }}>{game.description}</p>

        <h3 style={{ marginTop: 20 }}>Información adicional</h3>
        <p style={{ color: '#9bbfe0', marginTop: 8 }}>{game.infoExtendida}</p>

        <h3 style={{ marginTop: 20 }}>Guías y Consejos</h3>
        <ul style={{ color: '#bcdcff', marginLeft: 20, lineHeight: 1.7 }}>
          <li>Trucos y estrategias para progresar más rápido.</li>
          <li>Consejos de jugadores avanzados.</li>
          <li>Información sobre modos especiales y secretos del juego.</li>
        </ul>

        <div style={{ marginTop: 25 }}>
          <Link to="/" className="btn ghost">
            ↩ Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
