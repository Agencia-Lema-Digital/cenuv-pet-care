import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/images/testimonial-1.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonial-3.jpg";
import testimonial4 from "@/assets/images/testimonial-4.jpg";

const testimonials = [
  {
    name: "Carla Mendonça",
    pet: "Tutora da Luna e da Mel",
    image: testimonial1,
    rating: 5,
    text: "Minha gatinha Luna foi diagnosticada com doença renal crônica. Passei em várias clínicas sem sucesso até encontrar o CENUV. Hoje ela está estável e com qualidade de vida. Gratidão eterna!",
  },
  {
    name: "Rafael Oliveira",
    pet: "Tutor do Thor",
    image: testimonial2,
    rating: 5,
    text: "O Thor teve cálculos na bexiga e o CENUV foi decisivo no tratamento. Equipe extremamente competente e acolhedora. Recomendo de olhos fechados!",
  },
  {
    name: "Dona Conceição",
    pet: "Tutora do Pipoca",
    image: testimonial3,
    rating: 5,
    text: "Com 68 anos, meu Pipoca é minha companhia. Quando descobrimos o problema renal, fiquei desesperada. No CENUV me explicaram tudo com paciência e hoje ele está ótimo.",
  },
  {
    name: "Lucas e Bruno",
    pet: "Tutores do Bento",
    image: testimonial4,
    rating: 5,
    text: "O Bento tinha infecções urinárias recorrentes. No CENUV descobriram a causa raiz e trataram de forma definitiva. Atendimento humano e profissional!",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section
      id="depoimentos"
      className="section-padding bg-gradient-to-br from-cenuv-gold/20 via-cenuv-peach to-cenuv-cream relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cenuv-coral/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/50 shadow-sm">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-foreground">
              Mais de 500 pets atendidos
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="heading-lg text-foreground mb-4"
          >
            O que dizem os tutores que passaram pelo CENUV
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de quem confiou no nosso cuidado especializado
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border/30 relative"
              style={{
                boxShadow: "0 4px 24px -4px hsl(345 43% 22% / 0.08)",
              }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cenuv-gold/30" />

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial text */}
              <p className="body-lg text-foreground mt-4 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name} com seu pet`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cenuv-gold/30"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.pet}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { value: "500+", label: "Pets atendidos" },
            { value: "98%", label: "Satisfação" },
            { value: "5.0", label: "Nota no Google" },
            { value: "10+", label: "Anos de experiência" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
