// ============================================================
//  PARCOURS — frise chronologique
//  Tant que le tableau est vide, la page n'est pas publiée (voir
//  app/lib/published.ts). Dès qu'il contient une entrée, la frise
//  s'affiche, et la page revient dans le menu et sur l'accueil.
//
//  Range les entrées de la plus récente à la plus ancienne.
//
//  Exemple de remplissage :
//    {
//      period: "2024 - 2026",
//      title: "BTS SIO option SLAM",
//      place: "Nom de l'etablissement",
//      kind: "formation",
//      description: "Ce que tu veux en dire.",
//      tags: ["C#", "PHP"],
//    }
// ============================================================

export type TimelineEntry = {
  /** Période affichée telle quelle. Ex. "2024 - 2026", "Sept. 2025". */
  period: string;
  title: string;
  /** Établissement, entreprise, organisme. Facultatif. */
  place?: string;
  /** Sert à colorer la pastille de la frise. */
  kind: "formation" | "experience";
  /** Paragraphe principal. */
  description?: string;
  /** Liste à puces affichée sous la description. */
  points?: string[];
  /** Paragraphe affiché après la liste à puces. */
  after?: string;
  tags?: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    period: "Nov. 2025 — aujourd'hui",
    title: "Développeur en alternance — pôle administratif",
    place: "Logemed, Toulon",
    kind: "experience",
    description:
      "Logemed édite des logiciels pour les établissements de santé (cliniques, hôpitaux, centres de dialyse). J'y développe et maintiens trois applications métier en production, déployées dans plusieurs établissements :",
    points: [
      "une application de gestion administrative des patients : séjours, facturation, et répartition entre l'Assurance maladie, la mutuelle et le patient ;",
      "une application de numérisation de documents ;",
      "un logiciel de gestion des repas pour les cuisines hospitalières.",
    ],
    after:
      "Je traite aussi les demandes des établissements via un outil de ticketing. Rythme de l'alternance : deux semaines en entreprise, deux semaines en formation.",
  },
  {
    period: "Sept. 2025 — 2027 (en cours)",
    title: "BTS SIO, option SLAM, en alternance",
    place: "Lycée Bonaparte, Toulon",
    kind: "formation",
    description: "Formation au développement d'applications, suivie en alternance.",
  },
  {
    period: "Sept. 2024 — printemps 2025",
    title: "BUT Génie Industriel et Maintenance — 1re année",
    place: "IUT de Toulon, La Garde",
    kind: "formation",
    description:
      "Premier semestre validé. J'ai ensuite choisi de me réorienter vers le développement informatique, qui correspond à ce que je veux faire.",
  },
  {
    period: "2021 — juin 2024",
    title: "Baccalauréat général — mention Assez bien",
    kind: "formation",
    description: "Spécialités Mathématiques et Physique-Chimie.",
  },
];
