"use client";

// Composant client, comme avant : l'année se calcule dans le navigateur et
// reste donc juste même si le site n'a pas été redéployé depuis le 1er janvier.
export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Mohamed Darrazi</span>
      <span className="footer-note">Construit avec Next.js</span>
    </footer>
  );
}
