import { Link } from 'react-router';
import logo from '../../imports/logo-agents_guard.png';

export function Footer() {
  const sectionLinks = [
    { label: 'Security', to: '/#security' },
    { label: 'Architecture', to: '/#architecture' },
    { label: 'About Us', to: '/about' },
  ];

  return (
    <footer className="relative z-10 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="AgentsGuard" className="h-10" />
            </Link>
            <p className="text-sm text-neutral-400">
              The Control Plane for Agentic AI
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {sectionLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link text-sm text-neutral-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            © 2026 AgentsGuard. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          position: relative;
          color: rgba(212, 212, 212, 0.9);
          transition:
            color 240ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 240ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.2rem;
          width: 100%;
          height: 1px;
          background: rgba(139, 92, 246, 0.7);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 240ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }

        .footer-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
}
