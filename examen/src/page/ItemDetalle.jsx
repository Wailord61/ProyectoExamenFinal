import React from "react";
import { useParams, Link } from "react-router-dom";

// Base sincronizada con los mismos nombres de Detalles.jsx
const DB = {
  fifa26: {
    items: [
      {
        id: "i1",
        name: "Carta Icon - Cristiano Ronaldo",
        info: "Extremo — 97 de media.",
        img: "/CR7.jpg",
        detalleGeneral:
          "La carta Icon Prime de Cristiano Ronaldo es una de las más valiosas por su increíble ritmo, tiro y animaciones exclusivas.",
        stats: {
          ritmo: 94,
          tiro: 96,
          pase: 88,
          regate: 95,
          físico: 88
        },
        curiosidades: [
          "Una de las cartas más usadas en FUT.",
          "Puede jugar como ED, EI o DC.",
          "Tiene animaciones exclusivas de tiro."
        ],
        estrategias: [
          "Ideal para contraataques rápidos.",
          "Úsalo en formaciones ofensivas como 4-3-3.",
          "Combinación perfecta con un mediapunta creativo."
        ]
      },

      {
        id: "i2",
        name: "Camisetas Barcelona 2025",
        info: "Uniforme titular.",
        img: "/Camisas.png",
        detalleGeneral:
          "El uniforme del FC Barcelona 2025 mezcla diseño moderno con elementos de temporadas clásicas.",
        stats: {
          rareza: "Común",
          tipo: "Cosmético",
          uso: "Ultimate Team y Modo Carrera"
        },
        curiosidades: [
          "Inspirado en la era de Ronaldinho.",
          "Uno de los uniformes más descargados en FUT."
        ],
        estrategias: [
          "Ideal para personalizar la plantilla.",
          "Combina bien con equipaciones retro."
        ]
      },

      {
        id: "i3",
        name: "Balón oficial 2025",
        info: "Uso en competiciones internacionales.",
        img: "/balon2025.png",
        detalleGeneral:
          "Balón oficial utilizado en competiciones FIFA. Aerodinámica optimizada y paneles termosellados.",
        stats: {
          rareza: "Raro",
          peso: "430 g",
          material: "Microfibra de alto rendimiento"
        },
        curiosidades: ["Usado en finales oficiales.", "Muy estable en pases largos."],
        estrategias: ["Ideal para tiros de larga distancia.", "Mejora la visibilidad en lluvia."]
      }
    ]
  },

  gta5: {
    items: [
      {
        id: "i4",
        name: "Infernus",
        info: "Supercoche de alta velocidad.",
        img: "/infernus.png",
        detalleGeneral:
          "Uno de los coches más icónicos. Inspirado en Lamborghini, extremadamente rápido.",
        stats: {
          velocidad: "9.6/10",
          aceleración: "9.0/10",
          manejo: "8.5/10"
        },
        curiosidades: [
          "Ha aparecido desde GTA San Andreas.",
          "Tiene una versión mejorada en Online."
        ],
        estrategias: [
          "Perfecto para carreras urbanas.",
          "Evita terrenos off-road: pierde control."
        ]
      },

      {
        id: "i5",
        name: "Rifle francotirador",
        info: "Arma de largo alcance.",
        img: "/sniper.png",
        detalleGeneral:
          "Rifle ideal para misiones de precisión y eliminaciones silenciosas.",
        stats: {
          daño: 95,
          precisión: 100,
          recarga: "Lenta"
        },
        curiosidades: ["Tiene mira avanzada.", "Arma favorita en misiones de sigilo."],
        estrategias: [
          "Utiliza puntos elevados.",
          "Evita el combate cercano."
        ]
      },

      {
        id: "i6",
        name: "Helicóptero Buzzard",
        info: "Vehículo aéreo ligero y ágil.",
        img: "/buzzard.png",
        detalleGeneral:
          "Helicóptero rápido con misiles guiados. Muy usado en GTA Online.",
        stats: {
          velocidad: "Alta",
          blindaje: "Medio",
          armamento: "Misiles + Ametralladoras"
        },
        curiosidades: ["Muy popular en GTA Online.", "Puede solicitarse rápidamente."],
        estrategias: ["Ideal para misiones de ataque.", "Evita helicópteros blindados."]
      }
    ]
  },

  minecraft: {
    items: [
      {
        id: "i7",
        name: "Diamante",
        info: "Mineral valioso.",
        img: "/Ore.png",
        detalleGeneral:
          "Uno de los minerales más valiosos, usado para herramientas avanzadas.",
        stats: {
          rareza: "Baja",
          nivelMina: "Y -59",
          durabilidad: 1561
        },
        curiosidades: [
          "Antes aparecía a mayor altura.",
          "Uno de los objetos más codiciados del juego."
        ],
        estrategias: [
          "Minar en Y -59 maximiza su obtención.",
          "Usa Fortuna III para más diamantes."
        ]
      },

      {
        id: "i8",
        name: "Perla Ender",
        info: "Permite teletransportarse.",
        img: "/perla.png",
        detalleGeneral:
          "Objeto clave para encontrar el portal al End y progresar en la historia.",
        stats: {
          rareza: "Media",
          dañoAlUsar: "2 corazones",
          dropeadoPor: "Enderman"
        },
        curiosidades: ["Usada para fabricar Ojos de Ender.", "Popular en PvP."],
        estrategias: [
          "Úsala para escapes rápidos.",
          "Combínala con agua para evitar daño."
        ]
      },

      {
        id: "i9",
        name: "Tótem de inmortalidad",
        info: "Evita la muerte una vez.",
        img: "/totem.png",
        detalleGeneral:
          "Al sostenerlo en la mano secundaria, evita la muerte del jugador.",
        stats: {
          rareza: "Muy Rara",
          obtenidoEn: "Raids",
          usos: 1
        },
        curiosidades: ["Solo lo sueltan los Evocadores.", "Posee animación única."],
        estrategias: [
          "Ideal para explorar el Nether.",
          "Útil en PvP y cuevas profundas."
        ]
      }
    ]
  }
};

export default function ItemDetalle() {
  const { id, itemId } = useParams();

  const items = DB[id]?.items || [];
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Ítem no encontrado</h2>
        <Link to={`/game/${id}`} style={{ color: "#9cf" }}>
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "calc(100vh - 80px)", padding: 20, gap: 20, color: "white" }}>
      
      {/* IZQUIERDA - Imagen fija */}
      <div style={{
        width: "35%",
        background: "rgba(255,255,255,0.05)",
        padding: 20,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <img src={item.img} alt={item.name} style={{
          width: "100%",
          borderRadius: 10,
          objectFit: "contain",
          marginBottom: 20
        }}/>

        <h2 style={{ textAlign: "center" }}>{item.name}</h2>
        <p style={{ color: "#9fcff6" }}>{item.info}</p>

        <Link to={`/game/${id}`} style={{
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

      {/* DERECHA - Scroll */}
      <div style={{
        flex: 1,
        background: "rgba(255,255,255,0.05)",
        padding: 20,
        borderRadius: 12,
        overflowY: "auto"
      }}>
        <h2>Detalles del ítem</h2>
        <p style={{ marginTop: 10, lineHeight: 1.7 }}>{item.detalleGeneral}</p>

        {/* Stats */}
        {item.stats && (
          <>
            <h3 style={{ marginTop: 20 }}>Estadísticas</h3>
            <ul style={{ marginLeft: 20 }}>
              {Object.entries(item.stats).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
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
