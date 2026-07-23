import { Reveal } from '@/components/Reveal';

const stack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Figma', category: 'Design' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Google Ads', category: 'Marketing' },
  { name: 'Meta Ads', category: 'Marketing' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Klaviyo', category: 'Email' },
  { name: 'Vercel', category: 'Hosting' },
];

export function TechStack() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <p className="section-label justify-center">
              
              Our Toolbox
              
            </p>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
              Modern technology, chosen for results.
            </h2>
            <p className="text-medium-gray text-lg mt-5 leading-relaxed">
              We select tools based on your needs not hype. Here is the stack we reach for most often.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 lg:gap-4">
            {stack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center justify-center sm:justify-start gap-2 bg-ivory border border-light-gray/60 px-4 py-3 hover:border-gold hover:shadow-card transition-all duration-300"
              >
                <span className="font-display font-semibold text-navy text-xs sm:text-sm">{tech.name}</span>
                <span className="text-medium-gray text-[10px] sm:text-xs hidden min-[380px]:inline">· {tech.category}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
