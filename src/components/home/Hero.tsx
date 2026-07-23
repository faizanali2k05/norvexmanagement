import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-navy-pattern text-white overflow-hidden min-h-screen flex items-center pt-20">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="section-label !text-white animate-fade-up">
              Digital Transformation Agency
            </p>
            <h1
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] mt-2 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Digital Solutions That{' '}
              <span className="text-gradient-gold">Drive Growth</span>
            </h1>
            <p
              className="text-white/70 text-lg md:text-xl mt-6 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              We help businesses grow through innovative design, technology, automation, and
              strategic marketing building digital experiences that convert and systems that scale.
            </p>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/portfolio" className="btn-outline text-base px-8 py-4">
                <Play className="h-4 w-4" />
                View Our Work
              </Link>
            </div>

            {/* Mini stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10 animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <div>
                <p className="font-display font-bold text-3xl text-gold">30+</p>
                <p className="text-white/60 text-sm mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-gold">98%</p>
                <p className="text-white/60 text-sm mt-1">Client Retention</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-gold">12+</p>
                <p className="text-white/60 text-sm mt-1">Industries Served</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Norvex Management team collaborating on digital strategy"
                className="w-full h-[480px] lg:h-[560px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-2xl shadow-card-hover p-5 max-w-[220px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="h-6 w-6 text-gold-700" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-lg leading-tight">3x</p>
                  <p className="text-medium-gray text-xs leading-tight">Average lead growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 L1440,60 L1440,20 Q720,0 0,20 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
