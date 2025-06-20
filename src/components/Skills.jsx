import React from 'react'
import { Code, Database, Globe, Wrench, BookOpen, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "C++", level: 65 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 75 },
        { name: "jQuery", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "IntelliJ", level: 60 },
        { name: "PostgreSQL ", level: 65 },
        { name: "MySQL", level: 70 },
        { name: "Docker", level: 50 }
      ]
    },
    {
      title: "Concepts & Methodologies",
      icon: <BookOpen className="h-6 w-6" />,
      skills: [
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "OOP", level: 85 },
        { name: "REST APIs", level: 70 },
        { name: "Responsive Design", level: 85 },
        { name: "Agile/Scrum", level: 60 }
      ]
    }
  ]

  const getSkillColor = (level) => {
    if (level >= 80) return "bg-green-500"
    if (level >= 70) return "bg-blue-500"
    if (level >= 60) return "bg-yellow-500"
    return "bg-gray-500"
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's an overview of my technical skills and the technologies I've been learning 
              and working with during my Computer Science journey.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card rounded-lg border p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Other Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Team Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Experience working in group projects and hackathons that require collaborative tools
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Strong analytical thinking and debugging skills, cultivated through tutoring, personal projects and coursework
                </p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Database Design</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding of database concepts and design principles from coursework and personal projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

