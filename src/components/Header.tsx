import { useState, useEffect } from "react";

const navLinks = [{
  href: "#sintomas",
  label: "Sintomas"
}, {
  href: "#diferenciais",
  label: "Diferenciais"
}, {
  href: "#telemedicina",
  label: "Telemedicina"
}, {
  href: "#processo",
  label: "Como Funciona"
}];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm"}`}>
      <div className="container-wide flex items-center justify-between md:justify-between justify-center py-4 px-4 md:px-12">
        <img alt="CENUV - Centro de Nefrologia e Urologia Veterinária" className="h-12 md:h-16 w-auto" src="/lovable-uploads/729e0dbf-16fe-43b2-9190-585c853a5012.png" />
        
        {/* Navigation - hidden on mobile, visible on tablet/desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              {link.label}
            </a>)}
          <a href="#contato" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Agendar
          </a>
        </nav>
      </div>
    </header>;
};
export default Header;