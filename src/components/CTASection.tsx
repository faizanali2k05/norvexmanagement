import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = 'Let\'s Build Your Digital Advantage',
  description = 'Tell us where you want to grow. We\'ll map the strategy, design, and technology to get you there and deliver it end-to-end.',
}: CTASectionProps) {
  return (
    <section className="section-padding bg-navy-pattern text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label !text-white justify-center">Get Started</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            {title}
          </h2>
          <p className="text-white/70 text-lg mt-6 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://linkin.bio/norvexmanagement/" target="_blank" rel="noopener noreferrer" className="btn-outline">
              View Our Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />
    </section>
  );
}
