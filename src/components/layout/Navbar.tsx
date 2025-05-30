
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import { navItems } from "./navbarData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-primary text-white py-4 border-b-2 border-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className={`h-12 w-auto ${!scrolled ? "text-white" : ""}`} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 font-medium hover:opacity-80 transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className={`ml-4 ${!scrolled ? "bg-white text-primary hover:bg-white/90" : ""}`} asChild>
            <Link to="/contato" className="flex items-center gap-2">
              <Phone size={18} />
              <span className="hidden lg:inline">Orçamento</span>
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-3 text-primary hover:bg-accent rounded-md transition-colors"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 w-full" asChild>
              <Link to="/contato" className="flex items-center justify-center gap-2" onClick={toggleMenu}>
                <Phone size={18} />
                <span>Solicite um Orçamento</span>
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
