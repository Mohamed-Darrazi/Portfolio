import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";
import Placeholder from "@/app/components/Placeholder";
import ProjectDocument from "@/app/components/ProjectDocument";
import { PROJECTS, getProject } from "@/app/lib/projects";
import { getDocumentInfo } from "@/app/lib/documents";

// Génère à la construction du site une page statique par projet.
// Ajouter un projet dans app/lib/projects.ts suffit : sa page apparaît seule.
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// Titre et description propres à chaque projet (utile pour le partage de lien).
export async function generateMetadata({
  params,
}: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projet introuvable" };
  return { title: project.name, description: project.blurb };
}

export default async function ProjetPage({
  params,
}: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  // Slug inconnu : on renvoie la page 404 de Next.js plutôt qu'une erreur.
  if (!project) notFound();

  // Résolu ici, côté serveur, au moment du build : on vérifie que le PDF
  // existe vraiment dans public/projets/ et on relève son poids.
  // `null` = pas de document, ou fichier introuvable.
  const projectDoc = getDocumentInfo(project.pdf);

  return (
    <>
      <p className="back-link">
        <Link href="/projets">← Tous les projets</Link>
      </p>

      <header className="page-header">
        <p className="page-eyebrow">Projet</p>
        <h1 className="page-title">{project.name}</h1>
        <p className="page-lead">{project.blurb}</p>

        <ul className="project-stack detail-stack">
          {project.stack.map((t) => (
            <li key={t} className="stack-tag">
              {t}
            </li>
          ))}
        </ul>

        <dl className="detail-meta">
          <div>
            <dt>Période</dt>
            <dd>{project.period ?? "À compléter"}</dd>
          </div>
          <div>
            <dt>Code source</dt>
            <dd>
              {project.link ? (
                <a
                  className="text-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur GitHub →
                </a>
              ) : (
                "Dépôt privé"
              )}
            </dd>
          </div>
        </dl>
      </header>

      <Reveal>
        <section className="section">
          <SectionTitle index="01" title="Contexte" />
          {project.context ? (
            <div className="about-body">
              <p>{project.context}</p>
            </div>
          ) : (
            <Placeholder file="app/lib/projects.ts">
              Pourquoi ce projet, à quel besoin il répond, et dans quel cadre tu
              l&apos;as mené. Champ <code>context</code> du projet.
            </Placeholder>
          )}
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="02" title="Fonctionnalités" />
          {project.features && project.features.length > 0 ? (
            <ul className="bullet-list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ) : (
            <Placeholder file="app/lib/projects.ts">
              Ce que l&apos;application sait faire, point par point. Champ{" "}
              <code>features</code> du projet.
            </Placeholder>
          )}
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="03" title="Ce que j'en retire" />
          {project.learnings && project.learnings.length > 0 ? (
            <ul className="bullet-list">
              {project.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          ) : (
            <Placeholder file="app/lib/projects.ts">
              Les difficultés rencontrées et ce que le projet t&apos;a appris.
              Champ <code>learnings</code> du projet.
            </Placeholder>
          )}
        </section>
      </Reveal>

      {/* Section entièrement conditionnelle : sans document associé (ou si le
          fichier est introuvable dans public/projets/), rien n'est rendu du
          tout — ni titre, ni bouton. */}
      {projectDoc ? (
        <Reveal>
          <section className="section">
            <SectionTitle index="04" title="Dossier de projet" />
            <ProjectDocument document={projectDoc} projectName={project.name} />
          </section>
        </Reveal>
      ) : null}
    </>
  );
}
