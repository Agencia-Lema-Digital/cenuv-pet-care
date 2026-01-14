import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/5527997433130?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-gentle"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
