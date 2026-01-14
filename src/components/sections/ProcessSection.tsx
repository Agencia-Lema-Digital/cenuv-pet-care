import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageCircle, Phone, Calendar, Stethoscope, FileCheck } from "lucide-react";

const steps = [
  { number: 1, text: "Você fala conosco pelo WhatsApp", icon: MessageCircle },
  { number: 2, text: "Nossa equipe faz a primeira orientação", icon: Phone },
  { number: 3, text: "Agendamos a consulta", icon: Calendar },
  { number: 4, text: "Seu pet passa por avaliação especializada", icon: Stethoscope },
  { number: 5, text: "Você recebe diagnóstico e direcionamento de tratamento", icon: FileCheck },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const ProcessSection = () => {
  return (
    <section id="processo" className="section-padding bg-white relative overflow-hidden" aria-labelledby="process-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cenuv-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cenuv-peach/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-narrow relative z-10">
        <motion.h2 
          id="process-heading"
          className="heading-lg text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Como funciona o atendimento no CENUV?
        </motion.h2>

        <motion.div 
          className="relative max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting line */}
          <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-cenuv-coral to-cenuv-orange hidden md:block" />
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-6 relative"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <div className="step-number relative z-10 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 card-premium flex items-center gap-4">
                  <step.icon className="w-6 h-6 text-cenuv-coral flex-shrink-0" />
                  <p className="text-foreground body-lg font-medium">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <WhatsAppButton text="Iniciar atendimento agora" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
