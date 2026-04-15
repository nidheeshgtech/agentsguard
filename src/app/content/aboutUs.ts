export const aboutUsContent = {
  brand: {
    name: 'AgentsGuard',
    tagline: 'We Secure the Agentic Internet.',
    oneLiner:
      'AgentsGuard builds the runtime enforcement layer that makes autonomous AI trustworthy at enterprise scale.',
  },
  hero: {
    eyebrow: 'About Us',
    headline: 'We Secure the Agentic Internet.',
    subheadline:
      'Founded by security engineers, AgentsGuard closes the gap traditional tooling was never designed to solve. AgentsGuard builds the runtime enforcement layer that makes autonomous AI trustworthy at enterprise scale.',
    stats: [
      { label: 'Founded', value: '2023' },
      { label: 'Headquarters', value: 'San Francisco, CA' },
      { label: 'Stage', value: 'Series A' },
      { label: 'Team', value: '42 Members' },
    ],
  },
  mission: {
    sectionTitle: 'Our Mission',
    headline: 'Built on the Belief That AI Must Be Governed.',
    body: [
      'We started AgentsGuard because the industry moved toward agentic AI without solving the core security problem.',
      'Autonomous agents can call APIs, spawn sub-agents, and access sensitive data without a reliable enforcement layer in between.',
      'Our team comes from security research and distributed systems, where we saw the same failure patterns that created major cloud security issues.',
      'AgentsGuard exists to build the control plane every organization needs when deploying agentic AI, from day one.',
    ],
  },
  values: {
    sectionTitle: 'Mission & Values',
    items: [
      {
        title: 'Enforcement-First',
        body: 'Security is never optional. Every agent action passes through a control point.',
      },
      {
        title: 'Radical Transparency',
        body: 'We publish threat models, share research openly, and design for auditability.',
      },
      {
        title: 'Adversarial by Default',
        body: 'Every input, tool, and agent interaction is treated as a possible attack vector until proven safe.',
      },
      {
        title: 'Human Judgment at the Edge',
        body: 'Automation should strengthen human oversight, not replace it.',
      },
    ],
  },
  metrics: {
    sectionTitle: 'By the Numbers',
    items: [
      { value: '2.4B', label: 'Agent actions governed per month' },
      { value: '99.97%', label: 'Policy enforcement uptime SLA' },
      { value: '0ms', label: 'Added latency at the control point' },
      { value: '180+', label: 'Enterprise customers secured' },
    ],
  },
  team: {
    sectionTitle: 'The Team',
    headline: 'Security Engineers Who Refused to Look Away.',
    intro: 'Our team is drawn from security research, distributed systems, and applied AI.',
    founders: [
      {
        name: 'Dr. Najwa Araj',
        role: 'Chief Executive Officer (CEO) at Technology Innovation Institute (TII)',
        image: 'dr-najwa-new-headshot',
        bio: 'Najwa Aaraj is the Chief Executive Officer (CEO) at Technology Innovation Institute (TII), the applied research pillar of the Advanced Technology Research Council (ATRC), the overarching advanced technology body in Abu Dhabi responsible for driving research and development for transformative technology outcomes.',
      },
      {
        name: 'Darian Okafor',
        role: 'Co-Founder & CTO',
        bio: 'Former principal engineer at a leading AI lab and co-author of a widely used open-source agent orchestration framework. Leads the architecture of the enforcement engine at the core of AgentsGuard.',
      },
    ],
    leadership: [
      {
        name: 'Yusuf Altan',
        role: 'VP of Engineering',
        bio: '10 years building real-time policy engines at cloud security scale.',
      },
      {
        name: 'Lena Kovač',
        role: 'Head of Product',
        bio: 'Enterprise security product leader with experience across three successful exits.',
      },
      {
        name: 'James Whitfield',
        role: 'Chief Revenue Officer',
        bio: 'Scaled security SaaS from zero to $50M ARR at two previous companies.',
      },
    ],
  },
  timeline: {
    sectionTitle: 'Our Story',
    headline: 'From Research to Runtime Enforcement.',
    events: [
      {
        year: '2022',
        title: 'The Problem Identified',
        body: 'Mara Chen and Darian Okafor met at a security research conference and aligned on the growing security risk of autonomous agents becoming production infrastructure.',
      },
      {
        year: '2023',
        title: 'AgentsGuard Founded',
        body: 'Company incorporated in San Francisco. First enforcement engine tested against 200+ real-world agentic attack scenarios. Seed round of $6M closed.',
      },
      {
        year: '2024',
        title: 'Series A & Enterprise Launch',
        body: 'Raised $28M Series A, launched with enterprise customers across financial services, healthcare, and cloud infrastructure, and shipped core identity and autonomy budget systems.',
      },
      {
        year: '2025',
        title: 'The Control Plane Standard',
        body: 'AgentsGuard processes over 2 billion agent actions monthly and becomes a standard layer across major agent orchestration frameworks.',
      },
    ],
  },
  culture: {
    sectionTitle: 'How We Work',
    headline: 'Culture Built on Honest Threat Modeling.',
    items: [
      {
        title: 'Research Drives Product',
        body: 'Every feature starts as a real threat scenario.',
      },
      {
        title: 'Open Security Community',
        body: 'We publish findings, contribute to standards, and collaborate with the broader AI security ecosystem.',
      },
      {
        title: 'Ship Fast, Enforce Faster',
        body: 'Security requires speed because the threat landscape moves continuously.',
      },
      {
        title: 'Customer Zero Mentality',
        body: 'We secure our own internal agents with AgentsGuard before shipping anything externally.',
      },
      {
        title: 'Full Transparency',
        body: 'Status, incidents, and threat disclosures are public.',
      },
      {
        title: 'Focused on the Hardest Problem',
        body: 'We do not build compliance theater. We build runtime enforcement that stops real attacks.',
      },
    ],
  },
  cta: {
    headline: 'Help Build the Foundation of Trustworthy AI.',
    body: 'We are hiring security engineers, ML researchers, and systems architects who believe agentic AI needs a real security layer.',
    primaryButton: {
      label: 'View Open Roles',
      href: '/careers',
    },
    secondaryButton: {
      label: 'Request a Demo',
      href: '/request-demo',
    },
  },
  seo: {
    title: 'About Us | AgentsGuard',
    description:
      'Learn how AgentsGuard is building the runtime enforcement layer for trustworthy autonomous AI at enterprise scale.',
  },
} as const;
