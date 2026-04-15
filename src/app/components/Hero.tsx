import { ShinyBorderButton } from './ShinyBorderButton';
import { Infinity, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6 md:px-12 pt-32 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div
            className="inline-block px-4 py-1.5 mb-6 rounded-full"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider" style={{ color: '#8b5cf6' }}>
              Runtime Security for Agentic AI
            </span>
          </div>
        </div>

        <h1
          className="text-4xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-7xl mb-6 md:mb-8 animate-fade-in-up px-2"
          style={{
            animationDelay: '0.1s',
            lineHeight: '1.05',
            fontFamily: 'var(--font-heading)',
            marginInline: 'auto',
          }}
        >
          <span className="block mb-1 sm:mb-2 md:mb-3">AgentsGuard</span>
          <span className="block shimmer-text mb-1 sm:mb-2 md:mb-3">The Control Plane</span>
          <span className="block text-white/80">for Agentic AI</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed animate-fade-in-up px-4"
          style={{
            animationDelay: '0.2s',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'var(--font-body)',
          }}
        >
          Software has evolved from merely responding to requests to acting and collaborating.
          AgentsGuard is the runtime security layer built for autonomous agents.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up px-4"
          style={{ animationDelay: '0.3s' }}
        >
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
            Read the Brief →
          </button>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-24 mb-12">

          <h4 className="text-1xl sm:text-3xl md:text-4xl mb-2" >Trust layer between intent and execution</h4>

        </div>

        <div
          className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in-up px-4"
          style={{ animationDelay: '0.4s' }}
        >
          <div
            className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-center"
            style={{
              border: '1px solid rgba(139, 92, 246, 0.3)',
              background: 'rgba(255, 255, 255, 0.02)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="flex justify-center mb-4">
              <Shield className="card-hover-icon w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
            </div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Security</div>
            <div className="text-sm sm:text-base md:text-lg text-white leading-tight">Deny-by-default enforcement</div>
          </div>

          <div
            className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-center"
            style={{
              border: '1px solid rgba(139, 92, 246, 0.3)',
              background: 'rgba(255, 255, 255, 0.02)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="flex justify-center mb-4">
              <Zap className="card-hover-icon w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
            </div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Speed</div>
            <div className="text-sm sm:text-base md:text-lg text-white leading-tight">Machine-speed autonomous action</div>
          </div>

          <div
            className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-center"
            style={{
              border: '1px solid rgba(139, 92, 246, 0.3)',
              background: 'rgba(255, 255, 255, 0.02)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="flex justify-center mb-4">
              <Infinity className="card-hover-icon w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} style={{ color: '#8b5cf6' }} />
            </div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Scale</div>
            <div className="text-sm sm:text-base md:text-lg text-white leading-tight">Instant agent verification at run time</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #8b5cf6 0%, #8b5cf6 25%, #ffffff 50%, #8b5cf6 75%, #8b5cf6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
