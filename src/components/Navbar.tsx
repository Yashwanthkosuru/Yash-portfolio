import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-bold text-gradient">
          YK
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="heroOutline" size="default" className="gap-2">
            <a href="/assets/Yashwanth_AK_Cover.pdf" download>
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>

          <Button asChild variant="hero" size="default" className="gap-2">
            <a href="/assets/Yashwanth_AK_Resume.pdf" download>
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-xl p-6 animate-fade-up">
          <div className="flex flex-col gap-4">
            {/* Navigation */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Divider */}
            <div className="h-px w-full bg-white/10 my-2" />

            {/* CTA Group */}
            <div className="flex flex-col gap-3">
              <Button asChild variant="hero" size="default">
                <a
                  href="/assets/Yashwanth_AK_Resume.pdf"
                  download
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>

              <Button asChild variant="heroOutline" size="default">
                <a
                  href="/assets/Yashwanth_AK_Cover.pdf"
                  download
                  className="flex items-center justify-center gap-2 opacity-90"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;