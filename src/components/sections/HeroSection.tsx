import { motion } from "framer-motion";
import logo from "@/assets/logo-cenuv.png";
import heroImage from "@/assets/images/hero-vet-dog.jpg";
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
  return <section className="min-h-screen flex items-center section-padding relative overflow-hidden bg-gradient-to-br from-cenuv-cream via-cenuv-peach to-cenuv-cream">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cenuv-gold/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cenuv-coral/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div className="order-2 lg:order-1 text-center lg:text-left" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 className="heading-xl text-foreground mb-6" variants={fadeInUp} transition={{
            duration: 0.6
          }}>
              <span className="text-gradient font-sans font-semibold">Seu pet não pode esperar.</span>
              <br />
              <span className="text-cenuv-text-muted font-sans">Quando o rim sofre, cada minuto importa.</span>
            </motion.h1>

            <motion.p className="body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8" variants={fadeInUp} transition={{
            duration: 0.6,
            delay: 0.15
          }}>
              O CENUV é um centro veterinário especializado em doenças renais e urinárias em cães e gatos. 
              Aqui seu pet é atendido por quem realmente entende do problema.
            </motion.p>

            {/* CTA Button */}
            <motion.div className="mb-10" variants={fadeInUp} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <WhatsAppButton text="FALAR COM O ESPECIALISTA AGORA" variant="large" />
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex-wrap justify-center flex-row flex items-center lg:justify-start gap-[3px] px-0 my-0" variants={fadeInUp} transition={{
            duration: 0.6,
            delay: 0.45
          }}>
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm md:text-base font-medium">Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm md:text-base font-medium">Especialistas</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cenuv-coral" />
                </div>
                <span className="text-sm md:text-base font-medium text-center">Diagnóstico preciso</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div className="order-1 lg:order-2" initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="relative">
              <img alt="Veterinária examinando cachorro com carinho em clínica moderna" className="w-full h-auto rounded-3xl image-premium object-fill border-0 border-dotted shadow-none" src="/lovable-uploads/d5fa911f-f350-4a08-a46a-1651c83c864f.png" />
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cenuv-gold to-cenuv-orange rounded-2xl opacity-80 blur-sm" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cenuv-coral to-primary rounded-full opacity-60 blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;