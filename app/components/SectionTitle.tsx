// Titre de section numéroté ("01 — À propos"). L'index est décoratif :
// il est masqué aux lecteurs d'écran pour ne pas parasiter la lecture.
export default function SectionTitle({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="section-head">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
