
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Supermercados Central",
      position: "Cliente Corporativo",
      text: "A Oestesul Refrigeração transformou nosso sistema de refrigeração, proporcionando economia de energia e melhor conservação dos produtos. O atendimento técnico é impecável!",
      rating: 5,
    },
    {
      id: 2,
      name: "Frigorífico Aurora",
      position: "Cliente Industrial",
      text: "Trabalhamos com a Oestesul há mais de 8 anos e só temos elogios. Profissionalismo, pontualidade e soluções eficientes para todas as nossas necessidades de refrigeração industrial.",
      rating: 5,
    },
    {
      id: 3,
      name: "Restaurante Sabor do Sul",
      position: "Cliente Comercial",
      text: "Desde que contratamos a Oestesul para a manutenção dos nossos equipamentos, não tivemos mais problemas. Equipe técnica qualificada e atendimento rápido.",
      rating: 5,
    },
  ];

  return (
    <section className="page-section bg-primary text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center">O Que Nossos Clientes Dizem</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-center text-white/80">
          A satisfação dos nossos clientes é o nosso maior orgulho. Conheça algumas histórias de sucesso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/10 border-white/20 backdrop-blur-sm text-white"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                    />
                  ))}
                </div>
                <p className="mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
