
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Excelência no atendimento",
    "Inovação tecnológica",
    "Compromisso com prazos",
    "Sustentabilidade",
    "Segurança e qualidade",
  ];

  return (
    <section className="page-section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">A Oestesul Refrigeração</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Desde nossa fundação, nos dedicamos a oferecer as melhores soluções em refrigeração 
              para empresas de todos os portes, com foco em qualidade, inovação e sustentabilidade.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Nossa Missão</h3>
              <p className="mb-6">
                Fornecer soluções em refrigeração que contribuam para o sucesso dos nossos clientes,
                garantindo eficiência energética e respeito ao meio ambiente.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary">Nossos Valores</h3>
              <ul className="space-y-2 mb-8">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-primary mr-2 flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild>
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566142020488-2a8298cbb56b?q=80&w=1974&auto=format&fit=crop"
                alt="Equipe Oestesul Refrigeração"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-2xl font-bold">+15 anos</p>
              <p>de experiência no mercado de refrigeração</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
