import React from 'react'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A full-stack web application for managing personal tasks and projects. Features include user authentication, real-time updates, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web Development"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts. Integrates with external APIs and features location-based services.",
      technologies: ["JavaScript", "HTML/CSS", "Weather API", "Chart.js"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
      title: "Student Grade Calculator",
      description: "A Python application for calculating and tracking student grades. Includes data visualization and export functionality.",
      technologies: ["Python", "Pandas", "Matplotlib", "Tkinter"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: null,
      category: "Desktop App"
    },
    {
      title: "Recipe Finder Bot",
      description: "A Discord bot that helps users find recipes based on available ingredients. Uses natural language processing and recipe APIs.",
      technologies: ["Python", "Discord.py", "Recipe API", "NLP"],
      image: "/api/placeholder/400/250",
      github: "https://github.com",
      demo: null,
      category: "Bot Development"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return <Globe className="h-4 w-4" />
      case "Frontend":
        return <Code className="h-4 w-4" />
      case "Desktop App":
        return <Database className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my studies and in my free time. 
              Each project represents a learning journey and showcases different skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground">
                    <Code size={48} />
                  </div>
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
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

