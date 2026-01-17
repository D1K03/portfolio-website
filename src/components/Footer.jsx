import { React, forwardRef } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Contact Header */}
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Open to Opportunities
          </p>

          {/* Email */}
          <a
            href="mailto:olusakindaniel03@gmail.com"
            className="inline-block text-lg text-primary hover:underline mb-6"
          >
            olusakindaniel03@gmail.com
          </a>

          {/* Location */}
          <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-8">
            <MapPin className="h-4 w-4" />
            London, United Kingdom
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/D1K03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/daniel-olusakin-b71553224/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:olusakindaniel03@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              {currentYear} Daniel Olusakin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
