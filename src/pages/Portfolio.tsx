import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';
import { X, Cpu, TrendingUp, Building2 } from 'lucide-react';

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<typeof portfolioItems[0] | null>(null);

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="page-enter">
      <PageHero
        label="Portfolio"
        title="Selected work across industries and disciplines."
        description="A look at projects we've delivered — each chosen because it solved a real business problem, not just because it looked good."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Portfolio' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    active === cat
                      ? 'bg-navy text-white shadow-card'
                      : 'bg-ivory text-navy hover:bg-navy/5 border border-light-gray/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <button
                  onClick={() => setSelected(item)}
                  className="group block text-left w-full"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-card mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white font-semibold text-sm">View details →</span>
                    </div>
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gold-700 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    {item.industry}
                  </p>
                  <h3 className="font-display font-semibold text-navy text-xl mb-2 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-medium-gray text-sm leading-relaxed line-clamp-2">{item.description}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Whether it's a brand refresh, a new app, or a full digital transformation — we'd love to hear about it."
      />

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.image} alt={selected.title} className="w-full h-64 object-cover rounded-t-3xl" />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-navy" />
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block bg-gold/15 text-gold-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                {selected.category}
              </span>
              <h2 className="font-display font-bold text-2xl text-navy mb-3">{selected.title}</h2>
              <p className="text-medium-gray leading-relaxed mb-6">{selected.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-ivory rounded-xl p-4">
                  <Building2 className="h-5 w-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-medium-gray uppercase tracking-wider">Industry</p>
                    <p className="text-navy font-semibold text-sm">{selected.industry}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-ivory rounded-xl p-4">
                  <TrendingUp className="h-5 w-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-medium-gray uppercase tracking-wider">Results</p>
                    <p className="text-navy font-semibold text-sm">{selected.results}</p>
                  </div>
                </div>
              </div>

              <div className="bg-ivory rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="h-5 w-5 text-gold-700" />
                  <p className="text-xs text-medium-gray uppercase tracking-wider">Technologies</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="bg-white border border-light-gray/60 rounded-lg px-3 py-1.5 text-sm text-navy font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
