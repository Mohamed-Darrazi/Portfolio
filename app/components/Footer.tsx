"use client";

import Link from "next/link";

// Composant client, comme avant : l'année se calcule dans le navigateur et
// reste donc juste même si le site n'a pas été redéployé depuis le 1er janvier.
// Présent sur toutes les pages (rendu dans app/layout.tsx), d'où le lien
// « Mentions légales » ici plutôt que dans le menu du haut.
export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Mohamed Darrazi</span>
      <Link href="/mentions-legales" className="footer-link">
        Mentions légales
      </Link>
    </footer>
  );
}
