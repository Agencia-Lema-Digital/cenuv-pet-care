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
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[280px] bg-primary shadow-xl md:hidden"
              aria-label="Menu mobile"
            >
              <div className="flex items-center justify-between p-4 border-b border-primary-foreground/20">
                <img 
                  src={logo} 
                  alt="CENUV" 
                  className="h-10 w-auto brightness-0 invert" 
                />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <ul className="py-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-4 px-6 text-primary-foreground text-lg font-medium border-b border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="px-6 pt-6"
                >
                  <a
                    href="#contato"
                    onClick={closeMenu}
                    className="block w-full text-center bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full px-6 py-3 transition-all duration-300"
                  >
                    Agendar Consulta
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
