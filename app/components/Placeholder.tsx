// Encadré « à compléter ».
// Utilisé partout où le contenu n'est pas encore écrit : la structure de la
// page existe, mais aucun texte n'est inventé. `file` indique le fichier à
// éditer pour remplir la section.
export default function Placeholder({
  children,
  file,
}: {
  children: React.ReactNode;
  file?: string;
}) {
  // Filet de sécurité : quoi qu'il arrive, cet encadré n'apparaît jamais sur
  // le site en ligne. Il n'est rendu qu'en local, pendant `npm run dev`.
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="placeholder">
      <span className="placeholder-badge">À compléter</span>
      <p className="placeholder-text">{children}</p>
      {file ? (
        <p className="placeholder-file">
          Fichier à éditer : <code>{file}</code>
        </p>
      ) : null}
    </div>
  );
}
