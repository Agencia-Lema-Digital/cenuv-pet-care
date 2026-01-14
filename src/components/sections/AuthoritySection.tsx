import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Award, Zap, Users, HeartHandshake } from "lucide-react";
import blobWine from "@/assets/elements/blob-wine.png";
import bonePink from "@/assets/elements/bone-pink.png";

const benefits = [
  { icon: Award, text: "Atendimento 100% especializado em nefrologia e urologia veterinária" },
  { icon: CheckCircle, text: "Casos que outras clínicas não conseguem resolver" },
  { icon: Zap, text: "Tratamentos modernos e acompanhamento contínuo" },
  { icon: Users, text: "Diagnóstico rápido e preciso" },
  { icon: HeartHandshake, text: "Atendimento humano, claro e responsável" },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src={blobWine} 
        alt="" 
        className="absolute -top-32 -left-32 w-72 h-72 opacity-10 pointer-events-none"
      />
      <img 
        src={bonePink} 
        alt="" 
        className="absolute -bottom-8 -right-16 w-48 opacity-15 pointer-events-none rotate-12"
      />
      
      <div className="container-narrow relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-foreground">
          Por que o CENUV é diferente das clínicas comuns?
        </h2>

        <div className="space-y-4 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground text-lg font-medium pt-2">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="card-soft text-center mb-10 border-l-4 border-cenuv-orange">
          <p className="text-lg md:text-xl text-foreground italic">
            Aqui você não encontra atendimento genérico. O CENUV existe exclusivamente para cuidar 
            dos problemas renais e urinários do seu pet.
          </p>
        </div>

        <div className="flex justify-center">
          <WhatsAppButton text="Agendar consulta no WhatsApp" />
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
