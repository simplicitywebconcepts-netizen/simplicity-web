export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 116" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0089D6" /> {/* Vivid blue */}
          <stop offset="40%" stopColor="#4A47D4" /> {/* Indigo blend */}
          <stop offset="100%" stopColor="#7C3AED" /> {/* Purple */}
        </linearGradient>
      </defs>
      <path 
        fill="url(#logo-gradient)" 
        d="M50 0 L93.3 25 V50 L50 25 L26.7 38.5 V63.5 L50 77 L93.3 52 V91 L50 116 L6.7 91 V66 L50 91 L73.3 77.5 V52.5 L50 39 L6.7 64 V25 Z" 
      />
    </svg>
  );
}
