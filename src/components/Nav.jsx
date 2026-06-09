import { sectionLinks } from '../data/siteData';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  }
}

const navLinks = sectionLinks.filter((s) =>
  ['education', 'work', 'research', 'publications', 'skills', 'projects'].includes(s.id),
);

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a
          href="#about"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          Kristina Zhang
        </a>
        <ul>
          {navLinks.map((link) => (
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
        </ul>
      </div>
    </nav>
  );
}
