import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!username) return alert('Ingrese un nombre de usuario (puede ser cualquier texto)');
    localStorage.setItem('wg_user', username);
    navigate('/');
  };

  return (
    <div style={{maxWidth:480, margin:'40px auto', padding:18, borderRadius:12}}>
      <div style={{background:'rgba(255,255,255,0.02)', padding:18, borderRadius:10, border:'1px solid rgba(255,255,255,0.02)'}}>
        <h2 style={{color:'#e6f7ff', marginBottom:8}}>Iniciar sesión (demo)</h2>
        <p style={{color:'#9bbfe0', marginBottom:12}}>Ingresa un nombre para simular sesión. No hay backend en esta versión.</p>

        <form onSubmit={submit} style={{display:'grid', gap:10}}>
          <input
            value={username}
            onChange={e=>setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            style={{padding:10, borderRadius:8, border:'1px solid rgba(255,255,255,0.04)', background:'#0c1117', color:'#e8f7ff'}}
          />
          <div style={{display:'flex', gap:8}}>
            <button className="btn" type="submit">Entrar</button>
            <button className="btn ghost" type="button" onClick={()=>{ setUsername(''); localStorage.removeItem('wg_user'); }}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
