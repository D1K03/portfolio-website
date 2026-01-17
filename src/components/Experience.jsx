import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Systems & Automation Intern",
      company: "Art4site",
      location: "Wye, Kent",
      period: "Jan 2026 - Present",
      description: [
        "Automating production workflow by improving integration between customer-facing interface and backend systems",
        "Enhancing data connectivity between FileMaker, Intercom, and internal order-management systems"
      ],
      current: true
    },
    {
      title: "Peer Tutor (Computer Science)",
      company: "University of Kent",
      location: "Canterbury, Kent",
      period: "Sept 2024 - Present",
      description: [
        "Instructing ~12 students per session on object-oriented programming in Python and Java",
        "Analysing source code to identify bugs and providing targeted guidance for improvement"
      ],
      current: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Experience</h2>
            <p className="text-muted-foreground">
              Professional experience and roles
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow"
              >
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
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
