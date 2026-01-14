import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";
import happyPetOwner from "@/assets/images/happy-pet-owner.jpg";
const SocialProofSection = () => {
  return <section className="section-padding bg-gradient-to-br from-cenuv-gold/30 via-cenuv-peach to-cenuv-cream relative overflow-hidden" aria-labelledby="social-proof-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div className="text-center lg:text-left" initial={{
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6">
              <Sparkles className="w-8 h-8 text-cenuv-orange" />
            </div>
            
            <h2 id="social-proof-heading" className="heading-lg text-foreground mb-6 font-sans">
              Todos os dias recebemos tutores que chegaram aqui sem esperança.
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground font-medium mb-8">
              E hoje veem seus pets com qualidade de vida.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 inline-block">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-muted-foreground italic body-lg">
                "Não tenho palavras para agradecer. Minha gatinha voltou a ter qualidade de vida."
              </p>
              <p className="text-sm text-muted-foreground mt-3 font-medium">— Tutora do CENUV</p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="relative">
              <img alt="Tutora feliz abraçando seu cachorro recuperado" className="w-full h-auto rounded-3xl image-premium" src="/lovable-uploads/94ad62ff-82e9-4c9b-ae2f-aef6735a2405.jpg" />
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-whatsapp to-whatsapp-hover rounded-2xl opacity-20 blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SocialProofSection;