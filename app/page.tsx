import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";
import { LINKS } from "@/app/lib/site";
import { isVisible } from "@/app/lib/published";
import { getCvInfo } from "@/app/lib/documents";

// Cette page n'a ni état ni effet : c'est un composant serveur. Elle n'envoie
// donc aucun JavaScript inutile au navigateur — seuls le halo, la navigation
// mobile et le formulaire de contact tournent côté client.

// Raccourcis vers les autres pages. Les textes décrivent le contenu de
// chaque page, rien d'autre. Comme dans le menu, Projets, Parcours et
// Veille ne s'affichent que publiées (voir app/lib/published.ts).
const SHORTCUTS = [
  {
    href: "/a-propos",
    title: "À propos",
    text: "Qui je suis, ma formation et ma façon de travailler.",
  },
  {
    href: "/bts-sio",
    title: "Le BTS SIO",
    text: "Le diplôme que je prépare : ses deux options et ses blocs de compétences.",
  },
  ...(isVisible("projets")
    ? [
        {
          href: "/projets",
          title: "Projets",
          text: "Ce que j'ai construit, avec le détail de chaque réalisation.",
        },
      ]
    : []),
  ...(isVisible("parcours")
    ? [
        {
          href: "/parcours",
          title: "Parcours",
          text: "Mes étapes de formation et d'expérience, dans l'ordre.",
        },
      ]
    : []),
  ...(isVisible("veille")
    ? [
        {
          href: "/veille",
          title: "Veille",
          text: "Ma veille technologique, suivie tout au long du BTS SIO.",
        },
      ]
    : []),
  {
    href: "/contact",
    title: "Contact",
    text: "Un message, LinkedIn ou GitHub — au choix.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <section className="section">
          <SectionTitle index="01" title="En bref" />
          <div className="about-body">
            <p>
              Je suis étudiant en deuxième année de BTS SIO, option SLAM, en
              alternance chez Logemed. Au quotidien, je développe et
              maintiens des applications de gestion pour le secteur de la
              santé.
            </p>
          </div>
          <p className="section-more">
            <Link className="text-link" href="/a-propos">
              En savoir plus sur moi →
            </Link>
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="02" title="Explorer" />
          <ul className="shortcut-grid">
            {SHORTCUTS.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="shortcut">
                  <span className="shortcut-title">{s.title}</span>
                  <span className="shortcut-text">{s.text}</span>
                  <span className="shortcut-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </>
  );
}

function Hero() {
  const name = "Mohamed Darrazi";
  // Le bouton CV n'existe que si le PDF est bien dans public/.
  const cv = getCvInfo();
  return (
    <header className="hero">
      <p className="hero-eyebrow">Portfolio</p>
      {/* Le nom est découpé en lettres pour l'animation en cascade.
          `aria-label` restitue le nom entier aux lecteurs d'écran, qui
          sinon l'épelleraient lettre par lettre. */}
      <h1 className="hero-name" aria-label={name}>
        {name.split("").map((ch, i) => (
          <span
            key={i}
            className="hero-char"
            aria-hidden="true"
            style={{ animationDelay: `${0.3 + i * 0.04}s` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>
      <p className="hero-role">
        Étudiant BTS SIO SLAM · Alternant chez Logemed
      </p>
      <p className="hero-tag">Développement &amp; cybersécurité</p>
      <div className="hero-cta">
        {/* Jamais de bouton vers une page masquée (voir published.ts). */}
        {isVisible("projets") ? (
          <Link className="btn btn-primary" href="/projets">
            Voir mes projets
          </Link>
        ) : null}
        {cv ? (
          <a className="btn btn-primary" href={cv.url} download>
            Télécharger mon CV
          </a>
        ) : null}
        <Link className="btn btn-ghost" href="/contact">
          Me contacter
        </Link>
        <a
          className="btn btn-ghost"
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
