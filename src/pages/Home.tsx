import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { OurProcess } from '@/components/home/OurProcess';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { StatsCounter } from '@/components/home/StatsCounter';
import { Testimonials } from '@/components/home/Testimonials';
import { TechStack } from '@/components/home/TechStack';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <div className="page-enter">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <OurProcess />
      <FeaturedProjects />
      <StatsCounter />
      <Testimonials />
      <TechStack />
      <CTASection />
    </div>
  );
}
