import WhatsAppButton from "@/components/WhatsAppButton";
import { AlertCircle, Droplets, Heart, Activity, Scale, Brain, Clock } from "lucide-react";
import abstractYellow from "@/assets/elements/abstract-yellow.png";
import dogSilhouette from "@/assets/elements/dog-silhouette.png";

const symptoms = [
  { icon: Droplets, text: "Dificuldade para urinar" },
  { icon: AlertCircle, text: "Urina com sangue" },
  { icon: Activity, text: "Vômitos frequentes" },
  { icon: Heart, text: "Falta de apetite" },
  { icon: Scale, text: "Perda de peso" },
  { icon: Brain, text: "Mudanças no comportamento" },
  { icon: Clock, text: "Idas constantes à caixa de areia" },
];

const SymptomsSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src={abstractYellow} 
        alt="" 
        className="absolute -top-20 -right-20 w-64 h-64 opacity-20 pointer-events-none"
      />
      <img 
        src={dogSilhouette} 
        alt="" 
        className="absolute -bottom-10 -left-10 w-48 h-48 opacity-10 pointer-events-none"
      />
      
      <div className="container-narrow relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-foreground">
          Você já percebeu algum desses sinais no seu pet?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {symptoms.map((symptom, index) => (
            <div 
              key={index} 
              className="symptom-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-cenuv-coral/20 flex items-center justify-center flex-shrink-0">
                <symptom.icon className="w-5 h-5 text-cenuv-coral" />
              </div>
              <span className="text-foreground font-medium">{symptom.text}</span>
            </div>
          ))}
        </div>

        <div className="card-soft text-center mb-10 bg-gradient-to-br from-cenuv-cream to-cenuv-gold/30">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Esses sinais podem indicar <strong>problemas sérios nos rins ou no sistema urinário</strong>. 
            Quanto antes o especialista avalia, maiores são as chances de controle e qualidade de vida.
          </p>
        </div>

        <div className="flex justify-center">
          <WhatsAppButton text="Quero falar com o especialista agora" />
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
