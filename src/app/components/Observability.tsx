import { FileText, Network, Link, CheckSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Observability() {
  const elements = [
    {
      title: 'Input & Goal Logging',
      description: 'Captures every agent objective and environmental input at the moment of ingestion.',
      icon: FileText,
    },
    {
      title: 'Decision Traceability',
      description: 'Records reasoning chains, policy evaluations and trust-tier decisions end-to-end.',
      icon: Network,
    },
    {
      title: 'Action Attribution',
      description:
        'Ties every real-world action cryptographically to a specific agent identity and authorized policy.',
      icon: Link,
    },
    {
      title: 'Policy Auditability',
      description:
        'Security policies are testable and provable—reviewed before deployment and verified after incidents.',
      icon: CheckSquare,
    },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="full-audit-trail">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-5xl mx-auto">
          <div
            className="inline-block px-6 py-2 mb-6 rounded-full border"
            style={{
              borderColor: '#8b5cf6',
              color: '#8b5cf6',
            }}
          >
            <span className="text-sm uppercase tracking-widest">Transparency at All Levels</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >
            Full Audit Trail
          </h2>
          <p className="text-xl sm:text-2xl mt-4 md:mt-6 mb-6 md:mb-8 px-4" style={{ color: '#8b5cf6' }}>
            Governed, Verifiable, Forensic-Ready
          </p>
          <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            The foundation of trust for the Agentic Internet. Every input, goal, decision and output is logged,
            timestamped and cryptographically attributable, making decision chains visible and auditable.
            Policies are testable and provable before and after deployment, enabling forensic understanding when
            incidents occur.
          </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {elements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <ScrollReveal key={element.title} delay={100 * index} className="h-full">
                <div
                  className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl h-full"
                style={{
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 100%)',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <IconComponent className="card-hover-icon w-8 sm:w-10 h-8 sm:h-10 transition-transform flex-shrink-0" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
                  <div>
                    <h3 className="text-lg sm:text-xl mb-1 sm:mb-2" style={{ color: '#8b5cf6' }}>
                      {element.title}
                    </h3>
                    <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{element.description}</p>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
