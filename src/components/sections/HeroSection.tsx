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
  return <section className="bg-[#FFF4EB] overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Column - Left */}
          <motion.div className="order-2 md:order-1 text-center md:text-left" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 className="text-3xl font-bold text-[#2E1D1C] leading-tight md:text-4xl" variants={fadeInUp} transition={{
            duration: 0.6
          }}>
              Seu pet não pode esperar.
              <span className="block text-cenuv-coral mt-2">Quando o rim sofre,
cada minuto importa.</span>
            </motion.h1>

            <motion.p className="text-base md:text-lg text-[#7D5A4A] mt-4 max-w-md mx-auto md:mx-0 leading-relaxed" variants={fadeInUp} transition={{
            duration: 0.6,
            delay: 0.15
          }}>
              O CENUV é um centro veterinário especializado em doenças renais e urinárias em cães e gatos. 
              Aqui seu pet é atendido por quem realmente entende do problema.
            </motion.p>

            {/* CTA Button */}
            <motion.div className="mt-6 flex justify-center md:justify-start" variants={fadeInUp} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <WhatsAppButton text="FALAR COM O ESPECIALISTA AGORA" variant="large" />
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-4 mt-10 md:mt-8" variants={fadeInUp} transition={{
            duration: 0.6,
            delay: 0.45
          }}>
              <div className="flex items-center gap-2 text-[#2E1D1C]">
                <div className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm font-medium">Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-[#2E1D1C]">
                <div className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm font-medium">Profissional especializado</span>
              </div>
              <div className="flex items-center gap-2 text-[#2E1D1C]">
                <div className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm font-medium">Diagnóstico preciso</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column - Right with lateral opacity */}
          <motion.div className="order-1 md:order-2" initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="relative w-full h-[400px] md:h-[550px]">
              <img src="/lovable-uploads/a301d8ec-265b-457d-9b35-73f035aa7586.jpg" alt="Veterinária segurando pet com carinho em clínica especializada" className="w-full h-full object-cover rounded-3xl" />
              {/* Left side opacity gradient - blends into background */}
              <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#FFF4EB]/90 via-[#FFF4EB]/40 to-transparent rounded-l-3xl pointer-events-none" />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cenuv-gold to-cenuv-orange rounded-2xl opacity-70 blur-sm -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cenuv-coral to-cenuv-burgundy rounded-full opacity-50 blur-sm -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;