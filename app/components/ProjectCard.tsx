import Link from "next/link";
import type { Project } from "@/app/lib/projects";

// Carte de projet : toute la carte est cliquable et mène à sa page de détail.
// Le lien externe (GitHub) est volontairement affiché sur la page de détail
// et non ici : imbriquer deux liens l'un dans l'autre serait invalide en HTML
// et piégerait la navigation au clavier.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-glow" aria-hidden="true" />
      <Link
        href={`/projets/${project.slug}`}
        className="project-inner project-card-link"
      >
        <div className="project-top">
          <h3 className="project-name">{project.name}</h3>
          {project.link === null ? (
            <span className="project-private">Dépôt privé</span>
          ) : null}
        </div>
        <p className="project-blurb">{project.blurb}</p>
        <ul className="project-stack">
          {project.stack.map((t) => (
            <li key={t} className="stack-tag">
              {t}
            </li>
          ))}
        </ul>
        <span className="project-more">Voir le projet →</span>
      </Link>
    </article>
  );
}
