import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Lightbulb, ShieldCheck, TrendingUp, Handshake, Linkedin } from 'lucide-react';
import { OurProcess } from '@/components/home/OurProcess';
import { StatsCounter } from '@/components/home/StatsCounter';

const values = [
  { icon: Target, title: 'Outcome-Obsessed', description: 'We measure success by your business results, not our deliverables. Every decision traces back to a goal that matters.' },
  { icon: Lightbulb, title: 'Curiosity-Driven', description: 'We ask better questions before proposing solutions. Understanding your context is what makes our work effective.' },
  { icon: ShieldCheck, title: 'Built to Last', description: 'We engineer for the long term. The systems we build should still be serving you years after launch.' },
  { icon: Handshake, title: 'Partnership First', description: 'We invest in relationships, not transactions. The best work happens inside long-term trust.' },
];

const team = [
  { 
    name: 'Muhammad Sohaib', 
    role: 'Founder & CEO', 
    avatar: 'https://instagram.fmux1-1.fna.fbcdn.net/v/t51.82787-19/711925659_18096389359946753_2510541638306611633_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=instagram.fmux1-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2gFnWwAanj0JLxkPXUiVei-PhCZA-M5mL8I6A5IgmsAQcSUBGp8jEhPG_0Lo9h_udVs&_nc_ohc=l_HcAoj8pEMQ7kNvwEV_Az8&_nc_gid=iH7f8-GaUp5Me8fQFpiTBA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQBfJAwAXBfXhqILIl2i1cJaGfJoLjloCYyAvpXfWP5Fxg&oe=6A683431&_nc_sid=7a9f4b',
    linkedin: '#'
  },
  { 
    name: 'Ahmad Raza', 
    role: 'Co-founder', 
    avatar: 'https://wordsofahmad.netlify.app/assets/ahmad-DvPJdabi.jpg',
    linkedin: 'https://www.linkedin.com/in/ahmadraza2k09',
    position: 'object-top'
  },
];

export default function About() {
  return (
    <div className="page-enter">
      <PageHero
        label="About Us"
        title="We build the digital infrastructure that helps businesses grow."
        description="Norvex Management is a digital transformation agency founded on a simple belief: technology should serve strategy, not the other way around."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="Norvex Management office"
                    className="w-full h-[520px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-gold rounded-2xl p-6 shadow-gold hidden sm:block">
                  <p className="font-display font-bold text-3xl text-navy">2019</p>
                  <p className="text-navy/70 text-xs mt-1">Founded</p>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="section-label">
                  
                  Our Story
                </p>
                <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
                  From a small studio to an international digital partner.
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <div className="space-y-4 text-medium-gray text-lg leading-relaxed mt-6">
                  <p>
                    Norvex Management began with a frustration shared by every founder on our team:
                    businesses were being sold flashy websites and apps that looked impressive but
                    did nothing for growth. The work was beautiful. The results were absent.
                  </p>
                  <p>
                    We set out to build something different an agency where strategy leads and
                    execution follows. Where every design decision, line of code, and ad campaign
                    ties back to a measurable business outcome. Where clients are treated as
                    long-term partners rather than one-off projects.
                  </p>
                  <p>
                    Today we work with clients across a dozen industries, from early-stage startups
                    to established enterprises. The tools have evolved, but the principle has not:
                    digital solutions should drive growth.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-card h-full">
                <div className="mb-6">
                  <Target className="h-10 w-10 text-gold" />
                </div>
                <h2 className="font-display font-bold text-2xl text-navy mb-4">Our Mission</h2>
                <p className="text-medium-gray text-lg leading-relaxed">
                  Helping businesses grow through innovative digital solutions, creative design,
                  technology, automation, and strategic marketing.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="bg-navy-pattern text-white rounded-3xl p-8 lg:p-10 h-full">
                <div className="mb-6">
                  <Eye className="h-10 w-10 text-gold" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white mb-4">Our Vision</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  To be the digital partner that businesses trust not just to deliver work, but to
                  think alongside them shaping the strategy that makes the work worth doing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="section-label justify-center">
                
                What We Stand For
                
              </p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
                Core values that shape every engagement.
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="card p-7 h-full text-center">
                    <div className="mx-auto mb-5 flex justify-center">
                      <Icon className="h-10 w-10 text-gold" />
                    </div>
                    <h3 className="font-display font-semibold text-navy text-lg mb-2">{v.title}</h3>
                    <p className="text-medium-gray text-sm leading-relaxed">{v.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us (compact) */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="section-label">
                
                Why Choose Us
              </p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
                We earn retention by delivering results.
              </h2>
              <div className="space-y-4 mt-8">
                {[
                  'Strategy-led approach we understand before we build',
                  'Full-service coverage design, dev, marketing, systems',
                  'Transparent communication with weekly checkpoints',
                  'You own everything source files, IP, and assets',
                  'Ongoing support after launch, not just a handoff',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="h-3.5 w-3.5 text-gold-700" />
                    </div>
                    <p className="text-charcoal text-base leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team collaboration" className="rounded-2xl h-64 w-full object-cover" loading="lazy" />
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Strategy meeting" className="rounded-2xl h-64 w-full object-cover mt-8" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <OurProcess />
      <StatsCounter />

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="section-label justify-center">
                
                The People
                
              </p>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mt-2">
                A senior team that stays hands-on.
              </h2>
              <p className="text-medium-gray text-lg mt-5">
                You work directly with the people doing the work not account managers relaying messages.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="group border border-gray-200 hover:border-gold transition-colors duration-300 rounded-2xl p-6 shadow-card h-full flex flex-col items-center justify-center bg-white text-center">
                  <h3 className="font-display font-semibold text-navy text-lg">{member.name}</h3>
                  <p className="text-medium-gray text-sm mt-1 mb-4">{member.role}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy/5 text-navy hover:bg-navy hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
