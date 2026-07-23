import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { testimonials } from '@/data/content';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section
      className="section-padding bg-ivory"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <p className="section-label justify-center">
              
              Client Voices
              
            </p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
              Partnerships built on trust and results.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 lg:p-16 relative">
              <Quote className="absolute top-8 right-8 h-16 w-16 text-gold/10" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[0, 1, 2].map((s) => (
                    <span key={s} className="w-5 h-5 rounded-full bg-gold/20 inline-flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    </span>
                  ))}
                </div>
                <blockquote className="text-charcoal text-xl md:text-2xl leading-relaxed font-medium">
                  "{testimonials[active].quote}"
                </blockquote>
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display font-semibold text-navy">{testimonials[active].name}</p>
                    <p className="text-medium-gray text-sm">
                      {testimonials[active].role}, {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border-2 border-navy/15 text-navy flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-gold' : 'w-2 bg-navy/20 hover:bg-navy/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border-2 border-navy/15 text-navy flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
