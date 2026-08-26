// En-tête commun aux pages intérieures (À propos, Projets, Parcours…).
// Reprend la typographie du hero de l'accueil, en plus compact, avec les
// mêmes animations d'apparition.
export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="page-header">
      <p className="page-eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {lead ? <p className="page-lead">{lead}</p> : null}
    </header>
  );
}
