
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "./servicesData";

const ServicesSection = () => {
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
