import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function FeaturedProjects() {
  const featured = [
    {
      id: 'sdg-explorer',
      title: 'SDG Explorer',
      category: 'Website',
      industry: 'Education / Social Good',
      description: 'An interactive explorer for Sustainable Development Goals.',
      results: 'View Project',
      image: 'https://i.pinimg.com/736x/96/5e/60/965e60741e9f647a67c4303403663933.jpg',
      link: 'https://sdgexplorer.vercel.app/'
    },
    {
      id: 'campusgate',
      title: 'Management System',
      category: 'Web App',
      industry: 'Education Management',
      description: 'A comprehensive campus management and gate passing system.',
      results: 'View Project',
      image: 'https://i.pinimg.com/736x/f5/b9/dd/f5b9dd9d5fc732481ea925a85127cf94.jpg',
      link: 'https://trycampusgate.vercel.app/'
    }
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <p className="section-label">Featured Work</p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2 max-w-xl">
              Work that delivered real business results.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <a
              href="https://linkin.bio/norvexmanagement/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy shrink-0"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={((i % 2) + 1) as 1 | 2}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative rounded-2xl overflow-hidden shadow-card mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <p className="text-medium-gray text-sm leading-relaxed">{item.description}</p>
                <p className="text-navy text-sm font-semibold mt-3">{item.results}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
