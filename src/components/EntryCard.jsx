export default function EntryCard({ item, index = 0 }) {
  return (
    <article className="entry-card card" style={{ '--card-index': index }}>
      <header className="entry-header">
        <h3>{item.title}</h3>
        {item.award && <p className="inline-award">{item.award}</p>}
        {item.org && <p className="org-name">{item.org}</p>}
        {item.pi && (
          <p className="subtitle">
            <em>PI: {item.pi}</em>
          </p>
        )}
        {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
        {(item.dates || item.year) && (
          <p className="date">{item.dates || item.year}</p>
        )}
      </header>
      {item.details && <p>{item.details}</p>}
      {item.bullets && (
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {item.tech && <p className="tech-tag">{item.tech}</p>}
      {item.description && <p>{item.description}</p>}
      {item.repo && (
        <p className="project-links">
          <a href={item.repo} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      )}
    </article>
  );
}
