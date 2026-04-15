import { Link } from 'react-router';
import { useState } from 'react';
import logo from '../../imports/image-1.png';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Security', to: '/#security' },
    { label: 'Architecture', to: '/#architecture' },
    { label: 'About Us', to: '/about' },
  ];

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-w-[1280px]">
      <nav
        className="rounded-2xl sm:rounded-full px-4 sm:px-5 md:px-7 py-3 flex items-center justify-between gap-4"
        style={{
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 92, 246, 0.25)',
        }}
      >
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logo} alt="AgentsGuard" className="h-8 sm:h-10" />
        </Link>

        <div className="hidden xl:flex items-center gap-3.5 flex-1 justify-center min-w-0">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link text-[12px] uppercase tracking-[0.1em] text-neutral-400 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/#cta"
            className="px-4 sm:px-6 py-2 bg-white text-black rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            Get Started
          </Link>
          {/* Hamburger - mobile only */}
          <button
            className="xl:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 flex-shrink-0"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{
                transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                opacity: mobileOpen ? 1 : 0.8,
              }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 0.8 }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-300"
              style={{
                transform: mobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                opacity: mobileOpen ? 1 : 0.8,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="xl:hidden mt-2 overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? '200px' : '0px',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div
          className="rounded-2xl px-4 py-4 flex flex-col gap-1"
          style={{
            background: 'rgba(10, 10, 10, 0.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm uppercase tracking-widest rounded-xl transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.62);
          font-size: 12px;
          letter-spacing: 0.1em;
          transition: color 260ms cubic-bezier(0.23, 1, 0.32, 1), transform 260ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .nav-link:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }
      `}</style>
    </header>
  );
}
