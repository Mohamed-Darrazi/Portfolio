import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import SectionTitle from "@/app/components/SectionTitle";
import Placeholder from "@/app/components/Placeholder";
import { SUJET, SOURCES, ARTICLES } from "@/app/lib/veille";
import { isVisible, SHOW_HINTS } from "@/app/lib/published";

export const metadata: Metadata = {
  title: "Veille",
  description:
    "Ma veille technologique menée dans le cadre du BTS SIO : sujet suivi, sources et synthèses.",
};

export default function VeillePage() {
  // Page encore vide : en ligne, elle répond « page introuvable » (404) et
  // n'apparaît ni dans le menu ni sur l'accueil. Elle se réactive toute
  // seule dès qu'un des trois blocs est renseigné. En dev, elle reste visible.
  if (!isVisible("veille")) notFound();

  // Chaque bloc ne s'affiche que s'il a du contenu (ou en dev, avec son
  // encadré d'aide). La numérotation ne compte que les blocs affichés,
  // pour ne jamais montrer « 01 » puis « 03 ».
  let sectionCount = 0;
  const num = () => String(++sectionCount).padStart(2, "0");

  return (
    <>
      <PageHeader
        eyebrow="Veille"
        title="Veille technologique"
        lead="Le suivi que je mène dans le cadre du BTS SIO."
      />

      {(SUJET !== null || SHOW_HINTS) && (
        <Reveal>
          <section className="section">
            <SectionTitle index={num()} title="Mon sujet" />
            {SUJET ? (
              <div className="about-body">
                <h2 className="subject-title">{SUJET.title}</h2>
                <p>{SUJET.why}</p>
              </div>
            ) : (
              <Placeholder file="app/lib/veille.ts">
                Le thème que tu suis et la raison de ce choix. Variable{" "}
                <code>SUJET</code>.
              </Placeholder>
            )}
          </section>
        </Reveal>
      )}

      {(SOURCES.length > 0 || SHOW_HINTS) && (
        <Reveal>
          <section className="section">
            <SectionTitle index={num()} title="Mes sources" />
            {SOURCES.length > 0 ? (
              <ul className="source-list">
                {SOURCES.map((s) => (
                  <li key={s.url} className="source-item">
                    <a
                      className="source-name"
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.name} →
                    </a>
                    <span className="source-kind">{s.kind}</span>
                    {s.note ? <p className="source-note">{s.note}</p> : null}
                  </li>
                ))}
              </ul>
            ) : (
              <Placeholder file="app/lib/veille.ts">
                Les sites, newsletters, flux RSS ou podcasts que tu suis
                régulièrement. Tableau <code>SOURCES</code>.
              </Placeholder>
            )}
          </section>
        </Reveal>
      )}

      {(ARTICLES.length > 0 || SHOW_HINTS) && (
        <Reveal>
          <section className="section">
            <SectionTitle index={num()} title="Mes synthèses" />
            {ARTICLES.length > 0 ? (
              <ul className="article-list">
                {ARTICLES.map((a) => (
                  <li key={a.url} className="article-item">
                    <p className="article-date">
                      <time dateTime={a.date}>{a.date}</time>
                    </p>
                    <a
                      className="article-title"
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {a.title} →
                    </a>
                    <p className="article-takeaway">{a.takeaway}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <Placeholder file="app/lib/veille.ts">
                Pour chaque article lu : la date, le lien, et ce que tu en
                retiens avec tes mots. C&apos;est cette partie que le jury
                regarde. Tableau <code>ARTICLES</code>.
              </Placeholder>
            )}
          </section>
        </Reveal>
      )}
    </>
  );
}
