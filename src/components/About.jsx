import React from 'react'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions through code."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and stay updated with industry trends."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "Experienced in collaborative projects and effective communication."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Dedicated",
      description: "Committed to writing clean, efficient code and delivering quality results."
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              My journey and what drives me to excel in the field of software development.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm currently a second-year Computer Science student at University, 
                  where I'm developing a strong foundation in programming, algorithms, 
                  and software engineering principles.
                </p>
                <p>
                  My passion for technology started in high school when I built my first 
                  website. Since then, I've been fascinated by how code can bring ideas 
                  to life and solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or playing chess. I believe 
                  in continuous learning and am always looking for opportunities to 
                  grow both personally and professionally.
                </p>
              </div>
            </div>

            {/* Stats or Image Placeholder */}
            <div className="bg-card rounded-lg p-8 border">
              <h4 className="text-xl font-semibold mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Year</span>
                  <span className="font-medium">2nd Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Degree</span>
                  <span className="font-medium">Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Graduation</span>
                  <span className="font-medium">2027</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">London, United Kingdom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Interests</span>
                  <span className="font-medium">Full-Stack Dev | Rollerskating | Basketball</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

