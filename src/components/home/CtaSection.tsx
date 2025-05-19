
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-primary py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply"
        style={{
          backgroundImage: "url('/images/refrigeration-technician.jpg')",
        }}
      ></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para melhorar a eficiência da sua refrigeração?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Entre em contato conosco hoje e descubra como podemos ajudar
            sua empresa com soluções de refrigeração modernas e eficientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contato" className="flex items-center gap-2">
                Solicitar Orçamento
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/servicos">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
