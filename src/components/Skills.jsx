import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "H2", "FileMaker Pro"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS S3", "Maven", "JUnit", "Jest", "VS Code", "IntelliJ"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Skills</h2>
            <p className="text-muted-foreground">
              Technologies I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <div key={index} className="bg-card rounded-lg border p-5">
                <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary rounded-md text-sm transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
