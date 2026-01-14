import logo from "@/assets/logo-cenuv.png";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm py-4 px-4 md:px-12 shadow-sm sticky top-0 z-50 border-b border-border/30">
      <div className="container-wide flex items-center justify-between">
        <img 
          src={logo} 
          alt="CENUV - Centro de Nefrologia e Urologia Veterinária" 
          className="h-12 md:h-16 w-auto" 
        />
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          <a href="#sintomas" className="text-foreground/80 hover:text-foreground font-medium transition-colors">Sintomas</a>
          <a href="#diferenciais" className="text-foreground/80 hover:text-foreground font-medium transition-colors">Diferenciais</a>
          <a href="#processo" className="text-foreground/80 hover:text-foreground font-medium transition-colors">Como Funciona</a>
          <a href="#contato" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity">Agendar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
