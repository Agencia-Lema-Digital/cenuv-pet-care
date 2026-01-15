import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Shield, Stethoscope } from "lucide-react";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Full background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/lovable-uploads/a301d8ec-265b-457d-9b35-73f035aa7586.jpg')`,
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="container-wide relative z-10 section-padding">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <motion.div 
            className="text-center lg:text-left" 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible"
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight" 
              variants={fadeInUp} 
              transition={{ duration: 0.6 }}
            >
              <span className="block">Seu pet não pode esperar.</span>
              <span className="block text-cenuv-peach mt-2">Quando o rim sofre, cada minuto importa.</span>
            </motion.h1>

            <motion.p 
              className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed" 
              variants={fadeInUp} 
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              O CENUV é um centro veterinário especializado em doenças renais e urinárias em cães e gatos. 
              Aqui seu pet é atendido por quem realmente entende do problema.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="mb-10" 
              variants={fadeInUp} 
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <WhatsAppButton text="FALAR COM O ESPECIALISTA AGORA" variant="large" />
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6" 
              variants={fadeInUp} 
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-10 h-10 rounded-full bg-cenuv-coral/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm md:text-base font-medium">Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-10 h-10 rounded-full bg-cenuv-coral/30 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm md:text-base font-medium">Especialistas</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-10 h-10 rounded-full bg-cenuv-coral/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm md:text-base font-medium">Diagnóstico preciso</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
