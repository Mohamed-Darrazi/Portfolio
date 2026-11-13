"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "@/app/lib/nav";
import ContactIcons from "@/app/components/ContactIcons";

// Un lien est « actif » sur sa propre page et sur ses sous-pages.
// Exemple : /projets/mon-projet garde « Projets » en surbrillance.
// L'accueil est traité à part, sinon "/" serait actif partout.
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Les entrées arrivent toutes prêtes de app/layout.tsx (calculées côté
// serveur dans app/lib/nav.ts) : ce composant client se contente de les
// afficher et de gérer le menu mobile.
export default function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  // On mémorise sur QUELLE page le menu a été ouvert, plutôt qu'un simple
  // booléen. Dès que `pathname` change, `open` redevient false tout seul :
  // pas d'effet à écrire, pas de rendu en cascade, et le bouton Retour du
  // navigateur referme le menu lui aussi.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  // Échap ferme le menu : sur mobile le panneau recouvre le contenu.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenedOn(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="nav" aria-label="Navigation principale">
      <Link href="/" className="nav-mark">
        Mohamed Darrazi
      </Link>

      <ul className="nav-links">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={isActive(pathname, item.href) ? "is-active" : ""}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Toujours visibles, y compris sur mobile (à gauche du burger). */}
      <ContactIcons />

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpenedOn(open ? null : pathname)}
      >
        <span className={`burger ${open ? "burger-open" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <ul
        id="menu-mobile"
        className={`nav-mobile ${open ? "nav-mobile-open" : ""}`}
        hidden={!open}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={isActive(pathname, item.href) ? "is-active" : ""}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
