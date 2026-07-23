import { Reveal, Counter } from '@/components/Reveal';
import { stats } from '@/data/content';

export function StatsCounter() {
  return (
    <section className="section-padding bg-navy-pattern relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
    </section>
  );
}
