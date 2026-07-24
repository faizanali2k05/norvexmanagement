import { useState } from 'react';
import { Mail, Instagram, Linkedin, MapPin, Send } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'norvexmanagement@gmail.com',
    href: 'mailto:norvexmanagement@gmail.com',
    accent: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@norvexmanagement',
    href: 'https://www.instagram.com/norvexmanagement/',
    accent: 'bg-pink-50 text-pink-700',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with us',
    href: '#',
    accent: 'bg-navy/10 text-navy',
  },
];

export default function Contact() {
  const [queryForm, setQueryForm] = useState({ name: '', email: '', query: '' });
  const [workForm, setWorkForm] = useState({ name: '', email: '', service: '' });

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Query from ${queryForm.name}`);
    const body = encodeURIComponent(
      `Name: ${queryForm.name}\nEmail: ${queryForm.email}\n\nQuery:\n${queryForm.query}`
    );
    window.location.href = `mailto:norvexmanagement@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWorkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Work Inquiry from ${workForm.name}`);
    const body = encodeURIComponent(
      `Name: ${workForm.name}\nEmail: ${workForm.email}\nSpecialty: ${workForm.service}\n\nI am interested in working with you.`
    );
    window.location.href = `mailto:norvexmanagement@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full bg-ivory border border-light-gray/60 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-charcoal';

  return (
    <div className="page-enter">
      <PageHero
        label="Contact"
        title="Let's talk about your growth goals."
        description="Tell us where you want to go. We'll help you figure out the digital path to get there no pressure, no sales pitch."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      {/* Contact cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="card p-6 h-full flex flex-col items-start group"
                  >
                    <div className="mb-4">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <p className="text-medium-gray text-xs uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="font-display font-semibold text-navy text-sm group-hover:text-gold-700 transition-colors break-all">
                      {card.value}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Ask a Query Form */}
            <div>
              <Reveal>
                <p className="section-label">Ask a Question</p>
                <h2 className="section-heading text-3xl md:text-4xl mt-2 mb-8">
                  Have a Query?
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <form onSubmit={handleQuerySubmit} className="bg-white rounded-none p-8 border border-gray-200 space-y-5 h-full">
                  <div>
                    <label htmlFor="q-name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      id="q-name"
                      type="text"
                      required
                      value={queryForm.name}
                      onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="q-email" className="block text-sm font-semibold text-navy mb-2">
                      Email *
                    </label>
                    <input
                      id="q-email"
                      type="email"
                      required
                      value={queryForm.email}
                      onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="q-query" className="block text-sm font-semibold text-navy mb-2">
                      Your Query *
                    </label>
                    <textarea
                      id="q-query"
                      required
                      rows={5}
                      value={queryForm.query}
                      onChange={(e) => setQueryForm({ ...queryForm, query: e.target.value })}
                      className={inputClass}
                      placeholder="What would you like to ask?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    <Send className="h-4 w-4" />
                    Submit Query
                  </button>
                </form>
              </Reveal>
            </div>

            {/* Work With Us Form */}
            <div>
              <Reveal>
                <p className="section-label">Work With Us</p>
                <h2 className="section-heading text-3xl md:text-4xl mt-2 mb-8">
                  Start a Project.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <form onSubmit={handleWorkSubmit} className="bg-white rounded-none p-8 border border-gray-200 space-y-5 h-full">
                  <div>
                    <label htmlFor="w-name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      id="w-name"
                      type="text"
                      required
                      value={workForm.name}
                      onChange={(e) => setWorkForm({ ...workForm, name: e.target.value })}
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="w-email" className="block text-sm font-semibold text-navy mb-2">
                      Email *
                    </label>
                    <input
                      id="w-email"
                      type="email"
                      required
                      value={workForm.email}
                      onChange={(e) => setWorkForm({ ...workForm, email: e.target.value })}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="w-service" className="block text-sm font-semibold text-navy mb-2">
                      Speciality (Service) *
                    </label>
                    <select
                      id="w-service"
                      required
                      value={workForm.service}
                      onChange={(e) => setWorkForm({ ...workForm, service: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option>Graphic Design</option>
                      <option>UI/UX Design</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Social Media Management</option>
                      <option>Ads Management</option>
                      <option>Business Profile Management</option>
                      <option>Customized Management Systems</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    <Mail className="h-4 w-4" />
                    Lets Build Your Business
                  </button>
                </form>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
