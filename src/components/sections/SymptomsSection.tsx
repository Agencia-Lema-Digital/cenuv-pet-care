import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AlertCircle, Droplets, Heart, Activity, Scale, Brain, Clock } from "lucide-react";
import vetCatExam from "@/assets/images/vet-cat-exam.jpg";
const symptoms = [{
  icon: Droplets,
  text: "Dificuldade para urinar"
}, {
  icon: AlertCircle,
  text: "Urina com sangue"
}, {
  icon: Activity,
  text: "Vômitos frequentes"
}, {
  icon: Heart,
  text: "Falta de apetite"
}, {
  icon: Scale,
  text: "Perda de peso"
}, {
  icon: Brain,
  text: "Mudanças no comportamento"
}, {
  icon: Clock,
  text: "Idas constantes à caixa de areia"
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
const SymptomsSection = () => {
  return <section id="sintomas" className="section-padding bg-white relative overflow-hidden" aria-labelledby="symptoms-heading">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cenuv-peach/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
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
            <img alt="Veterinário examinando gato laranja com estetoscópio" className="w-full h-auto rounded-3xl image-premium" src="/lovable-uploads/01f768f3-ddbf-48fc-b20f-cfb21cb93194.jpg" />
          </motion.div>

          {/* Content Column */}
          <div>
            <motion.h2 id="symptoms-heading" className="heading-lg text-foreground mb-8 font-sans" initial={{
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
              Você já percebeu algum desses sinais no seu pet?
            </motion.h2>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
            once: true
          }}>
              {symptoms.map((symptom, index) => <motion.div key={index} className="symptom-item" variants={fadeInUp} transition={{
              duration: 0.4
            }}>
                  <div className="w-12 h-12 rounded-xl bg-cenuv-peach flex items-center justify-center flex-shrink-0">
                    <symptom.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{symptom.text}</span>
                </motion.div>)}
            </motion.div>

            <motion.div className="bg-gradient-to-r from-cenuv-peach to-cenuv-cream rounded-2xl p-6 border-l-4 border-primary mb-8" initial={{
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
              <p className="body-lg text-foreground">
                Esses sinais podem indicar <strong>problemas sérios nos rins ou no sistema urinário</strong>. Quanto antes um profissional especializado lhe atender, maiores são as chances de controle e qualidade de vida.
              </p>
            </motion.div>

            <motion.div className="flex justify-center lg:justify-start" initial={{
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
              <WhatsAppButton text="Falar com um Profissional especializado" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default SymptomsSection;