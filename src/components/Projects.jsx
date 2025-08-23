import React from 'react'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import jpmorg from '../assets/images/jpmorg.png'
import polka from '../assets/images/polka.png'
import lbms from '../assets/images/lbms.png'
import storyspark from '../assets/images/storyspark.png'

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "MVC application for managing library books and tracking renting from users. Features icl. user authentication w/ hashing, RESTful API for easy retrieval of book information, real-time updates, and functional testing.",
      technologies: ["Java", "MySQL", "Maven", "Docker", "JUnit Testing", "Book API"],
      image: lbms,
      github: "https://github.com/D1K03/library-management-system",
      category: "App Development"
    },

    {
      title: "Blockchain Chat Application",
      description: "Pseudo-anonymous dApp to leverage blockchain for secure message storage. Integrated with the Polkadot ecosystem via Moonbeam for Ethereum-compatible smart contracts.",
      technologies: ["TypeScript", "Solidity", "JavaScript", "HTML", "CSS", "Polkadot", "Moonbeam"],
      image: polka,
      github: "https://github.com/D1K03/Hackathon-Polkadot-App",
      category: "Decentralised App Development"
    },

    {
      title: "Simulated Financial System",
      description: "Simulated financial system, integrating Apache Kafka for real-time transaction processing and H2 database for validated transaction persistence and balance management.",
      technologies: ["Java", "Spring Boot", "H2 SQL", "Kafka", "Maven", "Incentives API"],
      image: jpmorg,
      github: "https://github.com/D1K03/forage-midas/tree/flow",
      category: "App Development"
    },

    {
      title: "Story Co-Writer",
      description: "A responsive weather application that displays current conditions and forecasts. Integrates with external APIs and features location-based services.",
      technologies: ["React", "TypeScript", "Gemini API", "Google Veo"],
      image: storyspark,
      github: "https://github.com/D1K03/adventure-time",
      category: "Web Development"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return <Globe className="h-4 w-4" />
      case "App Development":
        return <Database className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  return (
    <section id="projects" className="py-15">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projects I've worked on during my studies and in my free time. 
              Each project represents a learning journey and showcases a set of different skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-48 bg-muted flex items-center justify-center">
                  <img src={project.image} alt = {project.title}  className="w-full h-full object-fill"/>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <a href="https://github.com/D1K03?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="h-5 w-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

