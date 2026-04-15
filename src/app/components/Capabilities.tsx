import { KeyRound, Construction, Settings, BarChart3, Power, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const capabilities = [
    {
      title: 'Cryptographic Agent Identity',
      description:
        'Every agent receives a verifiable cryptographic identity at instantiation, which is validated at every tool call, API interaction and inter-agent communication; no agent acts anonymously.',
      icon: KeyRound,
      color: '#8b5cf6',
    },
    {
      title: 'Deny-by-Default Tool Access',
      description:
        'Tool, API and data access is blocked unless explicitly authorized; permissions are scoped, time-bounded and revocable in real time, eliminating over-privileged agent access.',
      icon: Construction,
      color: '#8b5cf6',
    },
    {
      title: 'Runtime Dynamic Policy Engine',
      description:
        'Policies are evaluated continuously rather than at startup; security reasoning adapts to behavioural signals, environmental context and emerging threats.',
      icon: Settings,
      color: '#8b5cf6',
    },
    {
      title: 'Autonomy Budgets',
      description:
        'Hard ceilings on agent autonomy define the maximum scope of independent action before requiring human confirmation or automatic escalation.',
      icon: BarChart3,
      color: '#8b5cf6',
    },
    {
      title: 'Kill Switches & Quarantine',
      description:
        'Instant agent termination, capability revocation and isolation are available at any decision point; misbehaving agents cannot propagate damage before being stopped.',
      icon: Power,
      color: '#8b5cf6',
    },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="control-layer">
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
            <span className="text-sm uppercase tracking-widest">A Control Layer for Agents</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >
            What AgentsGuard Enables
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Runtime controls purpose-engineered for agentic AI
          </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={capability.title} delay={50 * index}>
                <div
                  className="card-hover-glow rounded-[20px] cursor-pointer relative"
                  style={{
                    border: `1px solid ${isOpen ? capability.color + '30' : 'rgba(255, 255, 255, 0.08)'}`,
                    background: isOpen
                      ? `radial-gradient(circle at top left, ${capability.color}08 0%, rgba(0, 0, 0, 0.4) 100%)`
                      : 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isOpen
                      ? `0 8px 32px -8px ${capability.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                      : '0 4px 16px -4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  {/* Header Row */}
                  <div className="flex items-center gap-5 p-6 sm:p-7">
                    {/* Left - Icon with glow */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative"
                      style={{
                        background: `radial-gradient(circle at center, ${capability.color}25 0%, ${capability.color}10 100%)`,
                        border: `1.5px solid ${capability.color}40`,
                        boxShadow: `0 0 20px -5px ${capability.color}60, inset 0 1px 2px rgba(255, 255, 255, 0.1)`,
                      }}
                    >
                      <IconComponent className="card-hover-icon w-7 h-7" strokeWidth={1.5} style={{ color: capability.color }} />
                    </div>

                    {/* Center-left - Title */}
                    <h3
                      className="text-lg sm:text-xl md:text-2xl flex-1"
                      style={{
                        color: isOpen ? capability.color : '#8b5cf6',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {capability.title}
                    </h3>

                    {/* Right - Chevron */}
                    <div
                      className="transition-all duration-400 flex-shrink-0"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: isOpen ? capability.color : 'rgba(139, 92, 246, 0.6)',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0">
                      <div
                        className="pl-4 sm:pl-[76px] pr-2 sm:pr-8"
                        style={{
                          borderTop: `1px solid ${capability.color}15`,
                          paddingTop: '16px',
                        }}
                      >
                        <p
                          className="text-sm sm:text-base leading-relaxed"
                          style={{
                            color: 'rgba(255, 255, 255, 0.65)',
                            lineHeight: '1.7',
                          }}
                        >
                          {capability.description}
                        </p>
                      </div>
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
