interface ShinyBorderButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ShinyBorderButton({ children, onClick, className = '' }: ShinyBorderButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden rounded-full ${className}`}
      style={{
        padding: '1px',
      }}
    >
      <div
        className="absolute inset-0 animate-spin-slow"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, transparent 20%, rgba(139, 92, 246, 0.3) 35%, rgba(139, 92, 246, 0.8) 45%, #8b5cf6 50%, rgba(139, 92, 246, 0.8) 55%, rgba(139, 92, 246, 0.3) 65%, transparent 80%, transparent 100%)',
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="absolute inset-0 animate-spin-slow"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, transparent 30%, rgba(139, 92, 246, 0.5) 42%, #8b5cf6 50%, rgba(139, 92, 246, 0.5) 58%, transparent 70%, transparent 100%)',
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%',
        }}
      />
      <div
        className="relative z-10 bg-[#0a0a0a] px-6 sm:px-10 py-3 sm:py-4 rounded-full"
        style={{
          transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <span className="text-white font-medium text-sm sm:text-base">{children}</span>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </button>
  );
}
