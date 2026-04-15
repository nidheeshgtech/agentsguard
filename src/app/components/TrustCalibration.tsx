import { OctagonX, Search, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function TrustCalibration() {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="risk">
      {/* Purple radial gradient backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 90% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)',
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
            <span className="text-sm uppercase tracking-widest">Risk in Motion</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >
            Tiered Decision Authority
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            The Right Response at Every Risk Level
          </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          <ScrollReveal delay={100}>
            <div
              className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl"
            style={{
              border: '2px solid rgba(139, 92, 246, 0.3)',
              background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              backdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#8b5cf6' }}
                >
                  <OctagonX className="card-hover-icon w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl mb-2 sm:mb-3" style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}>
                  Hard Stop
                </h3>
                <p className="text-base sm:text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Immediate termination—agent action is blocked, quarantined and logged for forensic review.
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div
              className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl"
              style={{
                border: '2px solid rgba(139, 92, 246, 0.3)',
              background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              backdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#8b5cf6' }}
                >
                  <Search className="card-hover-icon w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="text-2xl sm:text-3xl mb-2 sm:mb-3"
                  style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}
                >
                  Reasoner and Policy Engine Confirmation
                </h3>
                <p className="text-base sm:text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  High-stakes actions are escalated for explicit review by a security reasoning and policy
                  engine before proceeding.
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div
              className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl"
              style={{
                border: '2px solid rgba(139, 92, 246, 0.3)',
              background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              backdropFilter: 'blur(16px)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#8b5cf6' }}
                >
                  <CheckCircle2 className="card-hover-icon w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="text-2xl sm:text-3xl mb-2 sm:mb-3"
                  style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}
                >
                  Auto-Approve with Audit
                </h3>
                <p className="text-base sm:text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Routine, low-risk actions proceed automatically with full audit-trail logging.
                </p>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
