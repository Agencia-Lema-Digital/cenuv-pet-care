import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Award, Zap, Users, HeartHandshake } from "lucide-react";
import vetUltrasound from "@/assets/images/vet-ultrasound.jpg";
const benefits = [{
  icon: Award,
  text: "Atendimento 100% especializado em nefrologia e urologia veterinária"
}, {
  icon: CheckCircle,
  text: "Casos que outras clínicas não conseguem resolver"
}, {
  icon: Zap,
  text: "Tratamentos modernos e acompanhamento contínuo"
}, {
  icon: Users,
  text: "Diagnóstico rápido e preciso"
}, {
  icon: HeartHandshake,
  text: "Atendimento humano, claro e responsável"
}];
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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};
const AuthoritySection = () => {
  return <section id="diferenciais" className="section-padding bg-cenuv-peach relative overflow-hidden" aria-labelledby="authority-heading">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        <motion.h2 id="authority-heading" className="heading-lg text-foreground text-center mb-12 font-sans" initial={{
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
          Por que o CENUV é diferente das clínicas comuns?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Benefits Column */}
          <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {benefits.map((benefit, index) => <motion.div key={index} className="card-premium flex items-start gap-4" variants={fadeInUp} transition={{
            duration: 0.4
          }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-cenuv-coral/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground body-lg font-medium pt-3">{benefit.text}</p>
              </motion.div>)}
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
            <img src={vetUltrasound} alt="Veterinários realizando ultrassom em cachorro" className="w-full h-auto rounded-3xl image-premium" />
          </motion.div>
        </div>

        <motion.div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border-l-4 max-w-3xl mx-auto border-primary" style={{
        boxShadow: "0 4px 24px -4px hsl(345 43% 22% / 0.08)"
      }} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
          <p className="body-lg text-foreground italic text-center font-sans font-medium">
            Aqui você não encontra atendimento genérico. O CENUV existe exclusivamente para cuidar 
            dos problemas renais e urinários do seu pet.
          </p>
        </motion.div>

        <motion.div className="flex justify-center mt-10" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }}>
          <WhatsAppButton text="Agendar consulta no WhatsApp" />
        </motion.div>
      </div>
    </section>;
};
export default AuthoritySection;