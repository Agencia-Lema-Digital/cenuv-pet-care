import { motion } from "framer-motion";
import { Video, FileText, Calendar, Building2 } from "lucide-react";

const cards = [
  {
    category: "COMO FUNCIONA?",
    title: "Consultas Online",
    description: (
      <>
        Atendimento especializado em nefrologia via videochamada, com participação do{" "}
        <strong>veterinário clínico responsável</strong> e do <strong>tutor</strong>. O paciente é avaliado com segurança e precisão, sem necessidade de deslocamento.
      </>
    ),
    icon: Video,
  },
  {
    category: "SUPORTE CONTÍNUO",
    title: "Acompanhamento Mensal",
    description: (
      <>
        A consulta não termina no dia da chamada. Por até <strong>30 dias úteis</strong>, o tutor conta com suporte direto via WhatsApp para ajustes de tratamento, análise de exames e orientações em tempo real.
      </>
    ),
    icon: Calendar,
  },
  {
    category: "DOCUMENTAÇÃO DETALHADA",
    title: "Relatório Completo",
    description: (
      <>
        Ao final de cada consulta, é gerado um <strong>documento detalhado</strong> com diagnóstico, condutas recomendadas e orientações clínicas, pronto para ser compartilhado com outros profissionais envolvidos no caso.
      </>
    ),
    icon: FileText,
  },
  {
    category: "QUANDO NECESSÁRIO",
    title: "Encaminhamento Hospitalar",
    description: (
      <>
        Quando o caso exige atendimento presencial, elaboramos uma <strong>carta de encaminhamento personalizada</strong> com todas as instruções necessárias para exames, internações ou procedimentos cirúrgicos em hospitais parceiros.
      </>
    ),
    icon: Building2,
  },
];

const TelemedicineSection = () => {
  return (
    <section id="telemedicina" className="bg-secondary" aria-labelledby="telemedicine-title">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Badge */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-foreground text-background text-xs font-poppins uppercase tracking-wider px-4 py-1.5 rounded-full">
            Telemedicina Veterinária
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            id="telemedicine-title"
            className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight"
          >
            Como funciona o atendimento por
            <br />
            Telemedicina em Nefrologia?
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Todo o processo é pensado para oferecer comodidade ao tutor e cuidado
          especializado ao pet, do início ao fim.
        </motion.p>

        {/* Cards Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/40 shadow-sm group cursor-default transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-cenuv-coral/10 transition-colors duration-300">
                  <card.icon className="w-5 h-5 text-cenuv-coral group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="flex-1">
                  {/* Category */}
                  <span className="text-xs font-poppins uppercase tracking-wider text-cenuv-coral font-semibold">
                    {card.category}
                  </span>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mt-1 mb-3">
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm md:text-[0.9rem] text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://wa.me/5527997433130?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20por%20telemedicina"
            className="btn-whatsapp font-poppins uppercase tracking-wide text-base"
            aria-label="Agendar consulta por telemedicina via WhatsApp"
          >
            <Video className="w-5 h-5" />
            AGENDAR TELEMEDICINA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TelemedicineSection;
