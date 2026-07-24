import { Reveal } from '@/components/Reveal';

const steps = [
  { number: '01', title: 'Discovery', description: 'We immerse ourselves in your business, customers, and goals to understand the real problem before proposing a solution.' },
  { number: '02', title: 'Strategy', description: 'We define the roadmap what to build, in what order, and why anchored to measurable business outcomes.' },
  { number: '03', title: 'Design', description: 'We design the experience and interface, validating with real users and stakeholders before a line of code is written.' },
  { number: '04', title: 'Development', description: 'We build iteratively with weekly checkpoints, so you see progress and can course-correct early.' },
  { number: '05', title: 'Launch', description: 'We deploy, test, and optimize handling everything from performance to analytics setup.' },
  { number: '06', title: 'Growth', description: 'We monitor, iterate, and scale turning the launch into a sustained growth engine.' },
];

export function OurProcess() {
  return (
    <section className="section-padding bg-navy-pattern text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <p className="section-label !text-white justify-center">
              How We Work
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-2">
              A process built for outcomes, <br className="hidden md:block" />
              not just deliverables.
            </h2>
            <p className="text-white/70 text-lg mt-5 leading-relaxed">
              Six phases, each with clear deliverables and review checkpoints. You always know
              where your project stands and what comes next.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-500 h-full overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(235,167,0,0.15)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-5xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
