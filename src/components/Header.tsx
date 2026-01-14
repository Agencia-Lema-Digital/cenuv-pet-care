import logo from "@/assets/logo-cenuv.png";
const Header = () => {
  return <header className="bg-white py-3 px-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-start justify-start">
        <img src={logo} alt="CENUV - Centro de Nefrologia e Urologia Veterinária" className="h-12 md:h-16 w-auto" />
      </div>
    </header>;
};
export default Header;