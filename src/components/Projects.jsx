import React from 'react';
import { Github, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jpmorg from '../assets/images/jpmorg.png';
import polka from '../assets/images/polka.png';
import lbms from '../assets/images/lbms.png';

const Projects = () => {
  const projects = [
    {
      title: "Markdown Application",
      description: "Full-stack app with secure JWT authentication, RESTful CRUD API, and AWS S3 integration for scalable cloud storage of file attachments.",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "AWS S3", "Docker"],
      image: null,
      github: "https://github.com/D1K03/slate-note-taking"
    },
    {
      title: "JPMorgan Financial Simulation",
      description: "Spring Boot backend integrating Apache Kafka for real-time transaction processing and H2 database for validated transaction persistence and balance management.",
      technologies: ["Java", "Spring Boot", "Kafka", "H2 SQL", "Incentives API"],
      image: jpmorg,
      github: "https://github.com/D1K03/forage-midas/tree/flow"
    },
    {
      title: "Library Management System",
      description: "Comprehensive system to track books, users, and rentals. Authentication secured by salting and hashing. Unit tested with JUnit, FlatLaf UI design.",
      technologies: ["Java", "MySQL", "Docker", "Maven", "Book API"],
      image: lbms,
      github: "https://github.com/D1K03/library-management-system"
    }
  ];

  const hackathons = [
    {
      title: "2x ICHack 26 Winner",
      description: "Won Anthropic (Claude) & Hacktron AI tracks. Built 'orbitSec', a gamified security tool using FastAPI and React with custom Python wrapper bridging Windows and WSL.",
      technologies: ["FastAPI", "React", "Python", "Claude API", "Hacktron CLI"],
      icon: "🏆",
      featured: true
    },
    {
      title: "Google AI Hackathon",
      description: "Selected as 1 of 55 globally from 450+ applicants to develop a web app leveraging Gemini API and Google Veo.",
      technologies: ["React", "TypeScript", "Gemini API", "Google Veo"],
      icon: "🎯"
    },
    {
      title: "EasyA Polkadot Hackathon",
      description: "Developed and pitched a decentralised chat application that surpassed technical standards, earning DOT coin.",
      technologies: ["TypeScript", "Solidity", "Ethers.js"],
      image: polka,
      icon: "🥇"
    },
    {
      title: "ICHack 25",
      description: "Led a team to build an AI code feedback engine using Python Flask and OpenAI API. Pitched MVP to JetBrains representatives.",
      technologies: ["Python", "Flask", "React", "OpenAI API"],
      icon: "🎖️"
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Projects</h2>
            <p className="text-muted-foreground">
              A selection of projects I've built
            </p>
          </div>

          {/* Main Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Project Image */}
                <div className="h-40 bg-muted flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-4xl text-muted-foreground/30">📝</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Hackathons</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {hackathons.map((hackathon, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-lg border p-4 hover:shadow-md transition-shadow ${hackathon.featured ? 'border-primary/50 bg-primary/5' : ''}`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xl">{hackathon.icon}</span>
                    <div>
                      <h4 className={`font-semibold text-sm ${hackathon.featured ? 'text-primary' : ''}`}>{hackathon.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {hackathon.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {hackathon.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {hackathon.github && (
                    <a
                      href={hackathon.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary mt-3"
                    >
                      <Github className="h-3 w-3" />
                      View Code
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-10">
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
};

export default Projects;
