import React, { useState, forwardRef } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      console.log('Message submitted successfully!');
      alert('Your message has been sent successfully!'); 
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section ref={ref} id="contact" className="py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having 
              a conversation about technology. Feel free to reach out!
            </p>
          </div>

        {/* Contact Form */}
        <div className="bg-card rounded-lg border p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify
              action="/success" 
            >
              {/* Netlify Honeypot */}
              <p className="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} /></label>
              </p>

            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                />
                </div>
            </div>
            
            <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
                </label>
                <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What's this about?"
                />
            </div>
            
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell me about your project or just say hello!"
                />
            </div>
            
            <Button type="submit" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
            </Button>
            </form>
        </div>
        </div>
      </div>
    </section>
  )
});

export default Contact; 