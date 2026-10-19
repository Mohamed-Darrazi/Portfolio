import type { Metadata } from "next";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import SectionTitle from "@/app/components/SectionTitle";
import { SKILLS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Étudiant en deuxième année de BTS SIO option SLAM en alternance : ma présentation, ma formation et mes compétences techniques.",
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Qui je suis"
        lead="Étudiant BTS SIO SLAM, alternant chez Logemed, orienté développement d'applications."
      />

      <Reveal>
        <section className="section">
          <SectionTitle index="01" title="Présentation" />
          <div className="about-body">
            <p>
              Je suis étudiant en deuxième année de BTS SIO, option SLAM, en
              alternance chez Logemed. Au quotidien, je développe et
              maintiens des applications de gestion pour le secteur de la
              santé.
            </p>
            <p>
              J&apos;aime comprendre un problème dans le détail avant
              d&apos;écrire la moindre ligne, puis construire une solution
              simple et fiable qui rend vraiment service à ceux qui
              l&apos;utilisent. Chaque projet est une occasion d&apos;apprendre
              une technologie de plus et d&apos;affiner ma façon de coder.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="02" title="La formation" />
          <div className="about-body">
            <p>
              Le BTS SIO (Services Informatiques aux Organisations) est un
              diplôme en deux ans. Son option SLAM — Solutions Logicielles et
              Applications Métiers — est centrée sur le développement : analyse
              du besoin, conception, programmation, bases de données et
              maintenance des applications.
            </p>
            <p>
              Suivre cette formation en alternance signifie partager son temps
              entre les cours et une entreprise d&apos;accueil : ce que
              j&apos;apprends en cours, je le mets en pratique sur des
              applications réellement utilisées.
            </p>
            <p>
              Chez Logemed, mes missions sont le développement et la
              maintenance d&apos;applications de gestion pour le secteur de la
              santé, ainsi que le traitement des demandes des établissements
              utilisateurs.
            </p>
          </div>
          <dl className="detail-meta">
            <div>
              <dt>Établissement</dt>
              <dd>Lycée Bonaparte, Toulon</dd>
            </div>
            <div>
              <dt>Entreprise</dt>
              <dd>Logemed</dd>
            </div>
            <div>
              <dt>Chez Logemed depuis</dt>
              <dd>novembre 2025</dd>
            </div>
            <div>
              <dt>Rythme</dt>
              <dd>2 semaines en entreprise / 2 semaines en formation</dd>
            </div>
          </dl>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="03" title="Compétences" />
          <div className="skills-grid">
            {SKILLS.map((col) => (
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
        </section>
      </Reveal>
    </>
  );
}
