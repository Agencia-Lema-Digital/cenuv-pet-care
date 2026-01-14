import { HelpCircle } from "lucide-react";

const objections = [
  {
    question: "Já passei em outras clínicas e não resolveu",
    answer: "Justamente por isso o CENUV existe. Aqui o foco é exclusivo em rim e sistema urinário."
  },
  {
    question: "Tenho medo de descobrir algo grave",
    answer: "Quanto antes descobrir, maiores são as chances de tratamento e controle."
  },
  {
    question: "E se for caro?",
    answer: "O custo de não tratar costuma ser muito maior."
  },
];

const ObjectionsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-foreground">
          Ainda está em dúvida?
        </h2>

        <div className="space-y-6">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="card-soft border-l-4 border-cenuv-orange"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-cenuv-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    "{objection.question}"
                  </p>
                  <p className="text-muted-foreground text-lg">
                    {objection.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
