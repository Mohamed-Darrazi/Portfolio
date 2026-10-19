import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import Placeholder from "@/app/components/Placeholder";
import { TIMELINE } from "@/app/lib/parcours";
import { isVisible } from "@/app/lib/published";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Mon parcours de formation et d'expérience, étape par étape.",
};

export default function ParcoursPage() {
  // Page encore vide : en ligne, elle répond « page introuvable » (404) et
  // n'apparaît ni dans le menu ni sur l'accueil. Elle se réactive toute
  // seule dès que TIMELINE contient une entrée. En dev, elle reste visible.
  if (!isVisible("parcours")) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Parcours"
        title="Étape par étape"
        lead="Ma formation et mon expérience, de la plus récente à la plus ancienne."
      />

      <Reveal>
        <section className="section">
          {TIMELINE.length > 0 ? (
            <ol className="timeline">
              {TIMELINE.map((e) => (
                <li key={`${e.period}-${e.title}`} className="timeline-item">
                  <span
                    className={`timeline-dot timeline-dot-${e.kind}`}
                    aria-hidden="true"
                  />
                  <div className="timeline-body">
                    <p className="timeline-period">{e.period}</p>
                    <h2 className="timeline-title">{e.title}</h2>
                    {e.place ? (
                      <p className="timeline-place">{e.place}</p>
                    ) : null}
                    {e.description ? (
                      <p className="timeline-text">{e.description}</p>
                    ) : null}
                    {e.points && e.points.length > 0 ? (
                      <ul className="bullet-list">
                        {e.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    ) : null}
                    {e.after ? (
                      <p className="timeline-text">{e.after}</p>
                    ) : null}
                    {e.tags && e.tags.length > 0 ? (
                      <ul className="project-stack">
                        {e.tags.map((t) => (
                          <li key={t} className="stack-tag">
                            {t}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <Placeholder file="app/lib/parcours.ts">
              La frise est prête : elle s&apos;affichera dès que tu ajouteras
              une entrée dans le tableau <code>TIMELINE</code>. Chaque entrée
              demande une période, un intitulé, un lieu et un type (formation ou
              expérience) ; la description et les technologies sont facultatives.
            </Placeholder>
          )}
        </section>
      </Reveal>
    </>
  );
}
