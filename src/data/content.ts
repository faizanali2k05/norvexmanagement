export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'James Whitfield',
    role: 'Managing Director',
    company: 'Vertex Consulting',
    quote:
      'Norvex didn\'t just rebuild our website — they rethought how we attract and convert clients. We tripled our qualified leads within four months. The strategic thinking was as valuable as the execution.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'PulseFit',
    quote:
      'From zero to 50,000 downloads in a single quarter. Norvex handled everything — product, design, launch strategy — and the results spoke for themselves. They felt like a co-founder, not a vendor.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Marcus Holloway',
    role: 'Operations Director',
    company: 'Strata Manufacturing',
    quote:
      'The management system Norvex built changed how we operate. Order processing is 60% faster and our data errors are almost gone. They understood our workflows better than we did.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    category: 'Services',
    question: 'What services does Norvex Management offer?',
    answer:
      'We offer eight core services: graphic design, UI/UX design, web development, app development, social media management, ads management, business profile management, and customized management systems. Most clients engage us for a combination of services tailored to their growth goals.',
  },
  {
    category: 'Services',
    question: 'Do you work with specific industries?',
    answer:
      'No. Our process is industry-agnostic. We have delivered work across financial services, healthcare, manufacturing, e-commerce, hospitality, and B2B consulting. The strategy-first approach means we adapt to your context rather than forcing a template.',
  },
  {
    category: 'Pricing',
    question: 'How do you price your projects?',
    answer:
      'Most engagements are scoped as fixed-price projects with clear deliverables and milestones. For ongoing work like social media or ads management, we use monthly retainers. After an initial consultation, we provide a detailed proposal with transparent pricing.',
  },
  {
    category: 'Pricing',
    question: 'What is the minimum project size?',
    answer:
      'Project minimums vary by scope, but most engagements start at $3,000. For monthly services, minimums typically begin at $1,000/month. We are transparent about this during the discovery call.',
  },
  {
    category: 'Process',
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. A brand identity project takes 3–4 weeks, a website 6–10 weeks, a mobile app 10–16 weeks, and a custom management system 12–20 weeks. We provide a detailed timeline in every proposal.',
  },
  {
    category: 'Process',
    question: 'What is your working process?',
    answer:
      'Every project follows our six-step process: Discovery, Strategy, Design, Development, Launch, and Growth. Each phase has clear deliverables and review checkpoints so you are never left guessing where things stand.',
  },
  {
    category: 'Process',
    question: 'Will I own the work after the project ends?',
    answer:
      'Yes. You own all final deliverables, source files, and intellectual property upon final payment. We hand over everything you need and never hold your assets hostage.',
  },
  {
    category: 'Support',
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. We offer monthly maintenance and support plans for websites, apps, and custom systems. These include security updates, performance monitoring, and a set number of development hours each month.',
  },
  {
    category: 'Support',
    question: 'Can you work with my in-house team?',
    answer:
      'Absolutely. Many of our clients have internal teams. We can integrate as an embedded partner, handle specific workstreams, or augment your team\'s capacity. We adapt to how you already work.',
  },
  {
    category: 'Getting Started',
    question: 'How do we get started?',
    answer:
      'Start with a discovery call. Use the Get a Quote button or contact us directly — tell us about your business and goals, and we will schedule a conversation to explore whether we are a good fit.',
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 12, suffix: '+', label: 'Industries Served' },
];
