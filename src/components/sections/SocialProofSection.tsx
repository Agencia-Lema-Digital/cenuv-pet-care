import { Sparkles } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-cenuv-gold/40 to-cenuv-cream">
      <div className="container-narrow text-center">
        <Sparkles className="w-12 h-12 text-cenuv-orange mx-auto mb-6" />
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
          Todos os dias recebemos tutores que chegaram aqui sem esperança.
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground font-medium">
          E hoje veem seus pets com qualidade de vida.
        </p>
      </div>
    </section>
  );
};

export default SocialProofSection;
