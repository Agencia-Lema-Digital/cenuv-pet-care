import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-cenuv.png";

const navLinks = [
  { href: "#sintomas", label: "Sintomas" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#telemedicina", label: "Telemedicina" },
  { href: "#processo", label: "Como Funciona" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on a link
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md" 
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4 px-4 md:px-12">
        <img 
          src={logo} 
          alt="CENUV - Centro de Nefrologia e Urologia Veterinária" 
          className="h-12 md:h-16 w-auto" 
        />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-cenuv-burgundy hover:bg-cenuv-peach/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <motion.nav
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-primary shadow-2xl md:hidden flex flex-col"
              aria-label="Menu mobile"
            >
              {/* Header do Menu */}
              <div className="flex items-center justify-between p-5 border-b border-primary-foreground/10">
                <img 
                  src={logo} 
                  alt="CENUV" 
                  className="h-10 w-auto brightness-0 invert" 
                />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2.5 rounded-xl bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Links do Menu */}
              <ul className="flex-1 py-6 px-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-4 py-4 px-5 bg-white/95 text-foreground rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                      style={{ fontFamily: "'Arima', cursive" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-cenuv-coral"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-5 border-t border-primary-foreground/10"
              >
                <a
                  href="#contato"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-3 w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ fontFamily: "'Arima', cursive" }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Agendar Consulta
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
