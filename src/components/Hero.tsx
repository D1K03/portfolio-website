import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pfp from '../assets/images/pfp.jpg';
import cv from '../assets/current-cv.pdf';

const CV_UPDATED = 'May 2026';

interface HeroProps {
  scrollToContact: () => void;
}

function Hero({ scrollToContact }: HeroProps): React.ReactElement {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-[70vh] flex items-center justify-center pt-20 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3">
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-primary/30 overflow-hidden">
              <img
                src={pfp}
                alt="Daniel Olusakin headshot"
                width={80}
                height={80}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              <span aria-hidden="true">🏆</span> 3x Hackathon Winner
            </span>
          </div>

          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-1">
            Daniel Olusakin
          </h1>

          <p className="text-xl md:text-2xl text-primary font-medium mb-2">
            Software Developer
          </p>

          <p className="text-base text-muted-foreground mb-5 max-w-xl mx-auto">
            Final-year Computer Science student at the University of Kent. Full-stack engineer
            shipping AI tooling and winning hackathons. Recently interned at Art4site.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button size="lg" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View CV (last updated ${CV_UPDATED})`}
              >
                <FileText className="mr-2 h-4 w-4" />
                View CV
                <span className="ml-1 px-1.5 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-medium leading-none">
                  {CV_UPDATED}
                </span>
              </a>
            </Button>
          </div>

          <ul className="flex justify-center gap-4 list-none p-0 m-0">
            <li>
              <a
                href="https://github.com/D1K03"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                aria-label="GitHub profile"
              >
                <Github size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/daniel-olusakin-b71553224/"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={22} />
              </a>
            </li>
            <li>
              <a
                href="mailto:olusakindaniel03@gmail.com"
                className="inline-flex p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
