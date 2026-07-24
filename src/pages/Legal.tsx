import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

export function PrivacyPolicy() {
  const sections = [
    {
      title: 'Introduction',
      content:
        'This Privacy Policy explains how Norvex Management collects, uses, and protects your information when you visit our website or engage our services. By using our website, you agree to the practices described in this policy.',
    },
    {
      title: 'Information We Collect',
      content:
        'We collect information you provide directly such as your name, email address, and company details when you fill out our contact form or subscribe to our newsletter. We also collect analytical data about how you use our website, including pages visited, time spent, and referral sources.',
    },
    {
      title: 'How We Use Your Information',
      content:
        'Your information is used to respond to inquiries, provide requested services, send relevant updates and insights, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties under any circumstances.',
    },
    {
      title: 'Data Security',
      content:
        'We implement industry-standard security measures to protect your data, including encrypted connections, secure data storage, and restricted access controls. While no system is perfectly secure, we take reasonable steps to safeguard your information against unauthorized access or disclosure.',
    },
    {
      title: 'Cookies',
      content:
        'Our website uses cookies to improve your browsing experience, analyze traffic, and remember your preferences. You can control cookies through your browser settings, though disabling them may affect some website functionality.',
    },
    {
      title: 'Third-Party Services',
      content:
        'We may use third-party tools for analytics, email communication, and contact form handling. These providers have their own privacy policies, and we recommend reviewing them. We only share information necessary to provide the services you request.',
    },
    {
      title: 'Your Rights',
      content:
        'You have the right to access, correct, or delete your personal information held by us. You may also unsubscribe from our communications at any time. To exercise these rights, contact us using the details provided below.',
    },
    {
      title: 'Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
    },
    {
      title: 'Contact Us',
      content:
        'If you have questions about this Privacy Policy or how we handle your data, contact us at norvexmanagement@gmail.com.',
    },
  ];

  return (
    <div className="page-enter">
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-medium-gray text-sm mb-10">Last updated: July 2026</p>
            <div className="space-y-8">
              {sections.map((s, i) => (
                <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-navy mb-3">{s.title}</h2>
                    <p className="text-medium-gray text-lg leading-relaxed">{s.content}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing or using the Norvex Management website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.',
    },
    {
      title: 'Services',
      content:
        'Norvex Management provides digital transformation services including graphic design, UI/UX design, web and app development, social media and ads management, business profile management, and customized management systems. Specific deliverables, timelines, and pricing for each engagement are defined in individual project proposals.',
    },
    {
      title: 'Client Responsibilities',
      content:
        'Clients agree to provide timely feedback, required materials, and access necessary for project completion. Delays in client responses may affect project timelines. Clients are responsible for the accuracy of all content and information they provide.',
    },
    {
      title: 'Intellectual Property',
      content:
        'Upon final payment, clients own all final deliverables and source files produced for their project. Norvex Management retains the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing.',
    },
    {
      title: 'Payment Terms',
      content:
        'Project fees, payment schedules, and cancellation terms are specified in individual proposals. Unless otherwise stated, projects require a 50% deposit before work begins, with the balance due upon completion. Monthly retainers are billed in advance.',
    },
    {
      title: 'Revisions',
      content:
        'Each project includes a defined number of revision rounds as specified in the project proposal. Additional revisions beyond the agreed scope may incur additional fees.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'Norvex Management is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid for the specific project in question.',
    },
    {
      title: 'Confidentiality',
      content:
        'We treat all client information as confidential and do not disclose it to third parties except as required to deliver the agreed services or as required by law.',
    },
    {
      title: 'Changes to Terms',
      content:
        'We reserve the right to update these Terms & Conditions at any time. Changes take effect when posted on this page. Continued use of our services constitutes acceptance of the updated terms.',
    },
    {
      title: 'Contact',
      content:
        'Questions about these terms can be directed to norvexmanagement@gmail.com.',
    },
  ];

  return (
    <div className="page-enter">
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        description="The terms that govern our engagement with clients and website visitors."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-medium-gray text-sm mb-10">Last updated: July 2026</p>
            <div className="space-y-8">
              {sections.map((s, i) => (
                <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-navy mb-3">{s.title}</h2>
                    <p className="text-medium-gray text-lg leading-relaxed">{s.content}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
