
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesData } from "./servicosData";

const Servicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços | Oestesul Refrigeração";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl max-w-3xl text-white/90">
              Conheça nossa gama de serviços especializados em refrigeração comercial e industrial.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="page-section bg-white">
          <div className="container">
            <h2 className="section-title text-center">Serviços Especializados</h2>
            <p className="section-description text-center mx-auto">
              Oferecemos soluções completas em refrigeração para atender às necessidades do seu negócio.
            </p>

            <Accordion type="single" collapsible className="mt-12">
              {servicesData.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={String(service.id)}
                >
                  <AccordionTrigger className="data-[state=open]:bg-accent hover:bg-accent transition-colors font-semibold">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="rounded-lg mb-4 aspect-video object-cover w-full"
                          loading="lazy"
                        />
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-primary">
                          Benefícios
                        </h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link to="/contato">Solicite um Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Está pronto para otimizar sua refrigeração?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entre em contato conosco e descubra como podemos ajudar sua empresa a economizar energia e aumentar a eficiência.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Servicos;
