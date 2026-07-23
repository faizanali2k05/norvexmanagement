export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
}

export const blogCategories = [
  'All',
  'Digital Strategy',
  'Design',
  'Development',
  'Marketing',
  'Business Growth',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-digital-transformation-is-not-about-technology',
    title: 'Why Digital Transformation Is Not About Technology',
    excerpt:
      'The most successful transformations are driven by business strategy, not software choices. Here\'s how to approach yours.',
    category: 'Digital Strategy',
    author: 'Norvex Team',
    date: '2024-11-18',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    content: [
      'When businesses hear "digital transformation," they often reach for a technology checklist a new CRM, a cloud migration, an app. But the organizations that succeed treat transformation as a business strategy exercise first, and a technology project second.',
      'The right starting point is the customer journey. Where do prospects struggle to find you? Where do leads stall in your pipeline? Where do customers churn because of friction? These are the problems technology should solve and mapping them clearly determines which investments actually move the needle.',
      'Next comes process. Before automating a workflow, you should understand it. Many companies digitize broken processes and end up with faster broken processes. The transformational work happens when you redesign the workflow first, then apply technology to make the new version scalable.',
      'Finally, technology choices follow strategy not the other way around. The platform you pick matters less than whether your team will actually use it, whether it integrates with your existing stack, and whether it supports the customer experience you designed. A well-implemented modest tool beats a poorly-implemented premium one every time.',
      'At Norvex Management, we start every engagement with strategy. The technology is the easy part. The hard part and the part that determines ROI is understanding your business deeply enough to know which digital changes will create real growth.',
    ],
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Design Systems That Scale With Your Product',
    excerpt:
      'A practical guide to building a design system that stays consistent as your team and product grow.',
    category: 'Design',
    author: 'Norvex Team',
    date: '2024-11-10',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'A design system is more than a component library. It is a shared language that lets designers and developers move faster without sacrificing consistency.',
      'Start with tokens. Define your colors, spacing, typography, and radii as named values. Everything else builds on these foundations.',
      'Document usage, not just appearance. A button component is only useful if your team knows when to use it, not just how it looks.',
      'Iterate with real product work. The strongest systems are shaped by real use cases, not built in a vacuum.',
    ],
  },
  {
    slug: 'web-performance-as-a-growth-lever',
    title: 'Web Performance Is a Growth Lever, Not a Technical Detail',
    excerpt:
      'Faster sites convert better, rank higher, and cost less to run. Here\'s why performance deserves a seat at the strategy table.',
    category: 'Development',
    author: 'Norvex Team',
    date: '2024-10-28',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Performance affects every metric that matters: conversion rate, bounce rate, SEO ranking, and ad quality score.',
      'A one-second improvement in load time can lift conversion rates by 7% or more. For an e-commerce site, that is direct revenue.',
      'Start with measurement. You cannot improve what you do not track. Set up Core Web Vitals monitoring before optimizing.',
      'Prioritize the critical path. Defer non-essential scripts, optimize images, and ship less JavaScript.',
    ],
  },
  {
    slug: 'the-paid-ads-framework-that-lowers-cac',
    title: 'The Paid Ads Framework That Lowers Customer Acquisition Cost',
    excerpt:
      'A structured approach to testing, scaling, and optimizing paid media so every dollar works harder.',
    category: 'Marketing',
    author: 'Norvex Team',
    date: '2024-10-15',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2693507/pexels-photo-2693507.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Most ad accounts fail not because of bad creative, but because of bad structure. A clear framework prevents the chaos.',
      'Test systematically. Isolate variables so you know exactly what drove a result.',
      'Scale what works, kill what does not. Most accounts waste 40% of budget on underperforming ads.',
    ],
  },
  {
    slug: 'building-long-term-client-partnerships',
    title: 'Building Long-Term Client Partnerships, Not One-Off Projects',
    excerpt:
      'Why the agency-client relationship matters more than any single deliverable and how we approach it.',
    category: 'Business Growth',
    author: 'Norvex Team',
    date: '2024-10-02',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'The best digital work happens inside long-term partnerships, not one-off engagements.',
      'Trust compounds. The longer we work with a client, the faster we move and the better the outcomes.',
      'We structure engagements around business goals, not deliverables. That alignment is what creates lasting impact.',
    ],
  },
  {
    slug: 'ui-ux-research-on-a-budget',
    title: 'UI/UX Research on a Budget: What Actually Matters',
    excerpt:
      'You do not need a massive research budget to make good product decisions. Here\'s what to focus on.',
    category: 'Design',
    author: 'Norvex Team',
    date: '2024-09-20',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Research does not require a lab. Five moderated user sessions will surface most usability problems.',
      'Talk to your customers regularly. The signal from a 20-minute conversation beats any analytics dashboard.',
      'Prioritize findings by impact. Not every insight needs to be acted on immediately.',
    ],
  },
];
