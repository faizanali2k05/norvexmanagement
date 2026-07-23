import { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

const contactCards = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+92 340 5463601',
    href: 'https://wa.me/923405463601',
    accent: 'bg-green-50 text-green-700',
  },
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:norvexmanagement@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      alert("Please fill in your name and project details first.");
      return;
    }
    const text = encodeURIComponent(
      `Hi Norvex Management, my name is ${form.name}.\n\nService: ${form.service}\n\nProject Details:\n${form.message}`
    );
    window.open(`https://wa.me/923405463601?text=${text}`, '_blank');
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
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

      {/* Form + Info */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="section-label">
                  
                  Send a Message
                </p>
                <h2 className="section-heading text-3xl md:text-4xl mt-2 mb-8">
                  Tell us about your project.
                </h2>
              </Reveal>

              {submitted ? (
                <Reveal delay={1}>
                  <div className="bg-white rounded-3xl p-10 text-center shadow-card">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-navy mb-3">Message sent!</h3>
                    <p className="text-medium-gray leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours. For urgent
                      matters, message us directly on WhatsApp.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', company: '', service: '', message: '' });
                      }}
                      className="btn-outline-navy mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={1}>
                  <form onSubmit={handleEmailSubmit} className="bg-white rounded-none p-8 border border-gray-200 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass}
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className={inputClass}
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
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
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={inputClass}
                        placeholder="Tell us about your goals, timeline, and what you're looking to achieve..."
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button type="submit" className="btn-primary flex-1 justify-center py-4 text-xs sm:text-sm whitespace-nowrap">
                        <Mail className="h-4 w-4" />
                        Send via Email
                      </button>
                      <button type="button" onClick={handleWhatsAppSubmit} className="btn-primary flex-1 justify-center py-4 !bg-green-600 !border-green-600 hover:!bg-green-700 text-white text-xs sm:text-sm whitespace-nowrap">
                        <MessageCircle className="h-4 w-4" />
                        Send via WhatsApp
                      </button>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-5">
              <div className="space-y-6 sticky top-28">
                {/* WhatsApp CTA */}
                <Reveal delay={1}>
                  <div className="bg-navy-pattern text-white rounded-3xl p-8">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center mb-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">Prefer WhatsApp?</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      Get a faster response by messaging us directly on WhatsApp. We typically reply
                      within a few hours during business days.
                    </p>
                    <a
                      href="https://wa.me/923405463601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-600 transition-all duration-300 text-sm w-full justify-center"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </Reveal>

                {/* Map placeholder */}
                <Reveal delay={2}>
                  <div className="bg-white rounded-3xl p-8 shadow-card">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-navy" />
                      </div>
                      <h3 className="font-display font-semibold text-navy">Our Location</h3>
                    </div>
                    <p className="text-medium-gray text-sm leading-relaxed mb-4">
                      Texas, United States
                    </p>
                    <div className="rounded-none overflow-hidden bg-gray-100 h-64 border border-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13735166.425232923!2d-106.6358178141443!3d31.116524249156098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
