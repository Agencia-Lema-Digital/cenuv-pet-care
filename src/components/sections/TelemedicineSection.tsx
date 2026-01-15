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
      staggerChildren: 0.15,
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
      className="section-padding bg-cenuv-peach"
      aria-labelledby="telemedicine-title"
    >
      <div className="container-wide">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="telemedicine-title" 
            className="heading-lg text-cenuv-burgundy mb-4"
          >
            Atendimento por Telemedicina em Nefrologia Veterinária
          </h2>
          <p className="body-lg text-cenuv-text-muted max-w-2xl mx-auto">
            Cuidado especializado para o seu pet, sem sair de casa. 
            Conecte-se com nossos especialistas de qualquer lugar do Brasil.
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {telemedicineFeatures.map((feature, index) => (
            <motion.li
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="card-premium bg-white p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cenuv-coral/20 flex items-center justify-center group-hover:bg-cenuv-coral/30 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-cenuv-coral" />
              </div>
              <h3 className="text-lg font-semibold text-cenuv-burgundy mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-cenuv-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5527997433130?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20por%20telemedicina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
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
