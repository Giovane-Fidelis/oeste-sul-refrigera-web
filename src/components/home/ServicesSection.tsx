
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, Tool, ShoppingBag, ClipboardCheck, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Instalação",
      description: "Instalação profissional de sistemas de refrigeração comercial e industrial com garantia de qualidade.",
      icon: <Settings size={36} className="text-primary" />,
    },
    {
      id: 2,
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva para garantir o funcionamento contínuo dos seus equipamentos.",
      icon: <Tool size={36} className="text-primary" />,
    },
    {
      id: 3,
      title: "Venda de Equipamentos",
      description: "Comercialização das melhores marcas de equipamentos de refrigeração com garantia e suporte técnico.",
      icon: <ShoppingBag size={36} className="text-primary" />,
    },
    {
      id: 4,
      title: "Projetos Personalizados",
      description: "Desenvolvimento de projetos de refrigeração sob medida para as necessidades específicas da sua empresa.",
      icon: <ClipboardCheck size={36} className="text-primary" />,
    },
    {
      id: 5,
      title: "Eficiência Energética",
      description: "Soluções para redução do consumo de energia em sistemas de refrigeração existentes.",
      icon: <Zap size={36} className="text-primary" />,
    },
  ];

  return (
    <section className="page-section bg-accent">
      <div className="container">
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-description text-center mx-auto">
          Oferecemos uma ampla gama de soluções em refrigeração para atender às necessidades do seu negócio, 
          sempre com qualidade, eficiência e tecnologia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md card-hover"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="outline" asChild>
                <Link to="/servicos">Saiba Mais</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link to="/contato">Solicite um Orçamento</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
