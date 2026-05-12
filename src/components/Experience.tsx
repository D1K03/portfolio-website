import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  dateTime: string;
  description: readonly string[];
  current?: boolean;
}

const EXPERIENCES: readonly ExperienceItem[] = [
  {
    title: 'Systems & Automation Intern',
    company: 'Art4site',
    location: 'Wye, Kent',
    period: 'Jan 2026 - Mar 2026',
    dateTime: '2026-01/2026-03',
    description: [
      'Designed REST API integration between FileMaker Pro and Intercom, automating multi-stage order updates',
      'Engineered secure API workflows using Bearer token authentication and JSON payloads with Postman testing',
      'Optimised database schema with relational fields and a dynamic templating engine for context-aware emails',
      'Reduced manual overhead through UI-triggered scripts automating customer notifications',
    ],
  },
  {
    title: 'Peer Tutor (Computer Science)',
    company: 'University of Kent',
    location: 'Canterbury, Kent',
    period: 'Sept 2024 - Present',
    dateTime: '2024-09',
    description: [
      'Assisted in instructing 20+ students per session on OOP in Python and Java',
      'Deep-dive source code analysis to debug logic errors and provide architectural guidance',
    ],
    current: true,
  },
];

function Experience(): React.ReactElement {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-12 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="experience-heading" className="text-3xl font-bold mb-3">
              Experience
            </h2>
            <p className="text-muted-foreground">Professional experience and roles</p>
          </div>

          <ol className="space-y-6 list-none p-0">
            {EXPERIENCES.map((exp) => (
              <li
                key={`${exp.company}-${exp.title}`}
                className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow"
              >
                <article>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        {exp.title}
                        {exp.current && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                      <time dateTime={exp.dateTime} className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.period}
                      </time>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc list-outside pl-5 marker:text-primary">
                    {exp.description.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
