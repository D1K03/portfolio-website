import React from 'react';
import { Github, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jpmorg from '../assets/images/jpmorg.png';
import polka from '../assets/images/polka.png';
import lbms from '../assets/images/lbms.png';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "Full-stack library system for tracking books, users, and rentals. Features secure authentication with JBCrypt, REST API integration for book data, and comprehensive JUnit testing.",
      technologies: ["Java", "MySQL", "Docker", "Maven", "JUnit"],
      image: lbms,
      github: "https://github.com/D1K03/library-management-system"
    },
    {
      title: "JPMorgan Financial Simulation",
      description: "Spring Boot backend for a simulated financial system with Apache Kafka for real-time transaction processing and H2 database for transaction persistence and balance management.",
      technologies: ["Java", "Spring Boot", "Kafka", "H2 SQL", "REST API"],
      image: jpmorg,
      github: "https://github.com/D1K03/forage-midas/tree/flow"
    },
    {
      title: "Markdown Notetaking App",
      description: "Full-stack note-taking application with secure JWT authentication, RESTful API for CRUD operations, and AWS S3 integration for scalable file attachment storage.",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "AWS S3", "Docker"],
      image: null,
      github: "https://github.com/D1K03/slate-note-taking"
    }
  ];

  const hackathons = [
    {
      title: "ICHack 2025",
      description: "Led a team building an AI code feedback application, pitched to JetBrains representatives.",
      technologies: ["Python", "Flask", "React", "OpenAI API"],
      icon: "🏆"
    },
    {
      title: "Google AI Hackathon",
      description: "Selected as 1 of 55 from 450+ applicants to build a web app using Google Veo from Gemini API.",
      technologies: ["React", "TypeScript", "Gemini API"],
      icon: "🎯"
    },
    {
      title: "EasyA Polkadot Hackathon",
      description: "Built a decentralised chat app that earned DOT coin from the prize pool.",
      technologies: ["TypeScript", "Solidity", "Ethers.js"],
      image: polka,
      icon: "🥇"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Projects</h2>
            <p className="text-muted-foreground">
              A selection of projects I've built
            </p>
          </div>

          {/* Main Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hackathons.map((hackathon, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{hackathon.icon}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{hackathon.title}</h4>
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
