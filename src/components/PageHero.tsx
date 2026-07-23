import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function PageHero({ label, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-navy-pattern text-white pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="container-custom">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-4 w-4" />}
                {b.path ? (
                  <Link to={b.path} className="hover:text-gold transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {label && <p className="section-label !text-white">{label}</p>}
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
