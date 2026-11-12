// ============================================================
//  PROJETS
//  Pour ajouter un projet : copie l'exemple ci-dessous dans le
//  tableau PROJECTS, change le `slug` (il devient l'URL :
//  /projets/mon-slug) et remplis les champs. Les champs laissés à
//  `null` ne s'affichent pas en ligne (en local, un encadré
//  « à compléter » les signale) — rien n'est inventé à ta place.
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
//  Projet SANS document : le champ `pdf` vaut `null`. La section
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

// Vide pour l'instant : tant qu'aucun projet n'est listé ici, la page
// /projets n'est pas publiée (404), et son lien disparaît du menu, de la
// grille « Explorer » et du hero de l'accueil (voir app/lib/published.ts).
// Ajouter un projet suffit à tout réactiver au prochain déploiement.
export const PROJECTS: Project[] = [];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
