"use client";

import { useEffect, useRef, useState } from "react";

// Fait apparaître son contenu en fondu quand il entre dans l'écran.
// Reçoit `children` depuis un composant serveur : le contenu reste donc
// rendu côté serveur, seul l'effet d'apparition est côté client.
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Le cas « animations réduites » est traité entièrement en CSS : la règle
  // @media (prefers-reduced-motion: reduce) force .reveal à opacity: 1.
  // Inutile donc de le rejouer ici en JavaScript.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? "reveal-in" : ""}`}>
      {children}
    </div>
  );
}
