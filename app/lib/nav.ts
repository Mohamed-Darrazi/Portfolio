// ============================================================
//  MENU DU SITE
//  Calculé côté serveur, au moment du build, puis transmis à la
//  barre de navigation par app/layout.tsx. Une entrée n'apparaît
//  que si sa page a du contenu (Projets, Parcours, Veille : voir
//  published.ts) ou si son fichier existe (CV) — jamais de lien
//  vers une page vide ou morte.
//  (Ce module lit le disque : il ne doit pas être importé par un
//  composant client — seul son type `NavItem` peut l'être.)
// ============================================================

import { isVisible } from "./published";
import { getCvInfo } from "./documents";

export type NavItem = { href: string; label: string };

/** Entrées du menu (desktop et mobile), dans l'ordre d'affichage. */
export function getNavItems(): NavItem[] {
  return [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À propos" },
    { href: "/bts-sio", label: "BTS SIO" },
    ...(isVisible("projets") ? [{ href: "/projets", label: "Projets" }] : []),
    ...(isVisible("parcours") ? [{ href: "/parcours", label: "Parcours" }] : []),
    ...(isVisible("veille") ? [{ href: "/veille", label: "Veille" }] : []),
    ...(getCvInfo() ? [{ href: "/cv", label: "CV" }] : []),
    { href: "/contact", label: "Contact" },
  ];
}
