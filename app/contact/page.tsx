import type { Metadata } from "next";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import ContactForm from "@/app/components/ContactForm";
import { LINKS } from "@/app/lib/site";
import { getCvInfo } from "@/app/lib/documents";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Me contacter par message, ou me retrouver sur LinkedIn et GitHub.",
};

export default function ContactPage() {
  // Le bouton CV n'existe que si le PDF est bien dans public/.
  const cv = getCvInfo();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Me contacter"
        lead="Une question, une opportunité, ou juste un bonjour."
      />

      <Reveal>
        <section className="section">
          <div className="contact-wrap">
            <div className="contact-form-col">
              <ContactForm />
            </div>
            <div className="contact-links-col">
              <p className="contact-aside">
                Vous préférez un autre canal&nbsp;?
              </p>
              <a
                className="contact-link"
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn →
              </a>
              <a
                className="contact-link"
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
              {cv ? (
                <p className="section-more">
                  <a className="btn btn-primary" href={cv.url} download>
                    Télécharger mon CV
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
