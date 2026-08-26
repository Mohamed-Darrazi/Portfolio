// ============================================================
//  PROJETS
//  Pour ajouter un projet : copie un bloc ci-dessous, change le
//  `slug` (il devient l'URL : /projets/mon-slug) et remplis les
//  champs. Les champs laissés à `null` affichent automatiquement
//  un encadré « à compléter » sur la page de détail — rien n'est
//  inventé à ta place.
// ============================================================

export type Project = {
  /** Identifiant dans l'URL : /projets/<slug>. Minuscules, sans accent. */
  slug: string;
  name: string;
  /** Résumé court, affiché sur la carte dans /projets. */
  blurb: string;
  stack: string[];
  /** Lien externe (GitHub, démo…) ou `null` si le dépôt est privé. */
  link: string | null;
  /** Période ou année. `null` = à compléter. */
  period: string | null;
  /** Contexte : pourquoi ce projet, pour qui, quel besoin. `null` = à compléter. */
  context: string | null;
  /** Principales fonctionnalités. `null` = à compléter. */
  features: string[] | null;
  /** Difficultés rencontrées et ce que le projet t'a appris. `null` = à compléter. */
  learnings: string[] | null;
};

export const PROJECTS: Project[] = [
  {
    slug: "facturation-b2b-api",
    name: "Facturation B2B API",
    blurb:
      "API REST de facturation entre entreprises, conforme à la norme Factur-X / EN 16931 : génération de factures électroniques structurées et validées.",
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
    link: null,
    period: null,
    context: null,
    features: null,
    learnings: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
