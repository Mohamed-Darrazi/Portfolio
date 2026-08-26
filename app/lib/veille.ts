// ============================================================
//  VEILLE TECHNOLOGIQUE (épreuve E4 du BTS SIO)
//  Trois listes, vides pour l'instant. Chaque bloc de la page
//  affiche un encadré « à compléter » tant que sa liste est vide.
//
//  Exemples de remplissage :
//    SOURCES  : { name: "Nom de la source", url: "https://...",
//                 kind: "Blog", note: "Pourquoi tu la suis." }
//    ARTICLES : { date: "2026-01-15", title: "Titre de l'article",
//                 url: "https://...", takeaway: "Ce que tu en retiens." }
// ============================================================

/** Le thème de veille suivi sur les deux années. `null` = à définir. */
export const SUJET: { title: string; why: string } | null = null;

export type Source = {
  name: string;
  url: string;
  /** Type de source : "Blog", "Newsletter", "Podcast", "Flux RSS"... */
  kind: string;
  /** En une phrase : pourquoi cette source. */
  note?: string;
};

export type Article = {
  /** Format ISO (AAAA-MM-JJ) pour rester triable. */
  date: string;
  title: string;
  url: string;
  /** Ce que tu retiens de cet article, avec tes mots. */
  takeaway: string;
};

export const SOURCES: Source[] = [];
export const ARTICLES: Article[] = [];
