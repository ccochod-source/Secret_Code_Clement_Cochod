'use client';

import { useState } from 'react';

export default function Home() {
  const [showSecret, setShowSecret] = useState(false);

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
        onClick={() => setShowSecret(!showSecret)}
        style={{
          padding: '14px 28px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        Afficher le secret
      </button>

      {showSecret && (
        <div style={{ fontSize: '22px', textAlign: 'center' }}>
          {process.env.NEXT_PUBLIC_MON_TEXT_SECRET}
        </div>
      )}
    </main>
  );
}
