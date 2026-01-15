import { motion } from "framer-motion";
import { Video, FileText, Calendar, Building2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const leftFeatures = [
  {
    title: "Consultas Online",
    description: (
      <>
        Atendimento especializado em nefrologia realizado por videochamada, com a presença do{" "}
        <strong>veterinário clínico responsável</strong> e do <strong>tutor</strong>, garantindo uma análise completa e segura do paciente.
      </>
    ),
    icon: Video
  },
  {
    title: "Acompanhamento por 30 dias",
    description: (
      <>
        Após a consulta, oferecemos <strong>suporte especializado contínuo</strong> por até 30 dias úteis, com ajustes de tratamento, análise de exames e orientação em tempo real via WhatsApp.
      </>
    ),
    icon: Calendar
  }
];

const rightFeatures = [
  {
    title: "Relatórios Detalhados",
    description: (
      <>
        Após cada consulta, é fornecida uma <strong>documentação completa</strong> com orientações, diagnósticos, recomendações e possíveis condutas, facilitando o acompanhamento do caso por outros profissionais.
      </>
    ),
    icon: FileText
  },
  {
    title: "Encaminhamento Hospitalar",
    description: (
      <>
        Quando necessário, elaboramos uma <strong>carta de encaminhamento</strong> personalizada para que o tutor leve o pet a um hospital parceiro, com todas as instruções para exames, internações ou cirurgias.
      </>
    ),
    icon: Building2
  }
];

// SVG Donut with icons
const DonutChart = () => (
  <div className="relative w-[280px] md:w-[360px] aspect-square mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Outer ring segments */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="#FADCD9"
        strokeWidth="30"
        className="opacity-80"
      />
      
      {/* Inner lighter circle */}
      <circle
        cx="100"
        cy="100"
        r="55"
        fill="#FDF2F0"
      />
      
      {/* Segment dividers */}
      <line x1="100" y1="15" x2="100" y2="45" stroke="white" strokeWidth="3" />
      <line x1="185" y1="100" x2="155" y2="100" stroke="white" strokeWidth="3" />
      <line x1="100" y1="185" x2="100" y2="155" stroke="white" strokeWidth="3" />
      <line x1="15" y1="100" x2="45" y2="100" stroke="white" strokeWidth="3" />
    </svg>
    
    {/* Icons positioned on the donut */}
    <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
      <Video className="w-5 h-5 text-[#8B4D4D]" />
    </div>
    <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
      <FileText className="w-5 h-5 text-[#8B4D4D]" />
    </div>
    <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
      <Calendar className="w-5 h-5 text-[#8B4D4D]" />
    </div>
    <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
      <Building2 className="w-5 h-5 text-[#8B4D4D]" />
    </div>
  </div>
);

const TelemedicineSection = () => {
  return (
    <section 
      id="telemedicina" 
      className="bg-white"
      aria-labelledby="telemedicine-title"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="telemedicine-title" 
            className="text-2xl md:text-4xl font-bold text-[#2E1D1C]"
          >
            Atendimento por Telemedicina
            <span className="block">em Nefrologia Veterinária</span>
          </h2>
        </motion.div>

        {/* Content: Left cards + Donut + Right cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div 
            className="flex flex-col gap-10 max-w-sm text-center lg:text-right order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {leftFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-[#B3433D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#2E1D1C] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Donut */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DonutChart />
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="flex flex-col gap-10 max-w-sm text-center lg:text-left order-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          >
            {rightFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-[#B3433D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#2E1D1C] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5527997433130?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20por%20telemedicina"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
            aria-label="Agendar consulta por telemedicina via WhatsApp"
          >
            <Video className="w-5 h-5" />
            Agendar Telemedicina
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TelemedicineSection;
