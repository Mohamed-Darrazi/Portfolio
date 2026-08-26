// ============================================================
//  PARCOURS — frise chronologique
//  Le tableau est vide pour l'instant : la page affiche alors un
//  encadré « à compléter ». Dès que tu ajoutes une entrée, la frise
//  s'affiche automatiquement à la place.
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
  /** Établissement, entreprise, organisme. */
  place: string;
  /** Sert à colorer la pastille de la frise. */
  kind: "formation" | "experience";
  description?: string;
  tags?: string[];
};

export const TIMELINE: TimelineEntry[] = [];
