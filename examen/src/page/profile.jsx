import React from 'react';

export default function Profile() {
  const user = localStorage.getItem('wg_user');

  return (
    <div style={{maxWidth:800, margin:'20px auto', padding:16}}>
      <div style={{background:'rgba(255,255,255,0.02)', padding:18, borderRadius:10, border:'1px solid rgba(255,255,255,0.02)'}}>
        <h2 style={{color:'#e6f7ff'}}>Perfil de usuario</h2>
        <p style={{color:'#9bbfe0'}}>Nombre: <strong style={{color:'#dff3ff'}}>{user}</strong></p>

        <div style={{marginTop:12}}>
          <h4>Actividad (demo)</h4>
          <ul style={{color:'#bfe6ff'}}>
            <li>Guardaste 2 juegos en favoritos (simulado)</li>
            <li>Compartiste 1 guía</li>
            <li>Completaste tu perfil (demo)</li>
          </ul>
        </div>

        <div style={{marginTop:18}}>
          <button className="btn ghost" onClick={()=>alert('Función no implementada en demo')}>Editar perfil</button>
        </div>
      </div>
    </div>
  );
}
