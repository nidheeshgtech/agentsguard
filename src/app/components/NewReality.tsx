import { ScrollReveal } from './ScrollReveal';

export function NewReality() {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="features">
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
              <span className="text-sm uppercase tracking-widest">THE NEW REALITY</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.03em',
              }}
            >
              AI Agents Are the New Workforce
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <ScrollReveal delay={100}>
            <div
              className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl h-full"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <h3
              className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#8b5cf6',
              }}
            >
              From Static Software to Autonomous Action
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Traditional software waits for instructions, but agentic systems plan, decide and act autonomously
              across interconnected tools at machine speed. They call APIs, access live data, spawn sub-agents
              and perform real-world actions without human checkpoints. This is already happening across finance,
              healthcare, logistics and software development.
            </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
              }}
            >
              What Makes Agents Different
            </h3>

            <div
              className="card-hover-glow p-4 sm:p-6 rounded-xl transition-all"
              style={{
                background: 'rgba(139, 92, 246, 0.05)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <h4 className="text-lg sm:text-xl mb-2" style={{ color: '#8b5cf6' }}>
                They plan dynamically
              </h4>
              <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Agents call tools, access data and take actions based on context rather than pre-written logic.
              </p>
            </div>

            <div
              className="card-hover-glow p-4 sm:p-6 rounded-xl transition-all"
              style={{
                background: 'rgba(139, 92, 246, 0.05)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <h4 className="text-lg sm:text-xl mb-2" style={{ color: '#8b5cf6' }}>
                They scale instantly
              </h4>
              <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Agents can be created, replicated or terminated at runtime; there is no persistent identity.
              </p>
            </div>

            <div
              className="card-hover-glow p-4 sm:p-6 rounded-xl transition-all"
              style={{
                background: 'rgba(139, 92, 246, 0.05)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <h4 className="text-lg sm:text-xl mb-2" style={{ color: '#8b5cf6' }}>
                They reason at runtime
              </h4>
              <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Agent behaviour shifts with memory, context and interactions, creating continuously evolving attack surfaces.
              </p>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
