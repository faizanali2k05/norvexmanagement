import { Check, BarChart3, Users, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: BarChart3,
    title: 'Strategy before execution',
    description:
      'Every engagement starts with understanding your business. We design and build toward measurable outcomes — not deliverables that look good but do nothing.',
  },
  {
    icon: Users,
    title: 'One partner, full coverage',
    description:
      'Design, development, marketing, and systems under one roof. You stop coordinating multiple vendors and start working with a team that sees the whole picture.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to last',
    description:
      'We engineer for performance, security, and maintainability from day one. The work we deliver stays a growth asset for years, not a liability you outgrow.',
  },
  {
    icon: Zap,
    title: 'Speed without shortcuts',
    description:
      'Iterative delivery with weekly checkpoints means you see progress constantly and can course-correct early. No black-box projects that surface at the end.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image collage */}
          <Reveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Norvex Management strategy session"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-navy text-white rounded-2xl p-6 shadow-card-hover max-w-[260px] hidden sm:block">
                <p className="font-display font-bold text-3xl text-gold">98%</p>
                <p className="text-white/70 text-sm mt-1">
                  of our clients continue working with us after their first project.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <p className="section-label">
                <span className="w-8 h-px bg-gold" />
                Why Norvex
              </p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
                A partner that thinks like <br className="hidden lg:block" />
                an extension of your team.
              </h2>
              <p className="text-medium-gray text-lg mt-5 leading-relaxed">
                We are not a delivery-only shop. We invest in understanding your business, your
                customers, and your goals — then design and build the digital infrastructure that
                moves them forward.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={((i % 2) + 1) as 1 | 2}>
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-gold-700" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-navy text-base mb-1.5">
                          {r.title}
                        </h3>
                        <p className="text-medium-gray text-sm leading-relaxed">{r.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={3}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold mt-10 group hover:text-gold-700 transition-colors"
              >
                More about our approach
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
