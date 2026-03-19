'use client';

import { useState } from 'react';

export default function Home() {
  const [secret, setSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadSecret = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/secret');
      const json = await res.json();
      setSecret(json.secret);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '16px',
        background: '#0a0a0a',
        color: 'white',
      }}
    >
      <button
        onClick={loadSecret}
        disabled={loading}
        style={{
          padding: '14px 28px',
          fontSize: '18px',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        {loading ? 'Chargement…' : 'Afficher le secret'}
      </button>

      {secret && (
        <div style={{ fontSize: '22px', textAlign: 'center' }}>{secret}</div>
      )}
    </main>
  );
}
