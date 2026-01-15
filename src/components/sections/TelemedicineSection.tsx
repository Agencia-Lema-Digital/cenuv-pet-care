import { motion } from "framer-motion";
import { Video, Clock, MapPin, Stethoscope } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const telemedicineFeatures = [
  {
    icon: Video,
    title: "Consulta Online",
    description: "Atendimento especializado por videochamada, no conforto da sua casa"
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Sem filas, sem deslocamento. Seu pet recebe atenção rápida e eficiente"
  },
  {
    icon: MapPin,
    title: "Onde Você Estiver",
    description: "Atendemos tutores de todo o Brasil com a mesma qualidade"
  },
  {
    icon: Stethoscope,
    title: "Especialistas",
    description: "Nefrologistas e urologistas veterinários experientes à sua disposição"
  }
];

const TelemedicineSection = () => {
  return (
    <section 
      id="telemedicina" 
      className="bg-[#FFF4EB]"
      aria-labelledby="telemedicine-title"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="telemedicine-title" 
            className="text-2xl md:text-4xl font-bold text-[#4E1E2A]"
          >
            Atendimento por Telemedicina em Nefrologia Veterinária
          </h2>
          <p className="text-base md:text-lg text-[#7D5A4A] mt-2 max-w-2xl mx-auto leading-relaxed">
            Cuidado especializado para o seu pet, sem sair de casa. 
            Conecte-se com nossos especialistas de qualquer lugar do Brasil.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {telemedicineFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <div className="bg-[#FDECEC] text-[#D06C6C] p-3 rounded-full mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[#4E1E2A] text-lg">
                {feature.title}
              </h3>
              <p className="text-[#7D5A4A] text-sm mt-2 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5527997433130?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20por%20telemedicina"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
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
