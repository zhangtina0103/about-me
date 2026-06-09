import { sectionLinks } from '../data/siteData';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  }
}

export default function SectionNav() {
  return (
    <aside className="section-nav" aria-label="Page sections">
      <p className="section-nav-label">Sections</p>
      <ol>
        {sectionLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
