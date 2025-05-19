
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="font-bold text-xl md:text-2xl text-primary">
        <span>Oestesul</span>
        <span className="text-accent-foreground"> Refrigeração</span>
      </div>
    </div>
  );
};

export default Logo;
