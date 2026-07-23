import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';

export function ServicesOverview() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="section-label">
                <span className="w-8 h-px bg-gold" />
                What We Do
              </p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
                Full-service digital capabilities, <br className="hidden md:block" />
                built around your growth goals.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={1}>
              <p className="text-medium-gray text-lg leading-relaxed">
                From brand identity to custom software, we cover every layer of your digital
                presence — so you can work with one partner instead of coordinating five.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-navy font-semibold mt-5 group hover:text-gold-700 transition-colors"
              >
                Explore all services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  to={`/services/${service.slug}`}
                  className="card p-7 h-full flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-gold/15 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-navy group-hover:text-gold-700 transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed flex-grow">
                    {service.short}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold mt-5 group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
