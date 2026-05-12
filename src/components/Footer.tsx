import { forwardRef, useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`)
    .join('&');
}

const Footer = forwardRef<HTMLElement>((_props, ref) => {
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setStatus('submitting');
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { 'form-name': 'contact' };
    formData.forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value : '';
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload),
      });
      if (!response.ok) throw new Error(`Submit failed: ${response.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer ref={ref} id="contact" className="bg-card border-t py-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-muted-foreground">
              Open to graduate roles, internships, and collaboration on AI / full-stack projects.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4 mb-10"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Button type="submit" disabled={status === 'submitting'}>
                <Send className="mr-2 h-4 w-4" />
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </Button>
              <span
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  status === 'success'
                    ? 'text-primary'
                    : status === 'error'
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                }`}
              >
                {status === 'success' && 'Thanks — I’ll get back to you soon.'}
                {status === 'error' && 'Something went wrong. Email me directly instead.'}
              </span>
            </div>
          </form>

          <address className="not-italic text-center">
            <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-3">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              London, United Kingdom
            </p>
            <ul className="flex justify-center gap-4 mb-6 list-none p-0 m-0">
              <li>
                <a
                  href="https://github.com/D1K03"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
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
                  <Linkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:olusakindaniel03@gmail.com"
                  className="inline-flex p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </li>
            </ul>
          </address>

          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground">© {currentYear} Daniel Olusakin</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
