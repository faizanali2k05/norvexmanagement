import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: 'https://linkin.bio/norvexmanagement/' },
  { label: 'Contact', path: '/contact' },
  { label: 'Join Our Team', path: '/join-team' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" aria-label="Norvex Management home" className="flex items-center gap-2 shrink-0">
            <Logo className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              const isExternal = link.path.startsWith('http');
              const classes = `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active ? 'text-gold' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`;
              
              if (isExternal) {
                return (
                  <a key={link.path} href={link.path} target="_blank" rel="noopener noreferrer" className={classes}>
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.path} to={link.path} className={classes}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-navy ${
          open ? 'max-h-screen border-t border-white/10' : 'max-h-0'
        }`}
      >
        <nav className="container-custom py-4 flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            const isExternal = link.path.startsWith('http');
            const classes = `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              active ? 'text-gold bg-white/5' : 'text-white/90 hover:bg-white/5'
            }`;

            if (isExternal) {
              return (
                <a key={link.path} href={link.path} target="_blank" rel="noopener noreferrer" className={classes}>
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.path} to={link.path} className={classes}>
                {link.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary mt-3 justify-center">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
