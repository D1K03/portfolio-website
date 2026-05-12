import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface SkillGroup {
  title: string;
  skills: readonly string[];
}

const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'Tailwind'],
  },
  {
    title: 'Data & Cloud',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'AWS S3', 'Docker', 'Vercel', 'Netlify'],
  },
];

const COURSEWORK: readonly string[] = [
  'Data Structures & Algorithms',
  'Database Systems',
  'Cloud Computing',
  'AI & Machine Learning',
  'Concurrency',
  'Object-Oriented Programming',
];

function Background(): React.ReactElement {
  return (
    <section id="skills" aria-labelledby="background-heading" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="background-heading" className="text-3xl font-bold mb-3">
              Skills & Education
            </h2>
            <p className="text-muted-foreground">
              Day-to-day stack and academic background. AWS Cloud Practitioner in progress.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <article aria-labelledby="skills-heading" className="bg-card rounded-lg border p-5">
              <h3
                id="skills-heading"
                className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider"
              >
                Skills
              </h3>
              <div className="space-y-3">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">
                      {group.title}
                    </p>
                    <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="px-2.5 py-1 bg-muted hover:bg-primary/10 hover:text-primary rounded-md text-xs transition-colors"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article
              id="education"
              aria-labelledby="education-heading"
              className="bg-card rounded-lg border p-5 scroll-mt-24"
            >
              <h3
                id="education-heading"
                className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider"
              >
                Education
              </h3>
              <div className="flex gap-3 mb-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold leading-tight">BSc Computer Science (Hons)</p>
                  <p className="text-primary text-sm font-medium">University of Kent</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-3">
                <time dateTime="2023-09/2026-07" className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Sept 2023 – July 2026
                </time>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Canterbury, Kent
                </span>
                <span className="flex items-center gap-1">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  Expected First (82%)
                </span>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1.5">
                  Relevant Coursework
                </p>
                <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                  {COURSEWORK.map((course) => (
                    <li
                      key={course}
                      className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;
