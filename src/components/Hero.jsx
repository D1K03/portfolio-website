import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pfp from '../assets/images/pfp.jpg';
import cv from '../assets/current-cv.pdf';

const Hero = ({ scrollToFooter }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-28 h-28 mx-auto rounded-full border-4 border-primary/20 overflow-hidden">
              <img src={pfp} alt="Daniel Olusakin" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Daniel Olusakin
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            Software Developer
          </p>

          {/* Brief Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Final-year Computer Science student at the University of Kent,
            building full-stack applications and exploring new technologies through hackathons.
            Currently interning at Art4site.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" onClick={scrollToFooter}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/D1K03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/daniel-olusakin-b71553224/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:olusakindaniel03@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
