import React from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = {
    degree: "Computer Science, BSc",
    university: "University of Kent",
    location: "Canterbury, Kent",
    period: "2023 - 2027",
    grade: "First-Class Honours (84%)",
    status: "Second Year Student"
  }

  const coursework = [
    "Data Structures and Algorithms",
    "Database Systems",
    "Object-Oriented Programming",
    "Further Object-Oriented Programming",
    "Introduction to Artificial Intelligence",
    "Web Development",
    "Software Development",
    "Computing and the Cloud",
    "Human-Computer Interaction"
  ]

  const achievements = [
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for academic excellence",
      date: "Fall 2023"
    },
    {
      title: "Programming Competition",
      description: "3rd place in university programming competition",
      date: "Spring 2024"
    },
    {
      title: "CS Club Member",
      description: "Active member of Computer Science Student Association",
      date: "2023 - Present"
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              My academic journey and the knowledge I'm building
            </p>
          </div>

          {/* Main Education Card */}
          <div className="bg-card rounded-lg border p-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* University Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{education.degree}</h3>
                <p className="text-lg text-muted-foreground mb-3">{education.university}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>Grade: {education.grade}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{education.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework and Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Relevant Coursework */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Relevant Coursework
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-primary font-medium">
                      {achievement.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Academic Goals</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm focused on maintaining academic excellence while gaining practical experience 
              through internships and personal projects. My goal is to specialize in software 
              development and contribute to innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

