import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { caseStudies } from '@/data/caseStudies';

const sectionLabels: Record<string, string> = {
  problem: 'The Problem',
  research: 'Research',
  strategy: 'Strategy',
  execution: 'Execution',
  outcome: 'The Outcome',
  results: 'Business Results',
};

const sectionIcons: Record<string, string> = {
  problem: 'bg-red-100 text-red-700',
  research: 'bg-blue-100 text-blue-700',
  strategy: 'bg-gold/15 text-gold-700',
  execution: 'bg-navy/10 text-navy',
  outcome: 'bg-green-100 text-green-700',
  results: 'bg-gold text-navy',
};

export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const sections = Object.entries(study.sections);

  return (
    <div className="page-enter">
      <PageHero
        label="Case Study"
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Case Studies', path: '/case-studies' },
          { label: study.client },
        ]}
      />

      {/* Metrics bar */}
      <section className="bg-navy-pattern text-white py-12">
        <div className="container-custom">
          <Reveal>
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {study.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-display font-bold text-3xl md:text-4xl text-gold">{m.value}</p>
                  <p className="text-white/60 text-xs md:text-sm mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-card-hover">
              <img src={study.image} alt={study.title} className="w-full h-80 md:h-96 object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <Reveal>
                  <div className="bg-ivory rounded-2xl p-6">
                    <p className="text-xs text-medium-gray uppercase tracking-widest mb-1">Client</p>
                    <p className="font-display font-semibold text-navy text-lg">{study.client}</p>
                    <p className="text-medium-gray text-sm mt-1">{study.industry}</p>
                  </div>
                </Reveal>
                <Reveal delay={1}>
                  <div className="bg-navy-pattern text-white rounded-2xl p-6">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Contents</p>
                    <ul className="space-y-3">
                      {sections.map(([key, _], i) => (
                        <li key={key}>
                          <a
                            href={`#${key}`}
                            className="text-white/70 text-sm hover:text-gold transition-colors flex items-center gap-2"
                          >
                            <span className="text-gold/50 text-xs">{String(i + 1).padStart(2, '0')}</span>
                            {sectionLabels[key]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 space-y-12">
              {sections.map(([key, content], i) => (
                <Reveal key={key} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article id={key} className="scroll-mt-28">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm ${sectionIcons[key]}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-display font-bold text-2xl text-navy">{sectionLabels[key]}</h2>
                    </div>
                    <p className="text-medium-gray text-lg leading-relaxed">{content}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next case study */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl p-8 shadow-card">
              <div>
                <p className="text-medium-gray text-sm uppercase tracking-widest mb-2">Next Case Study</p>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy">{nextStudy.title}</h3>
              </div>
              <Link to={`/case-studies/${nextStudy.slug}`} className="btn-primary shrink-0">
                Read Next
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

export default function CaseStudies() {
  return (
    <div className="page-enter">
      <PageHero
        label="Case Studies"
        title="Real engagements. Real outcomes. Real numbers."
        description="We don't just show pretty pictures we break down the problem, the thinking, and the business results that followed."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Case Studies' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={((i % 2) + 1) as 1 | 2}>
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-ivory rounded-3xl p-6 lg:p-8 hover:shadow-card transition-shadow duration-300">
                  <div className={`order-2 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="inline-block bg-gold/15 text-gold-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-3">
                      {study.title}
                    </h2>
                    <p className="text-medium-gray leading-relaxed mb-6">{study.summary}</p>
                    <div className="flex flex-wrap gap-6 mb-6">
                      {study.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-display font-bold text-2xl text-gold">{m.value}</p>
                          <p className="text-medium-gray text-xs">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-700 transition-colors group"
                    >
                      Read full case study
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={`order-1 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Link to={`/case-studies/${study.slug}`}>
                      <div className="rounded-2xl overflow-hidden shadow-card group">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
