interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = 'h-10 w-auto', showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/images/Add_a_heading_Background_Removed.png"
        alt="Norvex Management logo mark"
        className={className}
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = 'none';
        }}
      />
      {showText && (
        <span className="font-display font-bold text-white text-lg leading-tight tracking-tight hidden sm:block">
          <span className="text-gold">Norvex</span>{' '}
          <span className="text-white">Management</span>
        </span>
      )}
    </div>
  );
}
