import type { Metadata } from "next";
import Reveal from "@/app/components/Reveal";
import PageHeader from "@/app/components/PageHeader";
import SectionTitle from "@/app/components/SectionTitle";
import { LINKS } from "@/app/lib/site";

// ============================================================
//  MENTIONS LÉGALES
//  Contenu fourni par Mohamed. Ne rien ajouter de juridique sans
//  source : signaler plutôt ce qui manque.
//  Téléphone de l'hébergeur : celui publié par Vercel sur sa page
//  https://vercel.com/legal/dmca-policy (seul numéro trouvé sur
//  vercel.com, vérifié le 13/11/2026).
// ============================================================

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site personnel de Mohamed Darrazi : éditeur, hébergeur, données personnelles et cookies.",
};

/** À mettre à jour à chaque modification de cette page. */
const LAST_UPDATE = "13 novembre 2026";

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader eyebrow="Informations" title="Mentions légales" />

      <Reveal>
        <section className="section">
          <SectionTitle index="01" title="Éditeur du site" />
          <div className="about-body">
            <p>
              Ce site est édité par Mohamed Darrazi, particulier. Il s&apos;agit
              d&apos;un site personnel, non professionnel.
            </p>
            <p>
              Contact :{" "}
              <a className="text-link" href={`mailto:${LINKS.email}`}>
                {LINKS.email}
              </a>
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="02" title="Directeur de la publication" />
          <div className="about-body">
            <p>Mohamed Darrazi.</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="03" title="Hébergeur" />
          <div className="about-body">
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              Téléphone : +1 559 288 7060
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="04" title="Données personnelles" />
          <div className="about-body">
            <p>
              Le formulaire de contact collecte votre nom, votre adresse
              e-mail, le sujet et le message, uniquement pour répondre à votre
              message.
            </p>
            <p>
              Ces données sont transmises via le service Formspree, qui me les
              envoie par e-mail. Elles ne sont ni revendues ni utilisées à
              d&apos;autres fins.
            </p>
            <p>
              Vous pouvez demander l&apos;accès à vos données, leur
              rectification ou leur suppression en écrivant à l&apos;adresse
              indiquée ci-dessus. Vous pouvez également saisir la CNIL.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <SectionTitle index="05" title="Cookies" />
          <div className="about-body">
            <p>
              Ce site ne dépose aucun cookie et n&apos;utilise aucun outil de
              statistiques ou de mesure d&apos;audience.
            </p>
          </div>
          <p className="legal-update">Dernière mise à jour : {LAST_UPDATE}</p>
        </section>
      </Reveal>
    </>
  );
}
