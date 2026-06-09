export default function PublicationCard({ pub }) {
  return (
    <article className="publication-card card">
      <h3>
        {pub.url ? (
          <a href={pub.url} target="_blank" rel="noreferrer">
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>
      <p className="subtitle">{pub.authors}</p>
      <p className="org-name">{pub.venue}</p>
      {pub.year && <p className="date">{pub.year}</p>}
    </article>
  );
}
