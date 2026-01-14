import WhatsAppButton from "@/components/WhatsAppButton";
import abstractWine from "@/assets/elements/abstract-wine.png";
import boneWine from "@/assets/elements/bone-wine.png";

const steps = [
  { number: 1, text: "Você fala conosco pelo WhatsApp" },
  { number: 2, text: "Nossa equipe faz a primeira orientação" },
  { number: 3, text: "Agendamos a consulta" },
  { number: 4, text: "Seu pet passa por avaliação especializada" },
  { number: 5, text: "Você recebe diagnóstico e direcionamento de tratamento" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src={abstractWine} 
        alt="" 
        className="absolute -top-24 -right-24 w-56 h-56 opacity-10 pointer-events-none"
      />
      <img 
        src={boneWine} 
        alt="" 
        className="absolute -bottom-4 -left-12 w-40 opacity-10 pointer-events-none -rotate-12"
      />
      
      <div className="container-narrow relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
          Como funciona o atendimento no CENUV?
        </h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-cenuv-coral to-cenuv-orange hidden md:block" />
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-6 relative"
              >
                <div className="step-number relative z-10 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 p-5 bg-background rounded-xl border border-border/50 shadow-sm">
                  <p className="text-foreground text-lg font-medium">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <WhatsAppButton text="Iniciar atendimento agora" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
