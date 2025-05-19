
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  // Check if the className includes "text-white" which indicates we're in the non-scrolled state (blue header)
  const isWhiteText = className.includes("text-white");
  
  return (
    <div className={`${className} flex items-center`}>
      <div className={`font-bold text-xl md:text-2xl ${isWhiteText ? "text-white" : "text-primary"}`}>
        <span>Oestesul</span>
        <span className={isWhiteText ? "text-white" : "text-accent-foreground"}> Refrigeração</span>
      </div>
    </div>
  );
};

export default Logo;
