import { Unlock, Eye, Wrench, AlertTriangle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function SecurityGap() {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="security">
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
              <span className="text-sm uppercase tracking-widest">THE Security Gap</span>
            </div>
          <h2
            className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4 md:mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >
            Security Was Built for Traditional Software.
            <span className="block mt-2 md:mt-4" style={{ color: '#8b5cf6' }}>
              Agents Break Every Assumption.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Perimeter defenses, static policies and identity frameworks cannot keep pace with autonomous agents.
            The threat model has fundamentally changed.
          </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: Unlock,
              title: 'No Persistent Identity',
              description:
                'Agents lack stable identity attributes or physical factors for authentication because they are spawned and destroyed dynamically.',
              color: '#8b5cf6',
            },
            {
              icon: Eye,
              title: 'Invisible Decision Chains',
              description:
                'Multi-agent reasoning and planning occur entirely outside the visibility of traditional monitoring tools.',
              color: '#8b5cf6',
            },
            {
              icon: Wrench,
              title: 'Uncontrolled Tool Access',
              description:
                'Agents can call APIs, read databases and trigger external services far beyond what static permission models expected.',
              color: '#8b5cf6',
            },
            {
              icon: AlertTriangle,
              title: 'Continuous Attack Surface',
              description:
                'Every new agent interaction, memory update and tool call creates fresh vectors for exploitation.',
              color: '#8b5cf6',
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={item.title} delay={100 * index} className="h-full">
                <div
                  className="card-hover-glow p-6 sm:p-8 rounded-3xl h-full flex flex-col"
                style={{
                  border: `1px solid ${item.color}20`,
                  background: `linear-gradient(135deg, ${item.color}08 0%, transparent 100%)`,
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <IconComponent className="card-hover-icon w-8 sm:w-10 h-8 sm:h-10 mb-3 sm:mb-4 flex-shrink-0" strokeWidth={1.5} style={{ color: item.color }} />
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 flex-shrink-0" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm flex-grow" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {item.description}
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
