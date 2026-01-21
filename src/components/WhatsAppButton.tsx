import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  text: string;
  variant?: "primary" | "large";
  className?: string;
}

const WhatsAppButton = ({ text, variant = "primary", className = "" }: WhatsAppButtonProps) => {
  const whatsappLink = "https://wa.me/5527997433130?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

  const baseClasses = "btn-whatsapp pulse-gentle";
  const variantClasses = variant === "large" 
    ? "text-xl md:text-2xl py-5 px-10" 
    : "text-base md:text-lg";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className} font-poppins uppercase`}
    >
      <FaWhatsapp className="w-6 h-6" />
      <span>{text}</span>
    </a>
  );
};

export default WhatsAppButton;
