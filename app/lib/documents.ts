import { statSync } from "node:fs";
import { join } from "node:path";

// ============================================================
//  DOCUMENTS DE PROJET (dossiers PDF)
//  Ce module tourne côté serveur, au moment du build. Il vérifie
//  que le fichier existe vraiment dans public/projets/ et calcule
//  son poids pour l'afficher. Si le fichier est absent (faute de
//  frappe dans le nom, PDF pas encore déposé), on renvoie `null` :
//  la section n'apparaît pas du tout, plutôt qu'un bouton mort.
// ============================================================

/** Dossier de public/ dans lequel on range les PDF de projets. */
export const DOCUMENTS_DIR = "projets";

/** Nom du CV, déposé à la racine de public/. */
export const CV_FILE = "cv-mohamed-darrazi.pdf";

export type DocumentInfo = {
  /** Adresse publique du fichier, ex. /projets/mon-dossier.pdf */
  url: string;
  fileName: string;
  /** Poids formaté à la française, ex. « 2,5 ko ». */
  sizeLabel: string;
};

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  const ko = bytes / 1024;
  if (ko < 1024) return `${ko.toFixed(ko < 10 ? 1 : 0).replace(".", ",")} ko`;
  const mo = ko / 1024;
  return `${mo.toFixed(1).replace(".", ",")} Mo`;
}

/**
 * Infos d'un fichier de public/, ou `null` s'il n'existe pas.
 * @param publicPath chemin relatif à public/, ex. "projets/mon-dossier.pdf"
 */
function getPublicFileInfo(publicPath: string): DocumentInfo | null {
  try {
    const stats = statSync(join(process.cwd(), "public", publicPath));
    if (!stats.isFile()) return null;
    return {
      url: `/${publicPath}`,
      fileName: publicPath.split("/").pop() ?? publicPath,
      sizeLabel: formatSize(stats.size),
    };
  } catch {
    return null;
  }
}

/**
 * Résout le document d'un projet.
 * @param fileName nom du fichier tel qu'écrit dans app/lib/projects.ts,
 *                 ou `null` si le projet n'a pas de document.
 * @returns les infos du document, ou `null` s'il n'y en a pas / s'il est introuvable.
 */
export function getDocumentInfo(fileName: string | null): DocumentInfo | null {
  if (!fileName) return null;

  const publicPath = `${DOCUMENTS_DIR}/${fileName}`;
  const info = getPublicFileInfo(publicPath);

  if (!info) {
    // Averti au build sans le faire échouer : le site reste publiable,
    // la section document est simplement omise.
    console.warn(
      `[projets] Document introuvable : public/${publicPath}. ` +
        `La section « Dossier de projet » ne sera pas affichée.`
    );
  }
  return info;
}

/**
 * Le CV, ou `null` s'il n'est pas déposé dans public/. Dans ce cas, la page
 * /cv, son lien dans le menu et les boutons de téléchargement disparaissent.
 */
export function getCvInfo(): DocumentInfo | null {
  return getPublicFileInfo(CV_FILE);
}
