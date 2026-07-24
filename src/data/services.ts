import {
  PenTool,
  LayoutDashboard,
  Code2,
  Smartphone,
  Share2,
  Megaphone,
  Briefcase,
  Settings2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  process: { step: string; detail: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    short: 'Visual identity and marketing collateral that communicates clearly and converts.',
    description:
      'We craft brand-aligned visual assets from logos and identity systems to social media creatives and print collateral designed to make your business memorable and trustworthy at every touchpoint.',
    icon: PenTool,
    benefits: [
      'A cohesive visual identity that builds instant recognition',
      'Marketing collateral engineered to convert, not just decorate',
      'Consistent brand language across digital and print',
      'Assets delivered print-ready and web-optimized',
    ],
    process: [
      { step: 'Discovery', detail: 'We study your brand, audience, and positioning to define the visual direction.' },
      { step: 'Concepts', detail: 'Multiple creative directions are explored and narrowed with your feedback.' },
      { step: 'Refinement', detail: 'The chosen direction is refined into a polished, production-ready system.' },
      { step: 'Delivery', detail: 'Final files delivered in every format you need, with brand guidelines included.' },
    ],
    deliverables: [
      'Logo and brand identity system',
      'Social media creative templates',
      'Business cards and stationery',
      'Brand guidelines document',
    ],
    faqs: [
      { q: 'Do you provide source files?', a: 'Yes. All source files are handed over in editable formats along with exported assets.' },
      { q: 'How many revision rounds are included?', a: 'Each project includes two structured revision rounds, with additional rounds available on request.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Research-driven interfaces that are intuitive, accessible, and built around your users.',
    description:
      'Our UI/UX practice combines user research, information architecture, and interaction design to create digital products people actually enjoy using improving adoption, retention, and satisfaction.',
    icon: LayoutDashboard,
    benefits: [
      'Interfaces validated against real user behavior',
      'Reduced friction and higher conversion across flows',
      'Design systems that scale with your product',
      'Accessibility baked in from the first wireframe',
    ],
    process: [
      { step: 'Research', detail: 'User interviews, competitive analysis, and journey mapping to understand the problem space.' },
      { step: 'Architecture', detail: 'Information architecture and wireframes define structure before pixels.' },
      { step: 'Design', detail: 'High-fidelity UI, prototypes, and a reusable component library.' },
      { step: 'Validation', detail: 'Usability testing confirms the design before development begins.' },
    ],
    deliverables: [
      'User flow and wireframe documentation',
      'High-fidelity Figma prototypes',
      'Reusable design system and components',
      'Developer handoff package',
    ],
    faqs: [
      { q: 'Do you work with existing design systems?', a: 'Absolutely. We can extend your current system or build a new one from scratch.' },
      { q: 'Will I get a clickable prototype?', a: 'Yes. Every project includes an interactive prototype so you can experience the flow before development.' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Fast, scalable, SEO-friendly websites and web applications built to grow with you.',
    description:
      'We build websites and web applications using modern, performant frameworks engineered for speed, search visibility, and long-term maintainability so your digital presence stays a growth asset, not a liability.',
    icon: Code2,
    benefits: [
      'Sub-second load times and 90+ performance scores',
      'SEO-optimized structure from the ground up',
      'Scalable architecture that grows with your business',
      'CMS integration so your team controls content',
    ],
    process: [
      { step: 'Planning', detail: 'Technical architecture, technology selection, and project scoping.' },
      { step: 'Build', detail: 'Component-driven development with continuous review checkpoints.' },
      { step: 'Optimize', detail: 'Performance, accessibility, and SEO pass before launch.' },
      { step: 'Launch', detail: 'Deployment, monitoring setup, and post-launch support.' },
    ],
    deliverables: [
      'Fully responsive, production website',
      'CMS for self-managed content updates',
      'Analytics and performance monitoring',
      'Documentation and training',
    ],
    faqs: [
      { q: 'Which CMS do you support?', a: 'We build custom CMS systems using React, rather than relying on WordPress.' },
      { q: 'Do you offer ongoing maintenance?', a: 'Yes. Monthly maintenance and support plans are available after launch.' },
    ],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    short: 'Native and cross-platform mobile apps with smooth performance and clean UX.',
    description:
      'From concept to launch, we design and develop mobile applications that deliver reliable performance, offline resilience, and intuitive experiences across iOS and Android backed by a maintainable codebase.',
    icon: Smartphone,
    benefits: [
      'Single codebase for iOS and Android to control cost',
      'Offline-first architecture where it matters',
      'Push notifications and deep linking support',
      'App store submission handled end-to-end',
    ],
    process: [
      { step: 'Strategy', detail: 'Feature prioritization, platform decisions, and technical scoping.' },
      { step: 'Design', detail: 'Mobile-first UX and UI tailored to each platform convention.' },
      { step: 'Development', detail: 'Iterative builds with regular test builds on real devices.' },
      { step: 'Release', detail: 'Store submission, crash monitoring, and post-release updates.' },
    ],
    deliverables: [
      'Published iOS and Android applications',
      'Admin dashboard for app management',
      'API and backend integration',
      'Source code and technical documentation',
    ],
    faqs: [
      { q: 'Do you build for both iOS and Android?', a: 'Yes. We use cross-platform frameworks to deliver on both stores efficiently.' },
      { q: 'Can you update an existing app?', a: 'We can audit, modernize, and extend existing applications as well as build new ones.' },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    short: 'Content, community, and strategy that turns followers into a loyal audience.',
    description:
      'We manage your social presence end-to-end content planning, creative production, scheduling, community management, and reporting so your channels stay active, on-brand, and working toward measurable business goals.',
    icon: Share2,
    benefits: [
      'Consistent, on-brand content across all platforms',
      'Community engagement that builds loyalty',
      'Data-driven posting schedule for maximum reach',
      'Monthly performance reports tied to business goals',
    ],
    process: [
      { step: 'Strategy', detail: 'Content pillars, tone, and platform strategy defined.' },
      { step: 'Create', detail: 'Monthly content calendar produced with creatives.' },
      { step: 'Publish', detail: 'Scheduled posting and real-time community management.' },
      { step: 'Report', detail: 'Monthly analytics review and strategy refinement.' },
    ],
    deliverables: [
      'Monthly content calendar',
      'Custom-designed social creatives',
      'Community management and engagement',
      'Monthly performance report',
    ],
    faqs: [
      { q: 'How often will you post?', a: 'Posting frequency is tailored to your platform and audience, typically 3–5 times per week per platform.' },
      { q: 'Do you create the graphics too?', a: 'Yes. All visuals are designed in-house and aligned with your brand identity.' },
    ],
  },
  {
    slug: 'ads-management',
    title: 'Ads Management',
    short: 'Performance-driven ad campaigns across Meta, Google, and beyond.',
    description:
      'We plan, launch, and optimize paid media campaigns designed to lower your cost per acquisition while scaling reach with transparent reporting so you always know what every dollar is doing.',
    icon: Megaphone,
    benefits: [
      'Lower cost-per-acquisition through continuous optimization',
      'Audience targeting refined from real conversion data',
      'Creative testing framework to find winning ads',
      'Transparent weekly and monthly reporting',
    ],
    process: [
      { step: 'Audit', detail: 'Account audit, conversion tracking setup, and audience research.' },
      { step: 'Build', detail: 'Campaign structure, ad creative, and landing page alignment.' },
      { step: 'Optimize', detail: 'Daily monitoring, budget reallocation, and creative iteration.' },
      { step: 'Scale', detail: 'Scaling winners while maintaining efficiency targets.' },
    ],
    deliverables: [
      'Full campaign setup and tracking',
      'Ad creative variations for testing',
      'Monthly performance reports',
      'Conversion-optimized landing pages',
    ],
    faqs: [
      { q: 'Which platforms do you cover?', a: 'Meta (Facebook/Instagram), Google Ads, YouTube, and LinkedIn depending on your audience.' },
    ],
  },
  {
    slug: 'business-profile-management',
    title: 'Business Profile Management',
    short: 'Local listings and profiles kept accurate, optimized, and review-ready.',
    description:
      'We keep your Google Business Profile and directory listings accurate, complete, and optimized managing reviews, posts, and updates so you rank higher in local search and convert more nearby customers.',
    icon: Briefcase,
    benefits: [
      'Higher visibility in local and map search results',
      'Accurate NAP data across all directories',
      'Review management that builds trust',
      'Regular posts and updates to stay relevant',
    ],
    process: [
      { step: 'Audit', detail: 'Full audit of all listings and profile completeness.' },
      { step: 'Optimize', detail: 'Profile optimization with keywords, photos, and service details.' },
      { step: 'Manage', detail: 'Ongoing posts, review responses, and Q&A monitoring.' },
      { step: 'Report', detail: 'Monthly reporting on visibility, calls, and direction requests.' },
    ],
    deliverables: [
      'Fully optimized Google Business Profile',
      'Directory listing synchronization',
      'Monthly review and post management',
      'Local visibility reporting',
    ],
    faqs: [
      { q: 'Do you respond to reviews for me?', a: 'Yes. We draft professional responses to all reviews for your approval before posting.' },
      { q: 'How long until I see local ranking improvement?', a: 'Most clients see noticeable improvement within 30 to 60 days of consistent optimization.' },
    ],
  },
  {
    slug: 'customized-management-systems',
    title: 'Customized Management Systems',
    short: 'Tailored software that automates operations and centralizes your data.',
    description:
      'We build custom management systems CRMs, inventory tools, booking platforms, and internal dashboards designed around your exact workflows, so your team spends less time on manual work and more time on what matters.',
    icon: Settings2,
    benefits: [
      'Software shaped around your real workflows',
      'Automation of repetitive manual tasks',
      'Centralized data with role-based access',
      'Scalable architecture that grows with operations',
    ],
    process: [
      { step: 'Analysis', detail: 'Workflow mapping and requirements gathering with your team.' },
      { step: 'Architecture', detail: 'Database design, role modeling, and system architecture.' },
      { step: 'Build', detail: 'Iterative development with weekly demos and feedback loops.' },
      { step: 'Deploy', detail: 'Deployment, team training, and ongoing iteration.' },
    ],
    deliverables: [
      'Custom management dashboard',
      'Role-based access control',
      'Automated workflows and notifications',
      'Data export and reporting modules',
    ],
    faqs: [
      { q: 'Can you integrate with our existing tools?', a: 'Yes. We integrate with existing CRMs, accounting software, and third-party APIs.' },
      { q: 'Do you host the system or do we?', a: 'Both options are available. We can host on managed infrastructure or deploy to your servers.' },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);
