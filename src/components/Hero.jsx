import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pfp from '../assets/images/pfp.jpg';
import cv from '../assets/current-cv.pdf';

const Hero = ({scrollToFooter}) => {     

  return (  
    <section id="home" className="min-h-screen flex items-center justify-center pt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-primary-foreground overflow-hidden">
              <img src={pfp} alt="PFP"/>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Daniel Olusakin</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Computer Science Student & Aspiring Software Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Third-Year CS Student @ University of Kent with a passion for full-stack programming
            and a love for attending spontaneous tech events and hackathons, where I can explore new technologies
            and thrive on creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToFooter} className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Open CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/D1K03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/daniel-olusakin-b71553224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:olusakindaniel03@gmail.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

