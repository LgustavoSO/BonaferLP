'use client';

import { useEffect, useState } from 'react';

const processVisuals = [
  { name: 'Laser', image: '/process-corte.png' },
  { name: 'Conformação', image: '/process-dobra.png' },
  { name: 'Caldeiraria', image: '/process-caldeiraria.png' },
  { name: 'Solda', image: '/process-solda.png' },
  { name: 'Pintura', image: '/process-pintura.png' },
];

export default function HeroProcessVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % processVisuals.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero__backdrop" aria-hidden="true">
      {processVisuals.map((item, index) => (
        <div
          className={`hero__process-slide${index === active ? ' hero__process-slide--active' : ''}`}
          key={item.name}
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(2,9,18,.88) 0%,rgba(2,9,18,.58) 44%,rgba(2,9,18,.23) 100%),url('${item.image}')`,
          }}
        />
      ))}
    </div>
  );
}
