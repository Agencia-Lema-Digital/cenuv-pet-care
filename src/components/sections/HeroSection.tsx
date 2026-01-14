import logo from "@/assets/logo-cenuv.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Shield, Stethoscope } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cenuv-dark-deep/95 via-cenuv-dark/90 to-cenuv-dark-medium/85 z-[1]" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cenuv-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-[2]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cenuv-coral/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-[2]" />
      
      <div className="container-narrow relative z-10">
        {/* Logo */}
        

        {/* Main headline */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cenuv-gold via-cenuv-orange to-cenuv-coral">Seu pet não pode esperar.</span>
            <br />
            <span className="text-cenuv-cream">Quando o rim sofre, cada minuto importa.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-cenuv-cream/80 max-w-2xl mx-auto leading-relaxed">
            O CENUV é um centro veterinário especializado em doenças renais e urinárias em cães e gatos. 
            Aqui seu pet é atendido por quem realmente entende do problema.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <WhatsAppButton text="FALAR COM O ESPECIALISTA AGORA" variant="large" />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-cenuv-cream/90">
              <Heart className="w-5 h-5 text-cenuv-coral" />
              <span className="text-sm md:text-base font-medium">Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-2 text-cenuv-cream/90">
              <Stethoscope className="w-5 h-5 text-cenuv-coral" />
              <span className="text-sm md:text-base font-medium">Especialistas</span>
            </div>
            <div className="flex items-center gap-2 text-cenuv-cream/90">
              <Shield className="w-5 h-5 text-cenuv-coral" />
              <span className="text-sm md:text-base font-medium">Diagnóstico preciso</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;