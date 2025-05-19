
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary/90 to-primary pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply opacity-20"
        style={{
          backgroundImage: "url('/images/commercial-refrigeration.jpg')",
        }}
      />
      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções em Refrigeração com Qualidade e Confiança
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl">
            Oferecemos instalação, manutenção e projetos de sistemas de
            refrigeração comercial e industrial de alta eficiência para sua empresa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-medium" asChild>
              <Link to="/servicos" className="flex items-center gap-2">
                Conheça Nossos Serviços
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30" asChild>
              <Link to="/contato">Solicite um Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
