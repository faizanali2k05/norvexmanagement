import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <div className="page-enter">
      <PageHero
        label="Services"
        title={service.title}
        description={service.short}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h2 className="section-heading text-3xl md:text-4xl mt-2">Overview</h2>
                <p className="text-medium-gray text-lg leading-relaxed mt-6">{service.description}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={1}>
                <div className="bg-ivory rounded-3xl p-8 sticky top-28">
                  <h3 className="font-display font-semibold text-navy text-lg mb-4">
                    Ready to get started?
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed mb-6">
                    Tell us about your goals and we&apos;ll map out how this service can drive your growth.
                  </p>
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/services" className="block text-center text-navy text-sm font-semibold mt-4 hover:text-gold-700 transition-colors">
                    View all services
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <Reveal>
            <p className="section-label">
              
              Benefits
            </p>
            <h2 className="section-heading text-3xl md:text-4xl mt-2 mb-12">
              What you gain from this service.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.benefits.map((benefit, i) => (
              <Reveal key={i} delay={((i % 2) + 1) as 1 | 2}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-gold-700" />
                  </div>
                  <p className="text-charcoal text-base leading-relaxed pt-2">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal>
            <p className="section-label">
              
              Process
            </p>
            <h2 className="section-heading text-3xl md:text-4xl mt-2 mb-12">
              How we deliver this service.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="relative bg-ivory rounded-2xl p-6 h-full">
                  <span className="font-display font-bold text-4xl text-gold/30 block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-semibold text-navy text-base mb-2">{step.step}</h3>
                  <p className="text-medium-gray text-sm leading-relaxed">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <p className="section-label">
                
                Deliverables
              </p>
              <h2 className="section-heading text-3xl md:text-4xl mt-2 mb-6">
                What you receive at the end.
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed">
                Clear, tangible outputs no vague promises. You know exactly what you are getting
                before we start.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <ul className="space-y-4">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card">
                    <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-navy" />
                    </div>
                    <span className="text-charcoal text-base">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="section-label">
                  
                  FAQ
                </p>
                <h2 className="section-heading text-3xl md:text-4xl mt-2">
                  Questions about <br className="hidden lg:block" />
                  {service.title}.
                </h2>
                <Link to="/faq" className="inline-flex items-center gap-2 text-navy font-semibold mt-6 hover:text-gold-700 transition-colors">
                  All FAQs
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={1}>
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        className={`bg-ivory rounded-2xl border transition-all duration-300 ${
                          isOpen ? 'border-gold/40 shadow-card' : 'border-light-gray/60'
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="w-full flex items-center justify-between gap-4 p-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-display font-semibold text-navy text-base">{faq.q}</span>
                          <ChevronDown className={`h-5 w-5 text-gold-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                          <p className="px-5 pb-5 text-medium-gray text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next service */}
      <section className="py-16 bg-navy-pattern text-white">
        <div className="container-custom">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/50 text-sm uppercase tracking-widest mb-2">Next Service</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl">{nextService.title}</h3>
              </div>
              <Link to={`/services/${nextService.slug}`} className="btn-primary">
                Continue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
