// ============================================================
//  PUBLICATION DES PAGES
//  Règle du site : une page sans contenu réel ne doit pas être
//  visible en ligne. Ce module déduit automatiquement ce qui est
//  publiable à partir des données — aucun drapeau à changer à la
//  main, donc aucun risque de l'oublier.
//
//  → Pour réactiver une page, il suffit de remplir ses données :
//    - Projets  : ajouter un projet dans PROJECTS (app/lib/projects.ts)
//    - Parcours : ajouter une entrée dans TIMELINE (app/lib/parcours.ts)
//    - Veille   : renseigner SUJET, SOURCES ou ARTICLES (app/lib/veille.ts)
//    La page, son lien dans le menu et son raccourci d'accueil
//    réapparaissent alors tout seuls au prochain déploiement.
//
//  En développement (`npm run dev`), tout reste visible, encadrés
//  « À compléter » compris, pour travailler confortablement.
// ============================================================

import { PROJECTS } from "./projects";
import { TIMELINE } from "./parcours";
import { SUJET, SOURCES, ARTICLES } from "./veille";

/** Vrai uniquement en local (`npm run dev`), jamais sur le site en ligne. */
export const SHOW_HINTS = process.env.NODE_ENV === "development";

export const PUBLISHED = {
  /** Au moins un projet est listé. */
  projets: PROJECTS.length > 0,
  /** La frise a au moins une étape. */
  parcours: TIMELINE.length > 0,
  /** Au moins un des trois blocs de veille est renseigné. */
  veille: SUJET !== null || SOURCES.length > 0 || ARTICLES.length > 0,
};

/** Une page est visitable si elle est publiée — ou toujours, en dev. */
export function isVisible(page: keyof typeof PUBLISHED): boolean {
  return PUBLISHED[page] || SHOW_HINTS;
}
