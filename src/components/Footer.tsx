import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { services } from '@/data/services';

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-navy-pattern text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Norvex Management home" className="inline-block mb-5">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Norvex Management is a digital transformation agency helping businesses grow
              through innovative design, technology, automation, and strategic marketing.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/norvexmanagement/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:norvexmanagement@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-base mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-semibold text-base mb-5">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-display font-semibold text-base mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/923405463601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-gold transition-colors group"
                >
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>+92 340 5463601</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:norvexmanagement@gmail.com"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-gold transition-colors"
                >
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>norvexmanagement@gmail.com</span>
                </a>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary mt-6">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Norvex Management. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-white/50 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/50 text-sm hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
