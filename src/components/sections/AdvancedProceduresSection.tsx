import { motion } from "framer-motion";
import { Stethoscope, Microscope, Activity, HeartPulse } from "lucide-react";
const procedures = [{
  icon: HeartPulse,
  title: "Diálise Veterinária",
  description: "Suporte renal especializado para pacientes com lesão renal aguda ou crônica."
}, {
  icon: Stethoscope,
  title: "Cirurgias Urológicas",
  description: "Procedimentos cirúrgicos de alta complexidade no sistema urinário."
}, {
  icon: Microscope,
  title: "Endoscopia Urinária",
  description: "Diagnóstico e tratamento minimamente invasivo do trato urinário."
}, {
  icon: Activity,
  title: "Hemogasometria",
  description: "Análise laboratorial precisa para avaliação metabólica e respiratória."
}];
const AdvancedProceduresSection = () => {
  return <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-32 h-32 opacity-10">
        
      </div>
      <div className="absolute bottom-10 right-0 w-40 h-40 opacity-10">
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Procedimentos Especializados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Medicina Veterinária de{" "}
            <span className="text-primary">Alta Complexidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contamos com estrutura e equipe capacitada para realizar procedimentos 
            avançados, oferecendo suporte completo ao seu pet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {procedures.map((procedure, index) => <motion.div key={procedure.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group">
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <procedure.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-2">
                  {procedure.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {procedure.description}
                </p>
              </div>
            </motion.div>)}
        </div>

        
      </div>
    </section>;
};
export default AdvancedProceduresSection;