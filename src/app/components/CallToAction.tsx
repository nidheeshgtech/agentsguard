import { ShinyBorderButton } from './ShinyBorderButton';
import { Globe, Lock, Rocket } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function CallToAction() {
  return (
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 scroll-mt-32" id="cta">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-5xl mx-auto">
          
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 px-4"
            style={{
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              lineHeight: '1',
            }}
          >
            Make Agentic AI Safe in Production
            <span className="block mt-4 md:mt-6" style={{ color: '#8b5cf6' }}>
              — Starting Now
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            The agentic AI transition is underway. Adopt runtime enforcement before agents operate outside
            controlled boundaries. AgentsGuard is the control plane enabling safe deployment of autonomous AI at
            enterprise scale.
          </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto">
          <ScrollReveal delay={100} className="h-full">
            <div
              className="card-hover-glow p-6 sm:p-10 rounded-3xl h-full flex flex-col"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <Globe className="card-hover-icon w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 flex-shrink-0" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
              <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 flex-shrink-0" style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}>
                Unified Control Plane
              </h3>
              <p className="flex-grow text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                One enforcement layer across all frameworks, clouds and tool ecosystems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="h-full">
            <div
              className="card-hover-glow p-6 sm:p-10 rounded-3xl h-full flex flex-col"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <Lock className="card-hover-icon w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 flex-shrink-0" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
              <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 flex-shrink-0" style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}>
                Zero-Trust by Design
              </h3>
              <p className="flex-grow text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Deny-by-default policies, cryptographic identity and continuous policy evaluation from day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="h-full">
            <div
              className="card-hover-glow p-6 sm:p-10 rounded-3xl h-full flex flex-col"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <Rocket className="card-hover-icon w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 flex-shrink-0" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
              <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 flex-shrink-0" style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}>
                Production-Ready
              </h3>
              <p className="flex-grow text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Designed to be modular, composable and scalable with evolving agentic architectures.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <ShinyBorderButton>Request a Demo</ShinyBorderButton>
          <button
            className="px-6 sm:px-10 py-3 sm:py-4 text-white rounded-full text-sm sm:text-base"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <span className="text-sm sm:text-base">Download Technical Brief →</span>
          </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
