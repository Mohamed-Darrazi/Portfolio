// ============================================================
//  CONTENU DU SITE — c'est ici qu'on modifie les textes courts,
//  les liens et la liste des compétences. Aucune donnée n'est
//  codée en dur dans les composants.
// ============================================================

import { isVisible } from "./published";

export const LINKS = {
  github: "https://github.com/Mohamed-Darrazi",
  linkedin: "https://www.linkedin.com/in/mohamed-darrazi-20b901333/",
};

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegwejb";

export const SKILLS = [
  {
    group: "Langages",
    items: ["C#", "PHP", "Java", "Python", "JavaScript", "TypeScript"],
  },
  { group: "Bases de données", items: ["SQL Server", "HFSQL", "MySQL"] },
  {
    group: "Frameworks & outils",
    items: ["ASP.NET Core", "Flask", "WinDev", "Next.js", "Git"],
  },
];

// Ordre des entrées de la barre de navigation (desktop et mobile).
// Parcours et Veille n'apparaissent dans le menu que lorsqu'elles ont du
// contenu réel (voir app/lib/published.ts) — le lien revient tout seul.
export const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  ...(isVisible("parcours") ? [{ href: "/parcours", label: "Parcours" }] : []),
  ...(isVisible("veille") ? [{ href: "/veille", label: "Veille" }] : []),
  { href: "/contact", label: "Contact" },
];
