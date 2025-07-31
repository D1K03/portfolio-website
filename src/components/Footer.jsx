import {React, forwardRef} from 'react'
import { Heart, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/D1K03",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/daniel-olusakin-b71553224/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:olusakindaniel03@gmail.com",
      label: "Email"
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "olusakindaniel03@gmail.com",
      href: "mailto:olusakindaniel03@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+44 7555388309",
      href: "tel:+447555388309"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "London, United Kingdom",
      href: null
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }         

  return (
    <footer ref={ref} className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            {/* Contact Details */}
            <div className="mb-8 justify-center sm:justify-between items-center flex flex-col sm:flex-row gap-4 sm:gap-0">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Back to Top ↑
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © {currentYear} Daniel Olusakin.
              </p>

              {/*Reserves*/}
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
});

export default Footer

