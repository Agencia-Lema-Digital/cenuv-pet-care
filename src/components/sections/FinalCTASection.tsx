import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Shield, Stethoscope } from "lucide-react";
import vetCatCloseup from "@/assets/images/vet-cat-closeup.jpg";
const FinalCTASection = () => {
  return <section id="contato" className="section-padding bg-gradient-to-br from-primary via-cenuv-dark-medium to-cenuv-dark-deep text-primary-foreground relative overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cenuv-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cenuv-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div className="order-2 lg:order-1" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <img alt="Veterinário examinando gato com carinho e profissionalismo" className="w-full h-auto rounded-3xl" style={{
            boxShadow: "0 8px 32px -8px rgba(0,0,0,0.4)"
          }} src="/lovable-uploads/8ac88f69-96a8-4c7f-9b59-cc544c5931d0.png" />
          </motion.div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.h2 id="final-cta-heading" className="heading-lg mb-6 font-sans" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              Seu pet precisa de ajuda.
            </motion.h2>
            
            <motion.p className="text-xl md:text-2xl mb-10 opacity-95" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.15
          }}>
              Você não precisa enfrentar isso sozinho.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <WhatsAppButton text="FALAR COM O CENUV NO WHATSAPP AGORA" variant="large" />
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.45
          }}>
              <div className="flex items-center gap-2 opacity-90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">Atendimento especializado</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">Humanizado</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm md:text-base">Com responsabilidade médica</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;