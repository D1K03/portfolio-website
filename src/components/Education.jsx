import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Systems",
    "Software Development",
    "Web Development",
    "Object-Oriented Programming",
    "Cloud Computing",
    "AI & Machine Learning",
    "Concurrency"
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Education</h2>
            <p className="text-muted-foreground">
              Academic background
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-card rounded-lg border p-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  <GraduationCap size={28} />
                </div>
              </div>

              {/* Details */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-1">BSc Computer Science (Hons)</h3>
                <p className="text-primary font-medium mb-3">University of Kent</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Sept 2023 - July 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Canterbury, Kent
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="h-4 w-4" />
                    Expected First (82%)
                  </span>
                </div>

                {/* Coursework */}
                <div>
                  <p className="text-sm font-medium mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {coursework.map((course, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
