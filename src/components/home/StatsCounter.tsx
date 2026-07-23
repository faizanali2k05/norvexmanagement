import { Reveal, Counter } from '@/components/Reveal';
import { stats } from '@/data/content';

export function StatsCounter() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-navy-pattern rounded-3xl px-8 py-16 lg:px-16 lg:py-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/8 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="text-center">
                  <p className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gold">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/70 text-sm md:text-base mt-3">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
