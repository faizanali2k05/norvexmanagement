import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { OurProcess } from '@/components/home/OurProcess';

export default function Services() {
  return (
    <div className="page-enter">
      <PageHero
        label="Our Services"
        title="Digital capabilities that cover every layer of your growth."
        description="Eight specialized services, designed to work together or standalone each delivered with the same strategy-first approach."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      />

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="card p-8 h-full flex flex-col group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 group-hover:bg-gold/15 flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-navy group-hover:text-gold-700 transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-semibold text-navy text-xl mb-3 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-medium-gray text-sm leading-relaxed flex-grow">
                      {service.short}
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-navy text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <OurProcess />
      <CTASection
        title="Not sure which service you need?"
        description="Tell us about your business and goals. We'll help you identify the right combination of services to drive the growth you're aiming for."
      />
    </div>
  );
}
