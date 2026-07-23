import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-pattern text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 max-w-lg">
        <p className="font-display font-bold text-[8rem] md:text-[12rem] leading-none text-gradient-gold">
          404
        </p>
        <h1 className="font-display font-bold text-2xl md:text-3xl mt-4">Page not found</h1>
        <p className="text-white/60 text-lg mt-4 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline">
            <Search className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 text-sm mt-8 hover:text-gold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
