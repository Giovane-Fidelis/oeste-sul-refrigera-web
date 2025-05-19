
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Target, Lightbulb } from "lucide-react";

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sobre Nós | Oestesul Refrigeração";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Oestesul Refrigeração</h1>
            <p className="text-xl max-w-3xl text-white/90">
              Conheça nossa história, missão, valores e o que nos torna referência em soluções de refrigeração no Sul do Brasil.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="page-section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Nossa História</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fundada em 2005 em Chapecó (SC), a Oestesul Refrigeração nasceu com o objetivo de oferecer soluções de qualidade em refrigeração comercial e industrial para a região Sul do Brasil.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Ao longo dos anos, expandimos nossas operações com a abertura de filiais em Rolândia (PR) e no Vale do Itajaí (SC), ampliando nossa capacidade de atendimento e consolidando nossa presença no mercado.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Hoje, contamos com uma equipe de mais de 50 profissionais altamente qualificados e comprometidos com a excelência, prontos para atender às mais diversas demandas no setor de refrigeração.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="Oestesul.jpg"
                    alt="História da Oestesul Refrigeração"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="page-section bg-accent">
          <div className="container">
            <h2 className="section-title text-center">Nossos Princípios</h2>
            <p className="section-description text-center mx-auto">
              Nossos princípios orientam todas as nossas ações e decisões, definindo quem somos como empresa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer soluções em refrigeração que contribuam para o sucesso dos nossos clientes,
                  garantindo eficiência energética e respeito ao meio ambiente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência nacional em soluções de refrigeração, reconhecida pela excelência técnica,
                  inovação e compromisso com a sustentabilidade.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Award size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span>Excelência no atendimento</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span>Inovação tecnológica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span>Compromisso com prazos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span>Sustentabilidade</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2" />
                    <span>Segurança e qualidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="page-section bg-white">
          <div className="container">
            <h2 className="section-title text-center">Nossa Equipe</h2>
            <p className="section-description text-center mx-auto">
              Contamos com profissionais altamente qualificados e dedicados a oferecer o melhor serviço.
            </p>

            <div className="mt-12 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                +50 Profissionais Especializados
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Nossa equipe é formada por engenheiros, técnicos e especialistas em refrigeração com vasta
                experiência no setor, proporcionando soluções eficientes e de alta qualidade para nossos clientes.
              </p>
              <Button asChild>
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Conheça Nossos Serviços e Soluções
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Descubra como podemos ajudar sua empresa com as melhores soluções em refrigeração.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90" size="lg" asChild>
                <Link to="/servicos">Ver Nossos Serviços</Link>
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

export default Sobre;
