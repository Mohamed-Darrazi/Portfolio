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
    // TODO Mohamed : contenu de départ à relire et personnaliser avant l'oral E4 — vérifier que chaque fonctionnalité existe vraiment dans le code.
    context:
      "La facturation entre entreprises se dématérialise : au-delà du PDF envoyé par courriel, une facture électronique porte des données structurées qu'un logiciel peut lire, contrôler et intégrer sans ressaisie. Pour que ces échanges fonctionnent d'un émetteur à l'autre, il faut un langage commun : c'est le rôle de la norme européenne EN 16931, qui décrit le socle d'informations qu'une facture doit contenir et la façon de les représenter. Le format Factur-X en est une déclinaison hybride : un PDF lisible par une personne, auquel est associé un fichier XML exploitable directement par une machine — un seul document sert donc à la fois au lecteur et au système qui le traite. Facturation B2B API est un projet personnel que je développe pour me confronter concrètement à ce sujet : une API REST qui génère et vérifie des factures conformes à cette norme, plutôt qu'à un format que j'aurais défini moi-même.",
    features: [
      "Génération d'une facture à partir des données transmises à l'API : émetteur, destinataire, lignes de facturation, montants et taxes.",
      "Contrôle de conformité de la facture au regard des règles de la norme : présence des champs obligatoires et cohérence des montants.",
      "Export du résultat dans les formats attendus pour un échange entre entreprises : le document PDF et le fichier XML structuré qui l'accompagne.",
      "Points d'entrée REST pour créer, consulter et récupérer une facture, avec des réponses d'erreur indiquant ce qui bloque la validation.",
    ],
    learnings: [
      "Partir d'une norme existante plutôt que d'un modèle inventé : lire une spécification écrite pour l'industrie et la traduire en règles applicables dans le code.",
      "Concevoir une API REST : découper les ressources, choisir les points d'entrée et décider de ce que renvoie chaque réponse, en cas de succès comme d'erreur.",
      "Structurer des données contraintes : modéliser une facture dont chaque champ a un rôle imposé, et faire tenir ce modèle dans une base de données.",
      "Mesurer l'écart entre « ça fonctionne » et « c'est conforme » : un document accepté par mon propre code n'est pas pour autant valide au regard de la norme.",
    ],
    // Projet SANS document pour l'instant.
    // Pour en attacher un : dépose ton PDF dans public/projets/ puis
    // remplace `null` par le nom du fichier, entre guillemets.
    pdf: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
