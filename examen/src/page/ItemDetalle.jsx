import React from "react";
import { useParams, Link } from "react-router-dom";

// Base de datos de items
const DB = {
  fifa26: {
    items: [
      {
        id: "i1",
        name: "Carta Icon - Cristiano Ronaldo",
        info: "Extremo — 93 de media.",
        detalles: "Una carta extremadamente rara del modo Ultimate Team.",
        cover: '/Cris.jpg',
      },
      {
        id: "i2",
        name: "Kit Barcelona 2025",
        info: "Uniforme titular",
        detalles: "Uniforme oficial con textura HD.",
        img: "/items/barca_kit.png"
      }
    ]
  },

  gta5: {
    items: [
      {
        id: "i3",
        name: "Infernus",
        info: "Supercoche de alta velocidad",
        detalles: "Inspirado en el Lamborghini, extremadamente rápido.",
        img: "/items/infernus.png"
      },
      {
        id: "i4",
        name: "Rifle francotirador",
        info: "Arma de largo alcance",
        detalles: "Ideal para misiones de precisión.",
        img: "/items/sniper.png"
      }
    ]
  },

  minecraft: {
    items: [
      {
        id: "i5",
        name: "Diamante",
        info: "Mineral valioso",
        detalles:
          "Material requerido para herramientas avanzadas y armaduras resistentes.",
        img: "/items/diamond.png"
      },
      {
        id: "i6",
        name: "Perla Ender",
        info: "Permite teletransporte",
        detalles: "Esencial para encontrar el portal al End.",
        img: "/items/ender_pearl.png"
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
        <h2>Item no encontrado</h2>
        <Link to={`/game/${id}`} style={{ color: "#9cf" }}>
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 80px)",
        padding: 20,
        gap: 20,
        color: "white"
      }}
    >
      {/* COLUMNA IZQUIERDA — IMAGEN ESTÁTICA */}
      <div
        style={{
          width: "35%",
          background: "rgba(255,255,255,0.05)",
          padding: 20,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "100%",
            borderRadius: 10,
            objectFit: "contain",
            marginBottom: 20
          }}
        />

        <h2 style={{ textAlign: "center", marginBottom: 8 }}>{item.name}</h2>

        <p style={{ color: "#9fcff6", marginBottom: 20 }}>{item.info}</p>

        <Link
          to={`/game/${id}`}
          style={{
            marginTop: "auto",
            padding: "10px 20px",
            border: "1px solid #9fcff6",
            borderRadius: 8,
            color: "#9fcff6",
            textDecoration: "none"
          }}
        >
          ← Volver al juego
        </Link>
      </div>

      {/* COLUMNA DERECHA — DESCRIPCIÓN SCROLLEABLE */}
      <div
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.05)",
          padding: 20,
          borderRadius: 12,
          overflowY: "auto"
        }}
      >
        <h2>Detalles del ítem</h2>

        <p style={{ lineHeight: 1.7, marginTop: 10 }}>{item.detalles}</p>

        <div style={{ marginTop: 30 }}>
          <h3>Información extendida</h3>
          <p style={{ color: "#9bbfe0" }}>
            Aquí puedes añadir historia del objeto, estadísticas, rareza,
            comparaciones o estrategias de uso.
          </p>
        </div>
      </div>
    </div>
  );
}
