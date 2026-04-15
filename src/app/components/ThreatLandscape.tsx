import { Syringe, Ban, TrendingDown, RotateCw, Biohazard } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useState } from 'react';

export function ThreatLandscape() {
  const [activeTab, setActiveTab] = useState(0);
  const threats = [
    {
      title: 'Prompt Injection',
      description:
        'Attacks embedded in user inputs, rogue agents, compromised APIs and retrieval-augmented generation (RAG) content hijack agent intent and redirect actions at runtime.',
      icon: Syringe,
      color: '#8b5cf6',
    },
    {
      title: 'Unauthenticated Access',
      description:
        'Agents that access systems without verified identity enable silent data exfiltration and create compliance violations.',
      icon: Ban,
      color: '#8b5cf6',
    },
    {
      title: 'Behavior Drift',
      description:
        'Agents learn unsafe shortcuts over time, degrading the quality and safety of responses and real-world actions invisibly.',
      icon: TrendingDown,
      color: '#8b5cf6',
    },
    {
      title: 'Deadlocks & Livelocks',
      description:
        'Multi-agent restriction conflicts create circular exclusions and unrecoverable states that can become destructive at scale.',
      icon: RotateCw,
      color: '#8b5cf6',
    },
    {
      title: 'Data Poisoning',
      description:
        'Corrupted inputs propagate through tool chains and memory stores, silently corrupting agent reasoning across downstream systems.',
      icon: Biohazard,
      color: '#8b5cf6',
    },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 group scroll-mt-32" id="threat">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-xl mx-auto">
          <div
            className="inline-block px-6 py-2 mb-6 rounded-full border"
            style={{
              borderColor: '#8b5cf6',
              color: '#8b5cf6',
            }}
          >
            <span className="text-sm uppercase tracking-widest">Threat Landscape</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >
            Critical Failure Modes in Production Agentic Systems
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-3 px-4" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
            Active, observed patterns in deployed agentic systems
          </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation - Pill-style segmented controls */}
        <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-[1200px] mx-auto px-4 overflow-x-auto scrollbar-hide pb-2">
          {threats.map((threat, index) => (
            <button
              key={threat.title}
              onClick={() => setActiveTab(index)}
              className="px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap relative flex-shrink-0"
              style={{
                background: activeTab === index
                  ? `linear-gradient(135deg, ${threat.color} 0%, ${threat.color}dd 100%)`
                  : 'rgba(255, 255, 255, 0.03)',
                border: activeTab === index
                  ? `2px solid ${threat.color}`
                  : '2px solid rgba(255, 255, 255, 0.1)',
                color: activeTab === index ? '#ffffff' : 'rgba(139, 92, 246, 0.6)',
                boxShadow: activeTab === index
                  ? `0 0 28px -4px ${threat.color}90, 0 4px 12px -2px ${threat.color}50, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                  : '0 2px 8px rgba(0, 0, 0, 0.2)',
                fontWeight: activeTab === index ? 600 : 500,
                transform: activeTab === index ? 'translateY(-2px)' : 'translateY(0)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {threat.title}
            </button>
          ))}
        </div>

        {/* Content Card - Max width constrained */}
        <div className="max-w-[1000px] mx-auto px-4">
          {threats.map((threat, index) => {
            const isActive = activeTab === index;
            if (!isActive) return null;

            return (
              <div
                key={threat.title}
                className="transition-all duration-500"
                style={{
                  opacity: 1,
                  transform: 'translateY(0) scale(1)',
                }}
              >
                <div
                  className="card-hover-glow rounded-[20px] sm:rounded-[24px] relative overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at top left, ${threat.color}15 0%, rgba(10, 10, 15, 0.8) 100%)`,
                    border: `1.5px solid ${threat.color}40`,
                    backdropFilter: 'blur(24px)',
                    boxShadow: `0 12px 40px -8px ${threat.color}50, 0 0 0 1px ${threat.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                  }}
                >
                  <div className="p-6 sm:p-10 md:p-14">
                    <div className="flex flex-col items-start gap-4 sm:gap-7">
                      <div className="flex-1 text-left">
                        <h4
                          className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 leading-tight"
                          style={{
                            color: '#ffffff',
                            fontFamily: 'var(--font-heading)',
                            letterSpacing: '-0.025em',
                          }}
                        >
                          {threat.title}
                        </h4>
                        <p
                          className="text-sm sm:text-base md:text-xl leading-relaxed"
                          style={{ color: 'rgba(255, 255, 255, 0.78)', fontWeight: 300 }}
                        >
                          {threat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
