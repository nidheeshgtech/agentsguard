import { Shield, Zap, RefreshCw, Lock, Puzzle, Swords } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Architecture() {
  const principles = [
    {
      title: 'Enforcement-First',
      description: 'Every agent action passes through mandatory control points; there are no exceptions.',
      icon: Shield,
    },
    {
      title: 'Runtime, Not Static',
      description: 'Decisions are made continuously throughout execution, not only at deploy time.',
      icon: Zap,
    },
    {
      title: 'Agent-Agnostic',
      description: 'Works across frameworks, models, clouds and tools without requiring code changes.',
      icon: RefreshCw,
    },
    {
      title: 'Deny-by-Default',
      description: 'Explicit permissions and hard ceilings are required for all actions; failure is contained.',
      icon: Lock,
    },
    {
      title: 'Modular & Composable',
      description: 'New policies, tools and security agents can be added incrementally as needs evolve.',
      icon: Puzzle,
    },
    {
      title: 'Adversarial-Aware',
      description: 'Inputs, agents and tools are treated as potentially hostile by default.',
      icon: Swords,
    },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="architecture">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)',
        }}
      />
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
            <span className="text-sm uppercase tracking-widest">How it works</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >Core Architectural Principles</h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-3xl mx-auto px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Foundational principles for runtime enforcement in agentic AI. Each principle addresses a specific
            failure mode.
          </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <ScrollReveal key={principle.title} delay={100 * index} className="h-full">
                <div
                  className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl h-full flex flex-col"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <IconComponent className="card-hover-icon w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 transition-transform flex-shrink-0" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
                <h3
                  className="text-xl sm:text-2xl mb-3 sm:mb-4 flex-shrink-0"
                  style={{
                    color: '#8b5cf6',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed flex-grow" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {principle.description}
                </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
