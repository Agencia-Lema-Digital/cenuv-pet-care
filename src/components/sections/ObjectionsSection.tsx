import { motion } from "framer-motion";
import { HelpCircle, ChevronRight } from "lucide-react";

const objections = [
  {
    question: "Já passei em outras clínicas e não resolveu",
    answer: "Justamente por isso o CENUV existe. Aqui o foco é exclusivo em rim e sistema urinário."
  },
  {
    question: "Tenho medo de descobrir algo grave",
    answer: "Quanto antes descobrir, maiores são as chances de tratamento e controle."
  },
  {
    question: "E se for caro?",
    answer: "O custo de não tratar costuma ser muito maior."
  },
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

const ObjectionsSection = () => {
  return (
    <section id="duvidas" className="section-padding bg-cenuv-cream relative overflow-hidden" aria-labelledby="objections-heading">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cenuv-peach/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-narrow relative z-10">
        <motion.h2 
          id="objections-heading"
          className="heading-lg text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ainda está em dúvida?
        </motion.h2>

        <motion.div 
          className="space-y-6 max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {objections.map((objection, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border-l-4 border-cenuv-orange"
              style={{ boxShadow: "0 4px 24px -4px hsl(345 43% 22% / 0.08)" }}
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cenuv-orange/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-cenuv-orange" />
                </div>
                <div className="flex-1">
                  <p className="body-lg font-semibold text-foreground mb-3">
                    "{objection.question}"
                  </p>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground body-lg">
                      {objection.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
