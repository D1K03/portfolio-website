import { Github, Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jpmorg from '../assets/images/jpmorg.png';
import bookStack from '../assets/images/book-stack.png';
import harmonyLogo from '../assets/images/harmony_logo_no_bg.png';

interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  image: string | null;
  imageFit?: 'cover' | 'contain' | 'icon';
  github: string;
  live?: string;
}

interface Hackathon {
  title: string;
  description: string;
  technologies: readonly string[];
  icon: string;
  github?: string;
  featured?: boolean;
}

const PROJECTS: readonly Project[] = [
  {
    title: 'Harmony - AI Email Classification',
    description:
      'AI auto-categorises mail, generates draft replies, and syncs labels in real time via Gmail Pub/Sub and Outlook webhooks.',
    technologies: [
      'Next.js',
      'TypeScript',
      'OpenRouter',
      'gpt-oss 20b',
      'Gemini 3.1 Flash',
      'Gmail/Outlook APIs',
      'Stripe',
    ],
    image: harmonyLogo,
    imageFit: 'contain',
    github: 'https://github.com/D1K03',
  },
  {
    title: 'Markdown Application',
    description:
      'Full-stack app with secure JWT authentication, RESTful CRUD API, and AWS S3 integration for scalable cloud storage of file attachments.',
    technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'AWS S3', 'Docker'],
    image: null,
    github: 'https://github.com/D1K03/slate-note-taking',
  },
  {
    title: 'JPMorgan Financial Simulation',
    description:
      'Spring Boot backend integrating Apache Kafka for real-time transaction processing and H2 database for validated transaction persistence and balance management.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'H2 SQL', 'Incentives API'],
    image: jpmorg,
    imageFit: 'contain',
    github: 'https://github.com/D1K03/forage-midas/tree/flow',
  },
  {
    title: 'Library Management System',
    description:
      'Comprehensive system to track books, users, and rentals. Authentication secured by salting and hashing. Unit tested with JUnit, FlatLaf UI design.',
    technologies: ['Java', 'MySQL', 'Docker', 'Maven', 'Book API'],
    image: bookStack,
    imageFit: 'icon',
    github: 'https://github.com/D1K03/library-management-system',
  },
];

const HACKATHONS: readonly Hackathon[] = [
  {
    title: 'KentHackIt 26 - Main Track Winner',
    description:
      "Built 'PromptGolf', a multiplayer party game where players race to reverse-engineer a target image by writing tighter prompts for an AI image generator. Server-authoritative timing, Redis-only state, real-time presence via Pusher.",
    technologies: ['Next.js 15', 'TypeScript', 'fal.ai FLUX', 'Upstash Redis', 'Pusher'],
    icon: '🏆',
    github: 'https://github.com/AKforCodes/PromptGolf',
    featured: true,
  },
  {
    title: '2x ICHack 26 Winner',
    description:
      "Won Anthropic (Claude) & Hacktron AI tracks. Built 'orbitSec', a gamified security tool using FastAPI and React with a custom Python wrapper bridging Windows and WSL.",
    technologies: ['FastAPI', 'React', 'Python', 'Claude API', 'Hacktron CLI'],
    icon: '🏆',
    github: 'https://github.com/D1K03/security-detection-game',
    featured: true,
  },
  {
    title: 'Google AI Hackathon - Top 55 Globally',
    description:
      'Selected as 1 of 55 globally from 450+ applicants to develop a web app leveraging the Gemini API and Google Veo.',
    technologies: ['React', 'TypeScript', 'Gemini API', 'Google Veo'],
    icon: '🎯',
  },
];

function Projects(): React.ReactElement {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-12 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="projects-heading" className="text-3xl font-bold mb-3">
              Projects
            </h2>
            <p className="text-muted-foreground">A selection of work I've shipped</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-40 bg-muted flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={
                        project.imageFit && project.imageFit !== 'cover'
                          ? `${project.title} icon`
                          : `${project.title} screenshot`
                      }
                      loading="lazy"
                      className={`w-full h-full ${
                        project.imageFit === 'icon'
                          ? 'object-contain p-8'
                          : project.imageFit === 'contain'
                            ? 'object-contain p-2'
                            : 'object-cover'
                      }`}
                    />
                  ) : (
                    <div className="text-7xl text-muted-foreground/40" aria-hidden="true">
                      📝
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold mb-1.5">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 mb-3 list-none p-0 m-0">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Hackathons</h3>
            </div>

            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 list-none p-0 m-0">
              {HACKATHONS.map((hackathon) => (
                <li
                  key={hackathon.title}
                  className={`bg-card rounded-lg border p-4 hover:shadow-md transition-shadow flex ${
                    hackathon.featured ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                >
                  <article className="flex flex-col w-full">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-xl" aria-hidden="true">{hackathon.icon}</span>
                      <h4
                        className={`font-semibold text-sm ${
                          hackathon.featured ? 'text-primary' : ''
                        }`}
                      >
                        {hackathon.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {hackathon.description}
                    </p>
                    <ul className="flex flex-wrap gap-1 list-none p-0 m-0 mb-3">
                      {hackathon.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    {hackathon.github && (
                      <a
                        href={hackathon.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary mt-auto"
                        aria-label={`${hackathon.title} source code on GitHub`}
                      >
                        <Github className="h-3 w-3" />
                        View Code
                      </a>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <Button variant="ghost" asChild>
              <a
                href="https://github.com/D1K03?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
