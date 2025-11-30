import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Base de datos extendida REAL con información detallada por ítem
const DB = {
  fifa26: {
    id: 'fifa26',
    title: 'FIFA 26',
    cover: '/FC.jpg',
    developer: 'EA Sports',
    year: 2025,
    genre: 'Deportes',
    description:
      'FIFA 26 introduce mejoras en HyperMotion V, nuevos modos competitivos, optimización del motor Frostbite y animaciones más fluidas basadas en captura de movimiento real.',
    infoExtendida:
      'La IA reactiva, impactos renovados y un Ultimate Team más dinámico convierten a FIFA 26 en una entrega muy sólida.',
    items: [
      {
        id: 'i1',
        name: 'Carta Icon - Cristiano Ronaldo',
        info: 'Extremo — 97 de media.',
        img: '/CR7.jpg',
        detalleGeneral:
          'La carta Icon Prime de Cristiano Ronaldo es una de las más valiosas por su increíble ritmo, tiro potente y movimientos estrella.',
        stats: {
          ritmo: 94,
          tiro: 96,
          pase: 88,
          regate: 95,
          físico: 88
        },
        curiosidades: [
          'Es una de las cartas Icon más buscadas.',
          'Puede jugar como ED, EI o DC.',
          'Tiene animaciones exclusivas de tiro.'
        ],
        estrategias: [
          'Ideal para contraataques rápidos.',
          'Combina excelente con un mediapunta creativo.',
          'Úsalo en formaciones 4-3-3 o 4-2-3-1.'
        ]
      },

      {
        id: 'i2',
        name: 'Camisetas Barcelona 2025',
        info: 'Uniforme titular.',
        img: '/Camisas.png',
        detalleGeneral:
          'El uniforme del FC Barcelona 2025 presenta un diseño moderno con detalles que recuerdan a temporadas clásicas.',
        stats: {
          rareza: 'Común',
          tipo: 'Cosmético',
          uso: 'Ultimate Team y Modo Carrera'
        },
        curiosidades: [
          'El diseño está inspirado en la era Ronaldinho.',
          'Fue uno de los uniformes más descargados del año.',
        ],
        estrategias: [
          'Ideal para personalizar tu plantilla.',
          'Se combina bien con equipaciones retro del club.'
        ]
      },

      {
        id: 'i3',
        name: 'Balón oficial 2025',
        info: 'Uso en competiciones internacionales.',
        img: '/balon2025.png',
        detalleGeneral:
          'Balón oficial utilizado en competiciones FIFA. Posee aerodinámica avanzada y paneles termosellados.',
        stats: {
          rareza: 'Raro',
          peso: '430 g',
          material: 'Microfibra de alto rendimiento'
        },
        curiosidades: [
          'Usado en finales oficiales.',
          'Posee patrones que mejoran la estabilidad.',
        ],
        estrategias: [
          'Recomendado para climas fríos en Modo Carrera.',
          'Da una mejor sensación visual para tiros de larga distancia.'
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // GTA V
  // -------------------------------------------------------------
  gta5: {
    id: 'gta5',
    title: 'GTA V',
    cover: '/GTA.jpg',
    developer: 'Rockstar Games',
    year: 2013,
    genre: 'Acción Aventura',
    description:
      'GTA V es un mundo abierto repleto de misiones, vehículos, armas y un modo online expansivo.',
    infoExtendida:
      'GTA Online recibe contenido constante, desde golpes hasta nuevos vehículos y propiedades.',
    items: [
      {
        id: 'i4',
        name: 'Infernus',
        info: 'Supercoche de alta velocidad.',
        img: '/infernus.png',
        detalleGeneral:
          'Uno de los coches más icónicos y rápidos. Inspirado en Lamborghini y vehículos superdeportivos reales.',
        stats: {
          velocidad: '9.6/10',
          aceleración: '9.0/10',
          manejo: '8.5/10'
        },
        curiosidades: [
          'Es uno de los autos más usados desde GTA San Andreas.',
          'Tiene variaciones en GTA Online.',
        ],
        estrategias: [
          'Perfecto para carreras urbanas.',
          'Evita caminos off-road: pierde control fácilmente.'
        ]
      },

      {
        id: 'i5',
        name: 'Rifle francotirador',
        info: 'Arma de largo alcance.',
        img: '/sniper.png',
        detalleGeneral:
          'Un rifle de precisión ideal para eliminar objetivos desde grandes distancias.',
        stats: {
          daño: 95,
          precisión: 100,
          velocidadRecarga: 'Baja'
        },
        curiosidades: [
          'Tiene accesorios como mira avanzada.',
          'Uno de los favoritos para misiones de sigilo.'
        ],
        estrategias: [
          'Úsalo desde puntos elevados.',
          'Evita el combate cercano: su recarga es lenta.'
        ]
      },

      {
        id: 'i6',
        name: 'Helicóptero Buzzard',
        info: 'Vehículo aéreo ligero y ágil.',
        img: '/buzzard.png',
        detalleGeneral:
          'Helicóptero rápido y maniobrable con misiles guiados y ametralladoras.',
        stats: {
          velocidad: 'Alta',
          blindaje: 'Medio',
          armamento: 'Misiles + Ametralladoras'
        },
        curiosidades: [
          'Es uno de los vehículos más usados en GTA Online por su velocidad.',
          'Se puede llamar desde la interacción rápida.'
        ],
        estrategias: [
          'Ideal para misiones de asesinato.',
          'Evita helicópteros blindados: son más resistentes.'
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // MINECRAFT
  // -------------------------------------------------------------
  minecraft: {
    id: 'minecraft',
    title: 'Minecraft',
    cover: '/maincra.jpg',
    developer: 'Mojang',
    year: 2011,
    genre: 'Sandbox / Supervivencia',
    description:
      'Minecraft combina construcción, exploración y supervivencia en un mundo infinito.',
    infoExtendida:
      'Actualizaciones como Caves & Cliffs y Trails & Tales expanden el mundo.',
    items: [
      {
        id: 'i7',
        name: 'Diamante',
        info: 'El mineral más valioso del juego.',
        img: '/diamond.png',
        detalleGeneral:
          'Se utiliza para crear herramientas, armaduras y encantamientos de nivel avanzado.',
        stats: {
          rareza: 'Baja',
          nivelMina: 'Y -59',
          usos: 1561
        },
        curiosidades: [
          'Antes de la actualización Caves & Cliffs, el diamante aparecía más arriba.',
          'Es uno de los objetos más deseados.'
        ],
        estrategias: [
          'Minar en Y -59 maximiza las posibilidades.',
          'Usa Fortuna III para obtener más diamantes por bloque.'
        ]
      },

      {
        id: 'i8',
        name: 'Perla Ender',
        info: 'Permite teletransportarse.',
        img: '/ender_pearl.png',
        detalleGeneral:
          'Item clave para progresar en el juego y encontrar el portal al End.',
        stats: {
          rareza: 'Media',
          dañoAlUsarse: '2 corazones',
          dropean: 'Endermans'
        },
        curiosidades: [
          'También se usa para fabricar Ojos de Ender.',
          'Se puede usar en PvP para escapes rápidos.'
        ],
        estrategias: [
          'Lanza hacia arriba para escapes cortos.',
          'Usa en combinación con cubos de agua para amortiguar daño.'
        ]
      },

      {
        id: 'i9',
        name: 'Tótem de inmortalidad',
        info: 'Evita la muerte una vez.',
        img: '/totem.png',
        detalleGeneral:
          'Al sostenerlo en la mano secundaria, evita que el jugador muera.',
        stats: {
          rareza: 'Muy rara',
          obtenido: 'Evocadores',
          usos: 1
        },
        curiosidades: [
          'Solo se obtiene de raids.',
          'Su animación de activación es icónica.'
        ],
        estrategias: [
          'Ideal para exploración del Nether.',
          'Perfecto para PvP o caídas accidentales.'
        ]
      }
    ]
  }
};

export default function Detalles() {
  const { id } = useParams();
  const game = DB[id] || { title: 'Juego no encontrado', cover: '/logo192.png', items: [] };

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
      {/* IZQUIERDA */}
      <div
        style={{
          width: '35%',
          background: 'rgba(255,255,255,0.04)',
          padding: 20,
          borderRadius: 12,
          overflow: 'hidden'
        }}
      >
        <img
          src={game.cover}
          alt="portada"
          style={{ width: '100%', borderRadius: 10, marginBottom: 12 }}
        />

        <h2>{game.title}</h2>
        <div style={{ color: '#9fcff6' }}>
          {game.genre} • {game.developer} • {game.year}
        </div>

        <h4 style={{ marginTop: 20 }}>Items destacados</h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {game.items.map((i) => (
            <div
              key={i.id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: 10,
                borderRadius: 8,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <strong>{i.name}</strong>
                <div style={{ fontSize: 12, color: '#9bbfe0' }}>{i.info}</div>
              </div>

              <Link
                to={`/game/${game.id}/item/${i.id}`}
                style={{
                  padding: '4px 10px',
                  border: '1px solid #9fcff6',
                  borderRadius: 8,
                  color: '#9fcff6',
                  textDecoration: 'none'
                }}
              >
                Ver
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* DERECHA */}
      <div
        style={{
          flex: 1,
          background: 'rgba(255,255,255,0.03)',
          padding: 20,
          borderRadius: 12,
          overflowY: 'auto'
        }}
      >
        <h3>Descripción</h3>
        <p>{game.description}</p>

        <h3 style={{ marginTop: 20 }}>Información adicional</h3>
        <p>{game.infoExtendida}</p>

        <h3 style={{ marginTop: 20 }}>Guías y Consejos</h3>
        <ul>
          <li>Trucos para progresar más rápido.</li>
          <li>Estrategias avanzadas.</li>
          <li>Secretos del juego.</li>
        </ul>

        <Link to="/" style={{ marginTop: 30, display: 'inline-block' }}>
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
