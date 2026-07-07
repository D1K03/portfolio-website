import type { ReactElement, ReactNode } from 'react';

interface SectionProps {
  n: number;
  label: string;
  children: ReactNode;
}

function Section({ n, label, children }: SectionProps): ReactElement {
  return (
    <section
      aria-label={label}
      className="fade-up"
      style={{ animationDelay: `${n * 90}ms` }}
    >
      <h2 className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
        <span className="text-faint">{String(n).padStart(2, '0')}</span>
        <span className="text-dim">{label}</span>
        <span className="flex-1 border-t border-line" aria-hidden="true" />
      </h2>
      {children}
    </section>
  );
}

interface OutLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
}

function OutLink({ href, children, ariaLabel }: OutLinkProps): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
    >
      {children}
      <span aria-hidden="true" className="ml-0.5 inline-block text-dim">
        ↗
      </span>
    </a>
  );
}

interface Role {
  title: string;
  org: string;
  period: string;
}

const PREVIOUS_ROLES: readonly Role[] = [
  {
    title: 'Systems & Automation Intern',
    org: 'Art4site',
    period: 'Jan – Mar 2026',
  },
  {
    title: 'Peer Tutor, Computer Science',
    org: 'University of Kent',
    period: 'Sept 2024 – June 2026',
  },
];

interface Project {
  name: string;
  description: string;
  github: string;
  award?: string;
}

const PROJECTS: readonly Project[] = [
  {
    name: 'Harmony',
    description:
      'AI email classification that drafts replies and syncs Gmail / Outlook labels in real time.',
    github: 'https://github.com/D1K03',
  },
  {
    name: 'PromptGolf',
    description:
      'Multiplayer party game where players reverse-engineer AI images with tighter prompts.',
    github: 'https://github.com/AKforCodes/PromptGolf',
    award: 'KentHackIt 26 · Winner',
  },
  {
    name: 'orbitSec',
    description:
      'Gamified security detection tool built with FastAPI, React and the Claude API.',
    github: 'https://github.com/D1K03/security-detection-game',
    award: 'ICHack 26 · 2x Track Winner',
  },
  {
    name: 'Slate',
    description:
      'Markdown workspace with JWT auth and S3-backed attachment storage.',
    github: 'https://github.com/D1K03/slate-note-taking',
  },
];

function App(): ReactElement {
  return (
    <main id="home" className="mx-auto max-w-xl px-6 py-16 sm:py-24">
      <div className="space-y-16">
        <Section n={1} label="Name">
          <div className="flex items-center gap-5">
            <img
              src="/headshot.webp"
              alt="Daniel Olusakin headshot"
              width={56}
              height={56}
              loading="eager"
              fetchPriority="high"
              className="h-14 w-14 rounded-xl border border-line object-cover grayscale"
            />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Daniel Olusakin</h1>
              <p className="mt-1 text-sm text-dim">
                Software Engineer · 4x hackathon winner
              </p>
            </div>
          </div>
        </Section>

        <Section n={2} label="Location">
          <p>London, United Kingdom</p>
          <p className="mt-1 font-mono text-xs text-faint">51.5072° N, 0.1276° W</p>
        </Section>

        <Section n={3} label="Currently">
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Junior Python Developer at <OutLink href="https://www.cdp.net">CDP</OutLink>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-dim">
            On the Scoring Automation team — building and maintaining the Python
            tooling and data workflows behind CDP{'’'}s annual environmental
            disclosure scores.
          </p>
          <p className="mt-2 font-mono text-xs text-faint">July 2026 →</p>
        </Section>

        <Section n={4} label="Previously">
          <ul className="space-y-3">
            {PREVIOUS_ROLES.map((role) => (
              <li
                key={role.title}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span>
                  {role.title}
                  <span className="text-dim"> · {role.org}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-faint">{role.period}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section n={5} label="Education">
          <p>
            BSc Computer Science, First Class Honours
            <span className="text-dim"> · University of Kent</span>
          </p>
          <p className="mt-1 font-mono text-xs text-faint">2023 – 2026</p>
        </Section>

        <Section n={6} label="Projects">
          <ul className="space-y-5">
            {PROJECTS.map((project) => (
              <li key={project.name}>
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <OutLink
                    href={project.github}
                    ariaLabel={`${project.name} on GitHub`}
                  >
                    {project.name}
                  </OutLink>
                  {project.award && (
                    <span className="font-mono text-[11px] tracking-wide text-faint">
                      {project.award}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-dim">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <a
              href="https://github.com/D1K03?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-faint transition-colors hover:text-fg"
            >
              more on github →
            </a>
          </p>
        </Section>

        <Section n={7} label="Contact">
          <p>
            <a
              href="mailto:olusakindaniel03@gmail.com"
              className="underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
            >
              olusakindaniel03@gmail.com
            </a>
          </p>
          <ul className="mt-4 flex gap-6 font-mono text-xs">
            <li>
              <a
                href="https://github.com/D1K03"
                target="_blank"
                rel="noopener noreferrer me"
                className="text-dim transition-colors hover:text-fg"
              >
                github ↗
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/daniel-olusakin/"
                target="_blank"
                rel="noopener noreferrer me"
                className="text-dim transition-colors hover:text-fg"
              >
                linkedin ↗
              </a>
            </li>
          </ul>
        </Section>

        <footer
          className="fade-up border-t border-line pt-6"
          style={{ animationDelay: '720ms' }}
        >
          <p className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} Daniel Olusakin — London
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
