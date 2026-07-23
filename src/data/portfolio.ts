export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  industry: string;
  description: string;
  technologies: string[];
  results: string;
  image: string;
}

export const portfolioCategories = [
  'All',
  'Graphic Design',
  'UI/UX',
  'Websites',
  'Mobile Apps',
  'Branding',
  'Marketing',
  'Management Systems',
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Aurora FinTech Dashboard',
    category: 'UI/UX',
    industry: 'Financial Services',
    description: 'A complete redesign of a fintech client dashboard, transforming complex financial data into an intuitive, actionable interface.',
    technologies: ['Figma', 'React', 'Design System'],
    results: '42% reduction in support tickets',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Vertex Corporate Website',
    category: 'Websites',
    industry: 'B2B Consulting',
    description: 'A high-performance corporate website built to position a consulting firm as an industry leader and capture qualified leads.',
    technologies: ['Next.js', 'WordPress', 'TailwindCSS'],
    results: '3x increase in qualified leads',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'Lumen Brand Identity',
    category: 'Branding',
    industry: 'SaaS Startup',
    description: 'A complete brand identity system for a SaaS startup, from logo and color palette to tone of voice and application guidelines.',
    technologies: ['Illustrator', 'Photoshop', 'Brand Guidelines'],
    results: 'Successful Series A positioning',
    image: 'https://images.pexels.com/photos/6214/pexels-photo-6214.jpg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    title: 'PulseFit Mobile App',
    category: 'Mobile Apps',
    industry: 'Health & Fitness',
    description: 'A cross-platform fitness app with workout tracking, social challenges, and personalized coaching powered by AI.',
    technologies: ['React Native', 'Node.js', 'Firebase'],
    results: '50K+ downloads in first quarter',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 5,
    title: 'Halcyon Marketing Campaign',
    category: 'Marketing',
    industry: 'E-commerce',
    description: 'A multi-channel ad campaign for an e-commerce brand, combining Meta ads, email sequences, and conversion-optimized landing pages.',
    technologies: ['Meta Ads', 'Google Ads', 'Klaviyo'],
    results: '280% ROAS in 90 days',
    image: 'https://images.pexels.com/photos/2693507/pexels-photo-2693507.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 6,
    title: 'Strata Inventory System',
    category: 'Management Systems',
    industry: 'Manufacturing',
    description: 'A custom inventory and order management system that automated a manufacturer\'s manual workflows and centralized their data.',
    technologies: ['React', 'PostgreSQL', 'Node.js'],
    results: '60% faster order processing',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 7,
    title: 'Bloom Social Media Kit',
    category: 'Graphic Design',
    industry: 'Beauty & Lifestyle',
    description: 'A monthly social media creative kit for a beauty brand, including post templates, story sets, and animated reels.',
    technologies: ['Photoshop', 'After Effects', 'Illustrator'],
    results: '35% engagement growth',
    image: 'https://images.pexels.com/photos/6214/pexels-photo-6214.jpg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 8,
    title: 'Nimbus Cloud Platform',
    category: 'Websites',
    industry: 'Technology',
    description: 'A marketing site and documentation portal for a cloud infrastructure platform, built for speed and developer experience.',
    technologies: ['Astro', 'TailwindCSS', 'Algolia'],
    results: '1.2s average load time',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 9,
    title: 'Atlas Travel App',
    category: 'Mobile Apps',
    industry: 'Travel & Hospitality',
    description: 'A travel planning app with itinerary building, offline maps, and booking integrations for seamless trip management.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    results: '4.8 star app store rating',
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 10,
    title: 'Quartz Restaurant Brand',
    category: 'Branding',
    industry: 'Hospitality',
    description: 'A refined brand identity for a fine-dining restaurant, including menu design, signage, and a digital presence system.',
    technologies: ['InDesign', 'Illustrator', 'Photography'],
    results: 'Featured in local design awards',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 11,
    title: 'Drift Ads Retargeting',
    category: 'Marketing',
    industry: 'Automotive',
    description: 'A retargeting and conversion campaign for an automotive dealer group, with dynamic creative and CRM sync.',
    technologies: ['Google Ads', 'Meta Ads', 'HubSpot'],
    results: '45% lower cost per lead',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 12,
    title: 'Cobalt HR Dashboard',
    category: 'Management Systems',
    industry: 'Human Resources',
    description: 'A custom HR management dashboard with leave tracking, performance reviews, and automated onboarding workflows.',
    technologies: ['React', 'Supabase', 'TailwindCSS'],
    results: '70% reduction in HR admin time',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
