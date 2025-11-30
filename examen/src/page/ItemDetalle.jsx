import React from "react";
import { useParams, Link } from "react-router-dom";

// =======================================================
//   BASE DE DATOS COMPLETA PARA ITEMDETALLE
//   Sincronizada 1:1 con Detalles.jsx
// =======================================================

const DB = {

  // FIFA 26
  fifa26: {
    items: [
      {
        id: "i1",
        name: "Carta Icon - Cristiano Ronaldo",
        info: "Extremo — 97 de media.",
        img: "/CR7.jpg",
        detalleGeneral:
          "La carta Icon Prime de Cristiano Ronaldo es una de las más valiosas por su ritmo explosivo, tiro preciso y movimientos estrella.",
        stats: {
          Ritmo: 94,
          Tiro: 96,
          Pase: 88,
          Regate: 95,
          Físico: 88
        },
        curiosidades: [
          "Una de las cartas más usadas en FUT.",
          "Puede jugar como ED, EI o DC.",
          "Tiene animaciones exclusivas."
        ],
        estrategias: [
          "Ideal para formaciones con extremos abiertos.",
          "Usa su regate para romper defensas cerradas.",
          "Combina perfecto con un mediapunta creativo."
        ]
      },

      {
        id: "i2",
        name: "Camisetas Barcelona 2025",
        info: "Uniforme titular.",
        img: "/Camisas.png",
        detalleGeneral:
          "El uniforme oficial del FC Barcelona temporada 2025 mezcla modernidad con detalles retro.",
        stats: {
          Rareza: "Común",
          Tipo: "Cosmético",
          Uso: "Ultimate Team"
        },
        curiosidades: [
          "Inspirado en la era de Ronaldinho.",
          "Uno de los uniformes más descargados."
        ],
        estrategias: [
          "Ideal para personalizar tu equipo.",
          "Combina con temas visuales retro."
        ]
      },

      {
        id: "i3",
        name: "Balón oficial 2025",
        info: "Uso en competiciones FIFA.",
        img: "/balon2025.png",
        detalleGeneral:
          "Balón oficial de torneos FIFA con microtextura y paneles termosellados.",
        stats: {
          Rareza: "Raro",
          Peso: "430 g",
          Material: "Microfibra"
        },
        curiosidades: [
          "Usado en la final del torneo 2025.",
          "Aumenta estabilidad en tiros largos."
        ],
        estrategias: [
          "Ideal para Modo Carrera.",
          "Mejora visibilidad en clima lluvioso."
        ]
      }
    ]
  },

  // GTA V
  gta5: {
    items: [
      {
        id: "i4",
        name: "Infernus",
        info: "Supercoche de alta velocidad.",
        img: "/infernus.png",
        detalleGeneral:
          "Superdeportivo icónico inspirado en Lamborghini, rápido y agresivo.",
        stats: {
          Velocidad: "9.6/10",
          Aceleración: "9.0/10",
          Manejo: "8.5/10"
        },
        curiosidades: [
          "Presente desde GTA San Andreas.",
          "Muy popular en carreras urbanas."
        ],
        estrategias: [
          "Evita terrenos off-road.",
          "Ideal para carreras rápidas."
        ]
      },

      {
        id: "i5",
        name: "Rifle francotirador",
        info: "Arma de largo alcance.",
        img: "/sniper.png",
        detalleGeneral:
          "Perfecto para eliminar objetivos a larga distancia con precisión extrema.",
        stats: {
          Daño: 95,
          Precisión: 100,
          Recarga: "Lenta"
        },
        curiosidades: [
          "Incluye mira avanzada.",
          "Arma de sigilo favorita."
        ],
        estrategias: [
          "Dispara desde lugares altos.",
          "No recomendado para combate cercano."
        ]
      },

      {
        id: "i6",
        name: "Helicóptero Buzzard",
        info: "Vehículo aéreo ligero.",
        img: "/buzzard.png",
        detalleGeneral:
          "Helicóptero de ataque ágil con misiles guiados y ametralladoras.",
        stats: {
          Velocidad: "Alta",
          Blindaje: "Medio",
          Armamento: "Misiles + Ametralladora"
        },
        curiosidades: [
          "Muy usado en misiones de GTA Online.",
          "Puede solicitarse instantáneamente."
        ],
        estrategias: [
          "Ideal para misiones de ataque rápido.",
          "Evita helicópteros blindados."
        ]
      }
    ]
  },

  // MINECRAFT
  minecraft: {
    items: [
      {
        id: "i7",
        name: "Diamante",
        info: "Mineral valioso.",
        img: "/diamond.png",
        detalleGeneral:
          "El mineral más deseado del juego. Se usa en herramientas, armaduras y encantamientos avanzados.",
        stats: {
          Rareza: "Baja",
          Nivel_de_Mina: "Y -59",
          Durabilidad: 1561
        },
        curiosidades: [
          "Antes era más común en capas superiores.",
          "Ícono del juego desde su salida."
        ],
        estrategias: [
          "Usa Fortuna III.",
          "Minar en Y -59 maximiza su aparición."
        ]
      },

      {
        id: "i8",
        name: "Perla Ender",
        info: "Permite teletransportarse.",
        img: "/ender_pearl.png",
        detalleGeneral:
          "Objeto esencial para encontrar el portal al End.",
        stats: {
          Rareza: "Media",
          Daño_al_usar: "2 corazones",
          Dropeado_por: "Enderman"
        },
        curiosidades: [
          "Útil en PvP para escapar.",
          "Base para crear Ojos de Ender."
        ],
        estrategias: [
          "Lanza hacia arriba para escapes cortos.",
          "Usa agua para evitar daño."
        ]
      },

      {
        id: "i9",
        name: "Tótem de inmortalidad",
        info: "Evita la muerte una vez.",
        img: "/totem.png",
        detalleGeneral:
          "Al sostenerlo en la mano secundaria, te salva de la muerte.",
        stats: {
          Rareza: "Muy rara",
          Obtenido_en: "Raids",
          Usos: 1
        },
        curiosidades: [
          "Solo lo dropean Evocadores.",
          "Posee animación única."
        ],
        estrategias: [
          "Ideal para explorar cuevas.",
          "Útil en Nether y PvP."
        ]
      }
    ]
  },

  // VALORANT
  valorant: {
    items: [
      {
        id: "v1",
        name: "Vandal",
        info: "Rifle de daño constante.",
        img: "/vandal.png",
        detalleGeneral:
          "Rifle preciso con daño uniforme a cualquier distancia.",
        stats: {
          Daño_a_la_cabeza: 160,
          Cadencia: "9.75/s",
          Balas: 25
        },
        curiosidades: [
          "Arma favorita en competitivo.",
          "Muy usada en rangos altos."
        ],
        estrategias: [
          "Controla el retroceso.",
          "Apunta a la cabeza."
        ]
      },

      {
        id: "v2",
        name: "Phantom",
        info: "Rifle estable.",
        img: "/phantom.png",
        detalleGeneral:
          "Rifle con retroceso más suave ideal para ráfagas cortas.",
        stats: {
          Daño_cabeza: 156,
          Cadencia: "11/s",
          Silenciada: "Sí"
        },
        curiosidades: [
          "Mejor que Vandal en corta distancia.",
          "Se usa para rush y defensa."
        ],
        estrategias: [
          "Úsala en mapas cerrados.",
          "Ideal para controlar zonas."
        ]
      },

      {
        id: "v3",
        name: "Agente Jett",
        info: "Duelista ágil.",
        img: "/jett.png",
        detalleGeneral:
          "Agente rápida que destaca por movimientos evasivos.",
        stats: {
          Rol: "Duelista",
          Movilidad: "Alta",
          Dificultad: "Media"
        },
        curiosidades: [
          "Muy usada en competitivo.",
          "Su definitiva es letal."
        ],
        estrategias: [
          "Aprovecha el dash para entrar.",
          "Úsala agresivamente."
        ]
      }
    ]
  },

  // DRAGON BALL SPARKING ZERO
  dbsz: {
    items: [
      {
        id: "d1",
        name: "Goku Super Saiyan Blue",
        info: "Forma poderosa.",
        img: "/goku_blue.png",
        detalleGeneral:
          "Transformación con gran velocidad y ataques potentes.",
        stats: {
          Ki: "Muy alto",
          Ataque: "Excelente",
          Velocidad: "Muy alta"
        },
        curiosidades: [
          "Una de sus formas más icónicas.",
          "Tiene combos únicos."
        ],
        estrategias: [
          "Úsalo para presionar.",
          "Aprovecha sus ataques cargados."
        ]
      },

      {
        id: "d2",
        name: "Gohan Bestia",
        info: "Ataques explosivos.",
        img: "/gohan_beast.png",
        detalleGeneral:
          "Una de las formas más recientes y poderosas.",
        stats: {
          Ataque: "Extremo",
          Defensa: "Media",
          Velocidad: "Alta"
        },
        curiosidades: [
          "Debutó en Dragon Ball Super.",
          "Famoso por su grito."
        ],
        estrategias: [
          "Aprovecha combos largos.",
          "Mantén presión constante."
        ]
      },

      {
        id: "d3",
        name: "Torneo del Poder",
        info: "Arena de combate.",
        img: "/tod.png",
        detalleGeneral:
          "Escenario destructible icónico del anime.",
        stats: {
          Tamaño: "Grande",
          Obstáculos: "Bajos"
        },
        curiosidades: [
          "Escenario del anime.",
          "Muy amplio."
        ],
        estrategias: [
          "Úsalo para combates móviles.",
          "Ideal para personajes veloces."
        ]
      }
    ]
  },

  // FALL GUYS
  fallguys: {
    items: [
      {
        id: "f1",
        name: "Skin Hotdog",
        info: "Skin clásica.",
        img: "/hotdog.png",
        detalleGeneral:
          "Una de las primeras skins icónicas del juego.",
        stats: {
          Rareza: "Rara",
          Evento: "Temporada 1"
        },
        curiosidades: ["Icono del juego.", "Muy usada por creadores."],
        estrategias: ["Ideal para destacar.", "Perfecta para minijuegos iniciales."]
      },

      {
        id: "f2",
        name: "Corona",
        info: "Premio máximo.",
        img: "/crown.png",
        detalleGeneral:
          "La corona representa ganar una partida completa.",
        stats: {
          Valor: "Alto",
          Dificultad: "Alta"
        },
        curiosidades: ["Símbolo de victoria.", "Usada para comprar skins."],
        estrategias: ["Mantén calma en finales.", "Evita empujes."]
      },

      {
        id: "f3",
        name: "Hexagonía",
        info: "Prueba final.",
        img: "/hexagonia.png",
        detalleGeneral:
          "Final icónica donde caes piso por piso.",
        stats: {
          Pisos: 7,
          Dificultad: "Media-Alta"
        },
        curiosidades: ["Una de las pruebas más jugadas."],
        estrategias: ["Salta lentamente.", "Corta camino a rivales."]
      }
    ]
  },

  // SUPER SMASH BROS
  smash: {
    items: [
      {
        id: "s1",
        name: "Mario",
        info: "Personaje equilibrado.",
        img: "/mario.png",
        detalleGeneral:
          "Fácil de usar, ideal para principiantes.",
        stats: {
          Fuerza: "Media",
          Velocidad: "Media-Alta",
          Recuperación: "Buena"
        },
        curiosidades: ["Personaje principal de Nintendo."],
        estrategias: ["Combos rápidos.", "Evita ataques pesados."]
      },

      {
        id: "s2",
        name: "Link BOTW",
        info: "Arquero y espadachín.",
        img: "/link_botw.png",
        detalleGeneral:
          "Gran variedad de herramientas a distancia.",
        stats: {
          Alcance: "Alto",
          Potencia: "Alta",
          Movilidad: "Media"
        },
        curiosidades: ["Basado en Breath of the Wild."],
        estrategias: ["Controla espacio.", "Combina flechas y bombas."]
      },

      {
        id: "s3",
        name: "Escenario Hyrule",
        info: "Mapa clásico.",
        img: "/hyrule.png",
        detalleGeneral:
          "Escenario amplio para batallas largas.",
        stats: {
          Tamaño: "Grande",
          Obstáculos: "Medios"
        },
        curiosidades: ["Escenario presente desde N64."],
        estrategias: ["Aprovecha el espacio.", "Ideal para proyectiles."]
      }
    ]
  },

  // POKÉMON ROJO
  pokemonrojo: {
    items: [
      {
        id: "p1",
        name: "Charmander",
        info: "Inicial de fuego.",
        img: "/charmander.png",
        detalleGeneral:
          "Pokémon inicial que evoluciona en Charizard.",
        stats: {
          Tipo: "Fuego",
          Evoluciones: "3",
          Debilidades: "Agua, Tierra, Roca"
        },
        curiosidades: ["Icono de la primera generación."],
        estrategias: ["Ideal contra tipos planta.", "Entrénalo temprano."]
      },

      {
        id: "p2",
        name: "Pokédex",
        info: "Registro electrónico.",
        img: "/pokedex.png",
        detalleGeneral:
          "Herramienta esencial para registrar Pokémon.",
        stats: {
          Uso: "Registro",
          Región: "Kanto"
        },
        curiosidades: ["Creada por el Profesor Oak."],
        estrategias: ["Explora todas las rutas."]
      },

      {
        id: "p3",
        name: "Pokebola",
        info: "Para capturar Pokémon.",
        img: "/pokeball.png",
        detalleGeneral:
          "Item básico para capturar Pokémon salvajes.",
        stats: {
          Ratio_de_Captura: "Normal",
          Uso: "Captura"
        },
        curiosidades: ["Icono global de Pokémon."],
        estrategias: ["Debilita al Pokémon antes de lanzarla."]
      }
    ]
  },

  // FORTNITE
  fortnite: {
    items: [
      {
        id: "ft1",
        name: "Scar Legendaria",
        info: "Rifle poderoso.",
        img: "/scar.png",
        detalleGeneral:
          "Rifle legendario muy preciso y devastador.",
        stats: {
          Daño: 36,
          Cadencia: "5.5/s",
          Cargador: 30
        },
        curiosidades: ["Arma favorita del capítulo 1."],
        estrategias: ["Perfecta para media distancia."]
      },

      {
        id: "ft2",
        name: "Peely",
        info: "Skin de plátano.",
        img: "/peely.png",
        detalleGeneral:
          "Uno de los personajes más icónicos del juego.",
        stats: {
          Rareza: "Legendaria",
          Evento: "Temporada 8"
        },
        curiosidades: ["Muy usada por streamers."],
        estrategias: ["Ideal para diversión."]
      },

      {
        id: "ft3",
        name: "Pico por defecto",
        info: "Herramienta básica.",
        img: "/pico.png",
        detalleGeneral:
          "Herramienta clásica inicial del jugador.",
        stats: {
          Daño: 20,
          Tipo: "Cuerpo a cuerpo"
        },
        curiosidades: ["Presente desde la temporada 0."],
        estrategias: ["Sirve para recolectar materiales."]
      }
    ]
  }
};



// =======================================================
//   COMPONENTE PRINCIPAL
// =======================================================
export default function ItemDetalle() {
  const { id, itemId } = useParams();

  const items = DB[id]?.items || [];
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Ítem no encontrado</h2>
        <Link to={`/game/${id}`} style={{ color: "#9cf" }}>
          Volver al juego
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      height: "calc(100vh - 80px)",
      padding: 20,
      gap: 20,
      color: "white"
    }}>

      {/* IZQUIERDA — Imagen fija */}
      <div style={{
        width: "35%",
        background: "rgba(255,255,255,0.05)",
        padding: 20,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            borderRadius: 10,
            marginBottom: 20,
            objectFit: "contain"
          }}
        />

        <h2>{item.name}</h2>
        <p style={{ color: "#9fcff6" }}>{item.info}</p>

        <Link
          to={`/game/${id}`}
          style={{
            marginTop: "auto",
            padding: "10px 20px",
            border: "1px solid #9fcff6",
            borderRadius: 8,
            color: "#9fcff6",
            textDecoration: "none"
          }}>
          ← Volver al juego
        </Link>
      </div>

      {/* DERECHA — Scroll */}
      <div style={{
        flex: 1,
        background: "rgba(255,255,255,0.05)",
        padding: 20,
        borderRadius: 12,
        overflowY: "auto"
      }}>
        
        <h2>Detalles del Ítem</h2>
        <p style={{ marginTop: 10, lineHeight: 1.6 }}>{item.detalleGeneral}</p>

        {/* Stats */}
        {item.stats && (
          <>
            <h3 style={{ marginTop: 20 }}>Estadísticas</h3>
            <ul style={{ marginLeft: 20 }}>
              {Object.entries(item.stats).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Curiosidades */}
        {item.curiosidades && (
          <>
            <h3 style={{ marginTop: 20 }}>Curiosidades</h3>
            <ul style={{ marginLeft: 20 }}>
              {item.curiosidades.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </>
        )}

        {/* Estrategias */}
        {item.estrategias && (
          <>
            <h3 style={{ marginTop: 20 }}>Estrategias</h3>
            <ul style={{ marginLeft: 20 }}>
              {item.estrategias.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </>
        )}

      </div>
    </div>
  );
}
