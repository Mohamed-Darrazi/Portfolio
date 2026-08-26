import type { Metadata } from "next";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import ProjectCard from "@/app/components/ProjectCard";
import Placeholder from "@/app/components/Placeholder";
import { PROJECTS } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets de développement que j'ai réalisés, avec pour chacun une page de détail : contexte, fonctionnalités et technologies.",
};

export default function ProjetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title="Ce que je construis"
        lead="Chaque carte mène à une page de détail."
      />

      <Reveal>
        <section className="section">
          {PROJECTS.length > 0 ? (
            <div className="projects-grid">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <Placeholder file="app/lib/projects.ts">
              Aucun projet pour l&apos;instant.
            </Placeholder>
          )}
        </section>
      </Reveal>
    </>
  );
}
