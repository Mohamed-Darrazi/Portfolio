import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import DocumentViewer from "@/app/components/DocumentViewer";
import { getCvInfo } from "@/app/lib/documents";

export const metadata: Metadata = {
  title: "CV",
  description: "Mon CV, consultable en ligne ou à télécharger en PDF.",
};

export default function CvPage() {
  // Pas de fichier public/cv-mohamed-darrazi.pdf : la page répond « page
  // introuvable » (404), et son lien disparaît du menu comme les boutons
  // de téléchargement — jamais de lien mort.
  const cv = getCvInfo();
  if (!cv) notFound();

  return (
    <>
      <PageHeader
        eyebrow="CV"
        title="Mon CV"
        lead="À consulter directement ici, ou à télécharger en PDF."
      />

      <Reveal>
        <section className="section">
          <DocumentViewer
            document={cv}
            title="CV — Mohamed Darrazi"
            downloadLabel="Télécharger mon CV (PDF)"
          />
        </section>
      </Reveal>
    </>
  );
}
