import React from 'react';
import { useParams, Link } from 'react-router-dom';

// =======================================================
//     BASE DE DATOS COMPLETA — TODOS LOS 10 JUEGOS
// =======================================================
const DB = {
  // -------------------------------------------------------------
  // FIFA 26
  // -------------------------------------------------------------
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
          'Fue uno de los uniformes más descargados del año.'
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
          'Posee patrones que mejoran la estabilidad.'
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
          'Tiene variaciones en GTA Online.'
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
          'Es uno de los vehículos más usados en GTA Online.',
          'Se puede llamar desde la interacción rápida.'
        ],
        estrategias: [
          'Ideal para misiones de asesinato.',
          'Evita helicópteros blindados.'
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
        img: '/mena.png',
        detalleGeneral:
          'Se utiliza para crear herramientas, armaduras y encantamientos avanzados.',
        stats: {
          rareza: 'Baja',
          nivelMina: 'Y -59',
          usos: 1561
        },
        curiosidades: [
          'Antes aparecía más arriba.',
          'Es de los minerales más deseados.'
        ],
        estrategias: [
          'Minar en Y -59 maximiza el drop.',
          'Usa Fortuna III para obtener más.'
        ]
      },

      {
        id: 'i8',
        name: 'Perla Ender',
        info: 'Permite teletransportarse.',
        img: '/ender.png',
        detalleGeneral:
          'Item clave para progresar y encontrar el portal al End.',
        stats: {
          rareza: 'Media',
          dañoAlUsarse: '2 corazones',
          dropean: 'Endermans'
        },
        curiosidades: [
          'Sirve para crear Ojos de Ender.',
          'Muy usada en PvP.'
        ],
        estrategias: [
          'Lanzarla hacia arriba ayuda a controlar daño.',
          'Úsala con cubos de agua.'
        ]
      },

      {
        id: 'i9',
        name: 'Tótem de inmortalidad',
        info: 'Evita la muerte una vez.',
        img: '/totem.png',
        detalleGeneral:
          'Al sostenerlo en la mano secundaria te salva automáticamente.',
        stats: {
          rareza: 'Muy rara',
          obtenido: 'Evocadores',
          usos: 1
        },
        curiosidades: [
          'Solo en raids.',
          'Su animación es muy reconocida.'
        ],
        estrategias: [
          'Muy útil en el Nether.',
          'Perfecto para PvP y exploración.'
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // VALORANT
  // -------------------------------------------------------------
  valorant: {
    id: 'valorant',
    title: 'Valorant',
    cover: '/valo.jpg',
    developer: 'Riot Games',
    year: 2020,
    genre: 'FPS Táctico',
    description:
      'Shooter táctico 5v5 basado en precisión y habilidades. Cada agente aporta una estrategia distinta al equipo.',
    infoExtendida:
      'Valorant recibe constantes parches, mapas, agentes y reworks que mantienen un meta competitivo variado.',
    items: [
      {
        id: 'v1',
        name: 'Vandal',
        info: 'Rifle de daño consistente.',
        img: '/vandal.png',
        detalleGeneral:
          'Arma favorita para distancias largas por su daño constante.',
        stats: {
          daño: 40,
          alcance: 'Largo',
          cadencia: '9.75'
        },
        curiosidades: [
          'Inspirada en AK.',
          'El arma más usada del juego.'
        ],
        estrategias: [
          'Disparar en ráfagas cortas.',
          'Ideal para duelos largos.'
        ]
      },

      {
        id: 'v2',
        name: 'Phantom',
        info: 'Rifle silencioso.',
        img: '/phantom.png',
        detalleGeneral:
          'Mejor control que la Vandal en distancias medias.',
        stats: {
          daño: 39,
          estabilidad: 'Alta',
          alcance: 'Medio'
        },
        curiosidades: ['Tiene silenciador.'],
        estrategias: ['Perfecta para “spray control”.']
      },

      {
        id: 'v3',
        name: 'Jett',
        info: 'Duelista rápido.',
        img: '/jett.jpg',
        detalleGeneral:
          'Gran movilidad y agresividad, ideal para entradas.',
        stats: {
          rol: 'Duelista',
          movilidad: 'Muy alta'
        },
        curiosidades: ['Ultimate muy precisa.'],
        estrategias: ['Ideal para entry frag.']
      }
    ]
  },

  // -------------------------------------------------------------
  // DRAGON BALL SPARKING ZERO
  // -------------------------------------------------------------
  dbsz: {
  id: 'dbsz',
  title: 'Dragon Ball Sparking Zero',
  cover: '/db.jpg',

  // 🟦 CONTROL DEL TAMAÑO DE LA PORTADA (NUEVO)
  coverStyle: {
    height: '250px',
    width: '100%',
    objectFit: 'contain',
    borderRadius: '10px',
    marginBottom: '12px'
  },

  developer: 'Spike Chunsoft',
  year: 2024,
  genre: 'Peleas 3D',
  description:
    'Peleas explosivas en 3D con movimientos icónicos y transformaciones.',
  infoExtendida:
    'Incluye un enorme catálogo de personajes y escenarios destruidos por el combate.',
  items: [
    {
      id: 'd1',
      name: 'Goku SSB',
      info: 'Transformación poderosa.',
      img: '/ssjb.jpg',
      detalleGeneral: 'Gran velocidad y daño constante.',
      stats: { ataque: 98, velocidad: 96 },
      curiosidades: ['Forma icónica de Super.'],
      estrategias: ['Combos aéreos.']
    },
    {
      id: 'd2',
      name: 'Gohan Bestia',
      info: 'Transformación moderna.',
      img: '/gohan.png',
      detalleGeneral: 'Poder ofensivo extremo.',
      stats: { ataque: 99, defensa: 88 },
      curiosidades: ['Apareció en DBS Super Hero.'],
      estrategias: ['Contraataques.']
    },
    {
      id: 'd3',
      name: 'Torneo del Poder',
      info: 'Escenario inmenso.',
      img: '/top.jpg',
      detalleGeneral: 'Gran espacio para pelear.',
      stats: { tamaño: 'Grande' },
      curiosidades: ['Basado en el anime.'],
      estrategias: ['Aprovechar altura.']
    }
  ]
},

  // -------------------------------------------------------------
  // FALL GUYS
  // -------------------------------------------------------------
  fallguys: {
    id: 'fallguys',
    title: 'Fall Guys',
    cover: '/fall.jpg',
    developer: 'Mediatonic',
    year: 2020,
    genre: 'Party / Battle Royale',
    description:
      'Minijuegos caóticos para 60 jugadores donde solo uno gana.',
    infoExtendida:
      'Incluye temporadas temáticas con nuevos obstáculos y skins.',
    items: [
      {
        id: 'f1',
        name: 'Skin Hotdog',
        info: 'Skin clásica.',
        img: '/dog.png',
        detalleGeneral: 'Muy popular desde la temporada 1.',
        stats: { rareza: 'Media' },
        curiosidades: ['Meme en la comunidad.'],
        estrategias: ['Buena visibilidad.']
      },
      {
        id: 'f2',
        name: 'Corona',
        info: 'Premio final.',
        img: '/corona.jpg',
        detalleGeneral: 'El objetivo principal del juego.',
        stats: { valor: 'Máximo' },
        curiosidades: ['Usada para skins premium.'],
        estrategias: ['Domina finales como Hexagonía.']
      },
      {
        id: 'f3',
        name: 'Hexagonía',
        info: 'Mapa final famoso.',
        img: '/hexa.jpg',
        detalleGeneral: 'Pisos que desaparecen.',
        stats: { dificultad: 'Alta' },
        curiosidades: ['Final más popular.'],
        estrategias: ['Planificar saltos.']
      }
    ]
  },

  // -------------------------------------------------------------
  // SUPER SMASH BROS
  // -------------------------------------------------------------
  smash: {
    id: 'smash',
    title: 'Super Smash Bros',
    cover: '/smash.jpg',
    developer: 'Nintendo',
    year: 2018,
    genre: 'Peleas / Party',
    description:
      'Crossover definitivo con más de 80 personajes y escenarios dinámicos.',
    infoExtendida:
      'Incluye modos competitivos, historia y personajes DLC.',
    items: [
      {
        id: 's1',
        name: 'Mario',
        info: 'Personaje equilibrado.',
        img: '/mario.png',
        detalleGeneral: 'Gran movilidad y combos.',
        stats: { ataque: 85, movilidad: 80 },
        curiosidades: ['Protagonista del juego.'],
        estrategias: ['Usar ataques aéreos.']
      },
      {
        id: 's2',
        name: 'Link BOTW',
        info: 'Espada y arco.',
        img: '/link.jpg',
        detalleGeneral: 'Gran rango y herramientas.',
        stats: { distancia: 85 },
        curiosidades: ['Basado en Breath of the Wild.'],
        estrategias: ['Control de espacio.']
      },
      {
        id: 's3',
        name: 'Hyrule',
        info: 'Escenario clásico.',
        img: '/map.png',
        detalleGeneral: 'Amplio y variado.',
        stats: { tamaño: 'Grande' },
        curiosidades: ['Muy usado.'],
        estrategias: ['Controlar zonas altas.']
      }
    ]
  },

  // -------------------------------------------------------------
  // POKÉMON ROJO
  // -------------------------------------------------------------
 pokemonrojo: {
  id: 'pokemonrojo',
  title: 'Pokémon Rojo',
  cover: '/poke.jpg',

  // 🔥 Estilo corregido: tamaño fijo, sin deformarse
  coverStyle: {
    width: '100%',
    maxHeight: '260px',
    objectFit: 'contain',
    borderRadius: '10px',
    marginBottom: '12px'
  },

  developer: 'Game Freak',
  year: 1996,
  genre: 'RPG / Aventuras',
  description:
    'El inicio de la saga Pokémon, con los 151 originales y una aventura en Kanto.',
  infoExtendida:
    'Incluye gimnasios, Pokédex clásica y combates por turnos.',
  items: [
    {
      id: 'p1',
      name: 'Charmander',
      info: 'Inicial de fuego.',
      img: '/charm.png',
      detalleGeneral: 'Excelente crecimiento ofensivo.',
      stats: { ataque: 52, velocidad: 65 },
      curiosidades: ['Su cola indica su salud.'],
      estrategias: ['Evolucionarlo rápido.']
    },
    {
      id: 'p2',
      name: 'Pokédex',
      info: 'Registro electrónico.',
      img: '/dex.png',
      detalleGeneral: 'Registra Pokémon.',
      stats: { tipo: 'Herramienta' },
      curiosidades: ['Creada por el Profesor Oak.'],
      estrategias: ['Clave para completar el juego.']
    },
    {
      id: 'p3',
      name: 'Pokebola',
      info: 'Permite capturar Pokémon.',
      img: '/pokeball.png',
      detalleGeneral: 'Objeto básico.',
      stats: { captura: 'Base' },
      curiosidades: ['Icono de la saga.'],
      estrategias: ['Capturar cuando estén debilitados.']
    }
  ]
},



  // -------------------------------------------------------------
  // FORTNITE
  // -------------------------------------------------------------
  fortnite: {
    id: 'fortnite',
    title: 'Fortnite',
    cover: '/fornite.jpg',
    developer: 'Epic Games',
    year: 2017,
    genre: 'Battle Royale',
    description:
      'Battle Royale con construcción, eventos y colaboraciones icónicas.',
    infoExtendida:
      'Incluye Zero Build, capítulos completos, temporadas temáticas y armas renovadas.',
    items: [
      {
        id: 'ft1',
        name: 'Scar Legendaria',
        info: 'Rifle icónico.',
        img: '/scar.png',
        detalleGeneral: 'Muy querida por la comunidad.',
        stats: { daño: 36 },
        curiosidades: ['Ha regresado varias veces.'],
        estrategias: ['Dominio en media distancia.']
      },
      {
        id: 'ft2',
        name: 'Peely',
        info: 'Skin del banano.',
        img: '/peely.png',
        detalleGeneral: 'Muy visible.',
        stats: { rareza: 'Épica' },
        curiosidades: ['Tiene muchas variantes.'],
        estrategias: ['Usarla en Zero Build.']
      },
      {
        id: 'ft3',
        name: 'Pico por defecto',
        info: 'Herramienta básica.',
        img: '/pico.png',
        detalleGeneral: 'Sirve para recolectar.',
        stats: { daño: 20 },
        curiosidades: ['Ha tenido rediseños.'],
        estrategias: ['Solo para farmear.']
      }
    ]
  },

  // -------------------------------------------------------------
  // CALL OF DUTY WARZONE
  // -------------------------------------------------------------
   warzone: {
  id: 'warzone',
  title: 'Call of Duty Warzone',
  cover: '/cod.jpg',
  coverStyle: {
    maxHeight: '230px',
    width: '100%',
    objectFit: 'contain',
    borderRadius: '10px',
    marginBottom: '12px'
  },
  developer: 'Activision',
  year: 2020,
  genre: 'Battle Royale / Shooter',

    description:
      'Battle royale militar con armas modernas, gulag y mapas enormes.',
    infoExtendida:
      'Temporadas, rediseños, armas META, contratos y eventos activos.',
    items: [
      {
        id: 'w1',
        name: 'Rifle TAQ-56',
        info: 'Rifle META.',
        img: '/taq56.png',
        detalleGeneral: 'Preciso y fuerte a distancia.',
        stats: { daño: 45, alcance: 'Largo' },
        curiosidades: ['Muy usado en torneos.'],
        estrategias: ['Controlar zonas altas.']
      },
      {
        id: 'w2',
        name: 'Mascara de gas',
        info: 'Protege del gas.',
        img: '/mask.png',
        detalleGeneral: 'Te da segundos clave en finales.',
        stats: { duración: 'Corta' },
        curiosidades: ['Puede romperse.'],
        estrategias: ['Rotar detrás del gas.']
      },
      {
        id: 'w3',
        name: 'ATV',
        info: 'Objeto equipable.',
        img: '/mask.png',
        detalleGeneral: 'Perfecto para rotaciones.',
        stats: { velocidad: 'Alta', blindaje: 'Bajo' },
        curiosidades: ['Más ligero del juego.'],
        estrategias: ['Evitar zonas abiertas.']
      }
    ]
  }
};

// =======================================================
//     COMPONENTE DETALLES
// =======================================================
export default function Detalles() {
  const { id } = useParams();
  const game = DB[id] || { title: 'Juego no encontrado', cover: '/logoo.png', items: [] };

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
  style={game.coverStyle || {
    width: '100%',
    borderRadius: 10,
    marginBottom: 12
  }}
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
