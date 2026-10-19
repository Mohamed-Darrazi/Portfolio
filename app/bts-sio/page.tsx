import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import SectionTitle from "@/app/components/SectionTitle";

// ============================================================
//  PAGE « LE BTS SIO SLAM »
//  Contenu tiré uniquement de deux sources officielles (listées en
//  bas de page) : la fiche Onisep de l'option SLAM et la présentation
//  du BTS SIO 2019 par l'Inspection générale, publiée sur éduscol.
//  Les intitulés de blocs sont recopiés tels quels. Avant d'ajouter
//  une information (épreuve, coefficient…), vérifier qu'elle figure
//  dans une source officielle.
// ============================================================

export const metadata: Metadata = {
  title: "Le BTS SIO SLAM",
  description:
    "Le BTS SIO, option SLAM : un diplôme national de niveau bac + 2, ses deux options, ses blocs de compétences et la place de l'alternance.",
};

const SOURCES = [
  {
    name: "Onisep — BTS services informatiques aux organisations option B solutions logicielles et applications métiers",
    url: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers",
  },
  {
    name: "éduscol STI — BTS services informatiques aux organisations (deux options) et mention complémentaire services numériques aux organisations (Inspection générale de l'éducation, du sport et de la recherche)",
    url: "https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/seminaires/14891/14891-2-bts-sio-mc-sno-27092022.pdf",
  },
];

// Intitulés officiels des blocs (éduscol, référentiel 2019).
const BLOCS = [
  {
    group: "Blocs professionnels (option SLAM)",
    items: [
      "Bloc n° 1 – Support et mise à disposition de services informatiques",
      "Bloc n° 2 – Conception et développement d'applications",
      "Bloc n° 3 – Cybersécurité des services informatiques",
    ],
  },
  {
    group: "Blocs généraux",
    items: [
      "Bloc n° 4 – Culture générale et expression",
      "Bloc n° 5 – Expression et communication en langue anglaise",
      "Bloc n° 6 – Mathématiques pour l'informatique",
      "Bloc n° 7 – Culture économique, juridique et managériale",
    ],
  },
  {
    group: "Blocs facultatifs",
    items: [
      "Langue vivante 2",
      "Mathématiques approfondies",
      "Parcours de certification complémentaire",
    ],
  },
];

export default function BtsSioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formation"
        title="Le BTS SIO SLAM"
        lead="Le diplôme que je prépare en alternance : ce qu'il est, ses deux options et les compétences qu'il certifie."
      />

      <Reveal>
        <section className="section">
          <SectionTitle index="01" title="Le diplôme" />
          <div className="about-body">
            <p>
              Le BTS SIO — Services informatiques aux organisations — est un
              diplôme national de niveau bac + 2, préparé en deux ans dans un
              lycée ou un CFA. Créé en 2011, il a été révisé en 2019,
              notamment pour être structuré en blocs de compétences.
            </p>
            <p>
              Selon son référentiel, la personne titulaire du diplôme
              « participe à la production et à la fourniture de services
              informatiques à une organisation, soit en tant que collaboratrice
              de cette organisation soit en tant qu&apos;intervenante
              d&apos;une entreprise de services du numérique, d&apos;un éditeur
              de logiciels ou d&apos;une société de conseil en technologies ».
            </p>
          </div>
          <dl className="detail-meta">
            <div>
              <dt>Niveau</dt>
              <dd>Bac + 2 (niveau 5 du RNCP)</dd>
            </div>
            <div>
              <dt>Durée</dt>
              <dd>2 ans</dd>
            </div>
            <div>
              <dt>Crédits</dt>
              <dd>120 crédits ECTS</dd>
            </div>
            <div>
              <dt>Où</dt>
              <dd>En lycée ou en CFA</dd>
            </div>
          </dl>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="02" title="Deux options" />
          <div className="about-body">
            <p>
              Le BTS SIO comporte deux options, chacune avec trois blocs
              professionnels. Le bloc 2 est propre à chaque option ; le bloc 3,
              consacré à la cybersécurité, est spécifique à chaque option, avec
              des compétences communes. J&apos;ai choisi l&apos;option SLAM,
              tournée vers le développement d&apos;applications.
            </p>
          </div>
          <div className="projects-grid section-more">
            <article className="project-card">
              <div className="project-inner">
                <div className="project-top">
                  <h3 className="project-name">
                    SLAM — Solutions logicielles et applications métiers
                  </h3>
                  <span className="project-private">Mon option</span>
                </div>
                <p className="project-blurb">
                  Bloc propre à l&apos;option : conception et développement
                  d&apos;applications.
                </p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-inner">
                <div className="project-top">
                  <h3 className="project-name">
                    SISR — Solutions d&apos;infrastructure, systèmes et réseaux
                  </h3>
                </div>
                <p className="project-blurb">
                  Bloc propre à l&apos;option : administration des systèmes et
                  des réseaux.
                </p>
              </div>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="03" title="Les blocs de compétences" />
          <div className="skills-grid">
            {BLOCS.map((col) => (
              <div key={col.group} className="skill-col">
                <h3 className="skill-group">{col.group}</h3>
                <ul className="skill-list">
                  {col.items.map((item) => (
                    <li key={item} className="skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="about-body section-more">
            <p>S&apos;y ajoutent des ateliers de professionnalisation.</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="04" title="Ce que l'option SLAM fait faire" />
          <div className="about-body">
            <p>
              Le bloc 2 de l&apos;option SLAM, « Conception et développement
              d&apos;applications », regroupe trois compétences :
            </p>
            <ul className="bullet-list">
              <li>concevoir et développer une solution applicative ;</li>
              <li>assurer la maintenance d&apos;une solution applicative ;</li>
              <li>gérer les données.</li>
            </ul>
            <p>
              Concrètement, ce domaine d&apos;activité couvre la conception, le
              développement, le
              déploiement et la maintenance des composants logiciels d&apos;une
              solution applicative (Web, mobile, client…), ainsi que les bases
              de données, la gestion des données numériques et la gestion de
              versions. Parmi les savoirs associés : la programmation, les
              architectures applicatives et l&apos;interopérabilité, les
              interfaces homme-machine, les formats de données et la gestion de
              bases de données, les techniques de tests et d&apos;intégration
              de composants logiciels.
            </p>
            <p>
              En cybersécurité, le bloc 3 de l&apos;option SLAM ajoute une
              compétence qui lui est propre : assurer la cybersécurité
              d&apos;une solution applicative et de son développement.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="05" title="La place de l'alternance" />
          <div className="about-body">
            <p>
              Le BTS se prépare en deux ans, dans un lycée ou un CFA. Pour
              l&apos;option SLAM, sous statut scolaire, l&apos;élève est en
              stage pendant 10 semaines, réparties sur les deux années de
              formation.
            </p>
            <p>
              Je le prépare en alternance au lycée Bonaparte de Toulon, au
              rythme de deux semaines en formation et deux semaines chez
              Logemed, où je développe et maintiens des applications de gestion
              pour le secteur de la santé.
            </p>
          </div>
          <p className="section-more">
            <Link className="text-link" href="/parcours">
              Voir mon parcours →
            </Link>
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="06" title="Sources" />
          <ul className="bullet-list">
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a
                  className="text-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </>
  );
}
