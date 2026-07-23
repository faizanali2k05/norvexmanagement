import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { faqItems } from '@/data/content';

export default function FAQ() {
  const categories = ['All', ...Array.from(new Set(faqItems.map((f) => f.category)))];
  const [active, setActive] = useState('All');
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const filtered = faqItems.filter((f) => {
    const matchCat = active === 'All' || f.category === active;
    const matchQuery = !query || f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="page-enter">
      <PageHero
        label="FAQ"
        title="Frequently asked questions, answered honestly."
        description="Everything you might want to know before reaching out — from pricing and process to ownership and support."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <Reveal>
              <div className="relative mb-8">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full bg-ivory border border-light-gray/60 rounded-2xl py-4 pl-12 pr-4 text-base focus:outline-none focus:border-gold transition-colors"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-medium-gray" />
              </div>
            </Reveal>

            {/* Category filters */}
            <Reveal delay={1}>
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      active === cat ? 'bg-navy text-white shadow-card' : 'bg-ivory text-navy hover:bg-navy/5 border border-light-gray/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Accordion */}
            <Reveal delay={1}>
              <div className="space-y-3">
                {filtered.map((faq, i) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={i}
                      className={`bg-white rounded-2xl border transition-all duration-300 ${
                        isOpen ? 'border-gold/40 shadow-card' : 'border-light-gray/60'
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold text-gold-700 bg-gold/10 px-2.5 py-1 rounded-full shrink-0">
                            {faq.category}
                          </span>
                          <span className="font-display font-semibold text-navy text-base">{faq.question}</span>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gold-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                        <p className="px-6 pb-6 text-medium-gray leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-medium-gray text-lg">No questions match your search.</p>
              </div>
            )}

            <Reveal delay={2}>
              <div className="bg-ivory rounded-3xl p-8 text-center mt-12">
                <h3 className="font-display font-semibold text-navy text-xl mb-2">Still have questions?</h3>
                <p className="text-medium-gray mb-6">We&apos;re happy to answer anything on a discovery call.</p>
                <a href="/contact" className="btn-primary">Get in Touch</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
