import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import vetComforting from "@/assets/images/vet-comforting-pet.jpg";
const TrustSection = () => {
  return <section className="section-padding bg-gradient-to-br from-primary via-cenuv-dark-medium to-primary text-primary-foreground relative overflow-hidden" aria-labelledby="trust-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cenuv-coral/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div initial={{
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
            <img src={vetComforting} alt="Veterinária segurando cachorro branco com carinho" className="w-full h-auto rounded-3xl" style={{
            boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3)"
          }} />
          </motion.div>

          {/* Content Column */}
          <div className="text-center lg:text-left">
            <motion.h2 id="trust-heading" className="heading-lg mb-8 font-sans" initial={{
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
              A decisão de buscar um especialista muda tudo.
            </motion.h2>

            <motion.p className="body-lg leading-relaxed mb-10 opacity-95" initial={{
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
              Nós sabemos o quanto é angustiante ver seu pet sofrer sem entender exatamente o que está acontecendo. 
              Aqui no CENUV você não é apenas mais um atendimento. Você é acolhido, orientado e acompanhado do início ao fim.
            </motion.p>

            <motion.div className="flex items-center justify-center lg:justify-start gap-4" initial={{
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
              <Heart className="w-8 h-8 text-cenuv-gold animate-pulse" fill="currentColor" />
              <p className="text-xl md:text-2xl lg:text-3xl font-display italic">
                Seu pet sente. Você sente. Nós cuidamos.
              </p>
              <Heart className="w-8 h-8 text-cenuv-gold animate-pulse" fill="currentColor" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default TrustSection;