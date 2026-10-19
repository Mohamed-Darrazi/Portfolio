"use client";

import { useState } from "react";
import type { DocumentInfo } from "@/app/lib/documents";

// Bloc document PDF : consultation dans la page + téléchargement.
// Sert aux dossiers de projet et au CV.
//
// L'aperçu n'est PAS monté au chargement : l'iframe n'apparaît qu'au clic sur
// « Afficher l'aperçu ». Le PDF n'est donc téléchargé que si le visiteur le
// demande — une page projet reste aussi légère qu'avant, même avec un dossier
// de plusieurs mégaoctets attaché.
//
// Sur mobile, les navigateurs n'affichent pas correctement un PDF dans une
// iframe (Chrome Android le télécharge, iOS n'en montre que la 1re page). Le
// bouton d'aperçu et l'iframe y sont donc masqués en CSS, remplacés par
// « Ouvrir le document ». Voir la media query dans app/globals.css.
export default function DocumentViewer({
  document,
  title,
  downloadLabel,
}: {
  document: DocumentInfo;
  /** Nom affiché sur la carte, ex. « Dossier de projet — Mon projet ». */
  title: string;
  /** Texte du bouton de téléchargement. */
  downloadLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="doc-card">
      <div className="doc-head">
        <span className="doc-badge" aria-hidden="true">
          PDF
        </span>
        <div>
          <p className="doc-name">{title}</p>
          <p className="doc-sub">
            {document.fileName} · {document.sizeLabel}
          </p>
        </div>
      </div>

      <div className="doc-actions">
        <button
          type="button"
          className="btn btn-ghost doc-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="apercu-document"
        >
          {open ? "Masquer l'aperçu" : "Afficher l'aperçu"}
        </button>

        {/* Visible uniquement sur petit écran (voir globals.css). */}
        <a
          className="btn btn-ghost doc-open"
          href={document.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouvrir le document
        </a>

        <a className="btn btn-primary" href={document.url} download>
          {downloadLabel}
        </a>
      </div>

      {open && (
        <div className="doc-preview" id="apercu-document">
          <iframe
            // #view=FitH : le document s'ouvre ajusté à la largeur.
            src={`${document.url}#view=FitH`}
            title={title}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
