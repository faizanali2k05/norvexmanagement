export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  image: string;
  metrics: { label: string; value: string }[];
  sections: {
    problem: string;
    research: string;
    strategy: string;
    execution: string;
    outcome: string;
    results: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'vertex-consulting-lead-generation',
    client: 'Vertex Consulting',
    industry: 'B2B Consulting',
    title: 'Tripling Qualified Leads for a Consulting Firm',
    summary:
      'How a strategic website rebuild and lead-capture overhaul delivered a 3x increase in qualified inbound leads for a mid-market consulting firm.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Qualified Leads', value: '3x' },
      { label: 'Bounce Rate', value: '-48%' },
      { label: 'Avg. Session', value: '+2.1m' },
    ],
    sections: {
      problem:
        'Vertex Consulting had a dated website that failed to communicate their expertise. Visitors bounced within seconds, contact forms gathered dust, and the firm relied almost entirely on referrals for new business.',
      research:
        'We analyzed 18 months of analytics data, interviewed the partners, and surveyed past clients. The data showed that prospects found the site untrustworthy, navigation was unclear, and there was no compelling reason to reach out. Competitors with weaker offerings were winning purely on presentation.',
      strategy:
        'We positioned Vertex as a thought-led firm: a content-driven site architecture, service pages built around client outcomes rather than features, and a lead magnet strategy that offered genuine value in exchange for contact details. Every page had a clear, contextual call to action.',
      execution:
        'We rebuilt the site on a modern, fast framework with a CMS that let the team publish insights without developer help. We designed a lead-capture flow with progressive forms, built a resource library, and integrated a CRM so every inquiry was tracked and followed up automatically.',
      outcome:
        'Within four months of launch, organic traffic doubled and the number of qualified inbound leads tripled. The bounce rate fell by 48%, and average session duration increased by over two minutes proof that visitors were actually engaging with the content.',
      results:
        'Vertex now receives a steady pipeline of inbound leads each month, has closed two enterprise engagements sourced directly from the website, and has reduced its reliance on referrals from 90% to 55% of new business.',
    },
  },
  {
    slug: 'pulsefit-app-launch',
    client: 'PulseFit',
    industry: 'Health & Fitness',
    title: 'Launching a Fitness App to 50K Downloads',
    summary:
      'From concept to 50,000 downloads in one quarter the product, design, and launch strategy behind a breakout fitness app.',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Downloads', value: '50K+' },
      { label: 'App Rating', value: '4.8★' },
      { label: 'Day-30 Retention', value: '38%' },
    ],
    sections: {
      problem:
        'PulseFit\'s founders had a strong concept for a social fitness app but no product, no design, and no go-to-market plan. They needed a partner to build the app and engineer a launch that would generate real user momentum not just vanity installs.',
      research:
        'We ran a competitive analysis of 25 fitness apps, identified a gap in social accountability features, and validated the concept with a 200-person survey. The research confirmed that users abandoned fitness apps because they felt isolating not because they lacked features.',
      strategy:
        'We designed the product around three pillars: personalized coaching, social challenges, and streak accountability. The launch strategy combined a waitlist campaign, influencer seeding, and a phased feature rollout to keep early users engaged and talking.',
      execution:
        'We designed and built the cross-platform app in 12 weeks, ran a private beta with 500 users, and used their feedback to refine onboarding. On launch day we activated the waitlist, coordinated with 15 micro-influencers, and launched a targeted paid campaign across Instagram and TikTok.',
      outcome:
        'The app crossed 50,000 downloads in its first quarter with a 4.8-star rating. Day-30 retention sat at 38% well above the fitness app average of 15%. Social challenge participation became the app\'s primary growth engine, with 60% of new installs coming from referrals.',
      results:
        'PulseFit secured seed funding on the strength of the launch metrics, expanded to two new markets, and now operates as a standalone product team with Norvex continuing to support feature development and growth experiments.',
    },
  },
  {
    slug: 'strata-inventory-automation',
    client: 'Strata Manufacturing',
    industry: 'Manufacturing',
    title: 'Automating 60% of Order Processing for a Manufacturer',
    summary:
      'A custom inventory and order management system that replaced spreadsheets and manual data entry, cutting processing time by 60%.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Processing Time', value: '-60%' },
      { label: 'Data Errors', value: '-92%' },
      { label: 'Orders/Month', value: '+35%' },
    ],
    sections: {
      problem:
        'Strata Manufacturing managed orders across spreadsheets, email, and a legacy system that didn\'t talk to their inventory. Orders were lost, duplicated, or delayed, and the team spent days each month reconciling data manually.',
      research:
        'We spent two weeks on-site mapping their actual workflows, interviewing operators, and auditing their data. We found that 40% of order processing time was spent on data re-entry and error correction work that was entirely automatable.',
      strategy:
        'Rather than forcing a generic ERP, we designed a custom system around their real workflows. The strategy was to automate the repetitive work, give operators a single source of truth, and build reporting that leadership could actually use for decisions.',
      execution:
        'We built the system iteratively, starting with order intake and inventory sync, then layering in automated workflows, role-based dashboards, and supplier integration. Each module was tested with the operators who would use it, and refined before the next was built.',
      outcome:
        'Order processing time dropped by 60% in the first two months. Data errors fell by 92% because the system validated entries in real time. The team now handles 35% more orders per month with the same headcount, and leadership has real-time visibility into operations.',
      results:
        'Strata recovered the cost of the system within seven months through labor savings alone. They have since commissioned two additional modules supplier management and production forecasting and the system has become the operational backbone of the business.',
    },
  },
];
