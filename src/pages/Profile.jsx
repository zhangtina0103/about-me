import { useEffect } from 'react';
import SectionNav from '../components/SectionNav';
import EntryCard from '../components/EntryCard';
import PublicationCard from '../components/PublicationCard';
import {
  profile,
  education,
  highlights,
  research,
  publications,
  skills,
  workExperience,
  projects,
  activities,
} from '../data/siteData';

function Section({ id, title, children }) {
  return (
    <section id={id} className="profile-section">
      <h2 className="section-heading">{title}</h2>
      {children}
    </section>
  );
}

export default function Profile() {
  const { mit, highSchool } = education;

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  return (
    <div className="page-layout">
      <SectionNav />
      <div className="page-content container profile-page">
        <header className="page-header">
          <h1>{profile.name}</h1>
          <p className="page-header-sub">{profile.tagline}</p>
          <p className="page-header-meta">
            {profile.email} · {profile.github.replace('https://', '')} ·{' '}
            <a href={profile.scholar} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
          </p>
        </header>

        <Section id="about" title="About">
          <div className="about-block card">
            <img src={profile.photo} alt={profile.name} className="profile-pic" />
            <div>
              <p className="home-meta">
                {profile.year} at MIT · Class of {profile.classYear} · {profile.major}
              </p>
              <p>{profile.bio}</p>
              {profile.futureCoursework && (
                <>
                  <h4 className="subsection-title about-subsection">Upcoming Coursework</h4>
                  <p className="coursework">{profile.futureCoursework}</p>
                </>
              )}
              <div className="social-links">
                <a href={profile.github} className="social-link" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.scholar} className="social-link" target="_blank" rel="noreferrer">
                  Google Scholar
                </a>
                <a href={`mailto:${profile.email}`} className="social-link">
                  Email
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="edu-block card">
            <h3>{mit.school}</h3>
            <p className="subtitle">
              {mit.location} · {mit.dates}
            </p>
            {mit.degrees.map((deg) => (
              <div key={deg.title} className="resume-item">
                <p>
                  <strong>{deg.title}</strong>
                  <span className="date"> — {deg.dates}</span>
                </p>
                {deg.details && (
                  <ul>
                    {deg.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <h4 className="subsection-title">Honors</h4>
            <ul>
              {mit.honors.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h4 className="subsection-title">Relevant Coursework</h4>
            <p className="coursework">{mit.coursework}</p>
            <h4 className="subsection-title">Teaching & Mentoring</h4>
            <ul>
              {mit.teaching.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="edu-block card">
            <h3>{highSchool.school}</h3>
            <p className="subtitle">
              {highSchool.location} · {highSchool.dates}
            </p>
            <ul>
              {highSchool.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="work" title="Work Experience">
          {workExperience.map((item, i) => (
            <EntryCard key={`${item.org}-${item.dates}`} item={item} index={i} />
          ))}
        </Section>

        <Section id="research" title="Research">
          {research.map((item, i) => (
            <EntryCard key={`${item.org}-${item.dates}`} item={item} index={i} />
          ))}
        </Section>

        <Section id="publications" title="Publications">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <div className="card">
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.category} className="skill-category">
                  <h3>{group.category}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((project, i) => (
            <EntryCard key={project.title} item={project} index={i} />
          ))}
        </Section>

        <Section id="highlights" title="Awards & Highlights">
          <div className="card">
            <h4 className="subsection-title">Honors</h4>
            <ul>
              {highlights.awards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4 className="subsection-title">Fencing</h4>
            <p className="section-note">College (MIT varsity)</p>
            <ul>
              {highlights.fencing.college.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-note">Pre-college</p>
            <ul>
              {highlights.fencing.precollege.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="activities" title="Activities">
          {activities.mit.map((item, i) => (
            <EntryCard key={item.title} item={item} index={i} />
          ))}
        </Section>
      </div>
    </div>
  );
}
