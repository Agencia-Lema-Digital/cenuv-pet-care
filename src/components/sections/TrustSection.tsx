import { Heart } from "lucide-react";
import abstractPink from "@/assets/elements/abstract-pink.png";
import blobYellowLight from "@/assets/elements/blob-yellow-light.png";

const TrustSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-cenuv-coral text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <img 
        src={abstractPink} 
        alt="" 
        className="absolute -top-20 -left-20 w-64 h-64 opacity-15 pointer-events-none"
      />
      <img 
        src={blobYellowLight} 
        alt="" 
        className="absolute -bottom-24 -right-24 w-72 h-72 opacity-10 pointer-events-none"
      />
      
      <div className="container-narrow relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          A decisão de buscar um especialista muda tudo.
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto opacity-95">
          Nós sabemos o quanto é angustiante ver seu pet sofrer sem entender exatamente o que está acontecendo. 
          Aqui no CENUV você não é apenas mais um atendimento. Você é acolhido, orientado e acompanhado do início ao fim.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Heart className="w-8 h-8 text-cenuv-gold animate-pulse" fill="currentColor" />
          <p className="text-xl md:text-2xl lg:text-3xl font-cursive">
            Seu pet sente. Você sente. Nós cuidamos.
          </p>
          <Heart className="w-8 h-8 text-cenuv-gold animate-pulse" fill="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
