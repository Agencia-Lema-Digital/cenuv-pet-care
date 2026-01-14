import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Shield, Stethoscope } from "lucide-react";
import symbolMain from "@/assets/elements/symbol-main.png";
import blobWineDark from "@/assets/elements/blob-wine-dark.png";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src={blobWineDark} 
        alt="" 
        className="absolute -top-32 -right-32 w-80 h-80 opacity-20 pointer-events-none"
      />
      <img 
        src={symbolMain} 
        alt="" 
        className="absolute -bottom-16 -left-16 w-48 opacity-10 pointer-events-none"
      />
      
      <div className="container-narrow relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Seu pet precisa de ajuda.
        </h2>
        
        <p className="text-xl md:text-2xl mb-10 opacity-95">
          Você não precisa enfrentar isso sozinho.
        </p>

        <WhatsAppButton 
          text="FALAR COM O CENUV NO WHATSAPP AGORA" 
          variant="large"
        />

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 opacity-90">
            <Stethoscope className="w-5 h-5" />
            <span className="text-sm md:text-base">Atendimento especializado</span>
          </div>
          <div className="flex items-center gap-2 opacity-90">
            <Heart className="w-5 h-5" />
            <span className="text-sm md:text-base">Humanizado</span>
          </div>
          <div className="flex items-center gap-2 opacity-90">
            <Shield className="w-5 h-5" />
            <span className="text-sm md:text-base">Com responsabilidade médica</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
