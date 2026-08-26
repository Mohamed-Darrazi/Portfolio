"use client";

import { useEffect, useRef } from "react";

// Décor de fond : dégradés qui respirent, formes qui dérivent, et un halo
// lavande qui suit la souris avec un peu d'inertie. Rendu dans le layout,
// donc il reste en place et ne se réinitialise pas quand on change de page.
export default function Atmosphere() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    let tx = 50;
    let ty = 30;
    let cx = 50;
    let cy = 30;

    function onMove(e: MouseEvent) {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
    }

    function loop() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${cx}vw, ${cy}vh)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="breathe" />
      <div className="halo" ref={haloRef} />
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
    </div>
  );
}
