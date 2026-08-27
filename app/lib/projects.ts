// ============================================================
//  PROJETS
//  Pour ajouter un projet : copie un bloc ci-dessous, change le
//  `slug` (il devient l'URL : /projets/mon-slug) et remplis les
//  champs. Les champs laissés à `null` affichent automatiquement
//  un encadré « à compléter » sur la page de détail — rien n'est
//  inventé à ta place.
//
//  ─── Attacher un dossier PDF à un projet ───────────────────
//  1. Dépose le fichier dans  public/projets/
//  2. Renseigne son nom exact dans le champ `pdf` ci-dessous.
//
//  Exemple d'un projet AVEC document :
//
//    {
//      slug: "mon-projet",
//      name: "Mon projet",
//      blurb: "...",
//      stack: ["PHP"],
//      link: null,
//      period: null,
//      context: null,
//      features: null,
//      learnings: null,
//      pdf: "mon-projet.pdf",   // <- fichier public/projets/mon-projet.pdf
//    }
//
//  Exemple d'un projet SANS document : le champ vaut `null`
//  (voir « Facturation B2B API » plus bas). La section
//  « Dossier de projet » n'apparaît alors pas du tout sur la page.
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
  /**
   * Nom du fichier PDF déposé dans `public/projets/`.
   * Écris juste le nom du fichier, pas le chemin : "mon-dossier.pdf".
   * `null` = pas de document : la section entière disparaît de la page.
   */
  pdf: string | null;
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
    // Projet SANS document pour l'instant.
    // Pour en attacher un : dépose ton PDF dans public/projets/ puis
    // remplace `null` par le nom du fichier, entre guillemets.
    // Un fichier de démonstration est déjà fourni si tu veux voir le
    // rendu tout de suite :  pdf: "exemple-dossier.pdf",
    pdf: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
