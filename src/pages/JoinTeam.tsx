import { useState } from 'react';
import { Send, Users, Check } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';

export default function JoinTeam() {
  const [form, setForm] = useState({ name: '', email: '', service: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('job_applications').insert({
      name: form.name,
      email: form.email,
      service: form.service,
    });

    if (error) {
      console.error('Error saving job application:', error);
      setStatus('error');
      return;
    }

    setStatus('sent');
    setForm({ name: '', email: '', service: '' });
  };

  const inputClass =
    'w-full bg-ivory border border-light-gray/60 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-charcoal';

  return (
    <div className="page-enter">
      <PageHero
        label="Careers"
        title="Join Our Team"
        description="We are always looking for talented individuals to join us in building digital infrastructure that helps businesses grow."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Join Our Team' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <Reveal>
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-gold fill-gold" />
              </div>
              <h2 className="section-heading text-3xl md:text-4xl">
                Ready to make an impact?
              </h2>
              <p className="text-medium-gray text-lg mt-4">
                Fill out the form below and we'll be in touch if your profile matches our current needs.
              </p>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card space-y-6">
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
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                  What service do you want to work on? *
                </label>
                <select
                  id="service"
                  required
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

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center py-4 mt-4 disabled:opacity-60"
              >
                {status === 'sent' ? (
                  <>
                    <Check className="h-5 w-5" />
                    Application Sent
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
