
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Settings,
  Tool,
  ShoppingBag,
  ClipboardCheck,
  Zap,
  AirVent,
  Thermometer,
  Fan,
  Factory,
  Store,
  Building,
} from "lucide-react";

const Servicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços | Oestesul Refrigeração";
  }, []);

  const services = [
    {
      id: 1,
      title: "Instalação de Sistemas",
      description:
        "Instalação profissional de sistemas de refrigeração comercial e industrial, incluindo câmaras frias, balcões refrigerados, climatizadores e mais.",
      icon: <Settings size={40} className="text-primary" />,
      points: [
        "Projeto personalizado conforme necessidades",
        "Instalação por técnicos certificados",
        "Testes de eficiência e segurança",
        "Treinamento operacional para a equipe",
      ],
    },
    {
      id: 2,
      title: "Manutenção Preventiva e Corretiva",
      description:
        "Serviços de manutenção que garantem o funcionamento eficiente e prolongam a vida útil dos seus equipamentos de refrigeração.",
      icon: <Tool size={40} className="text-primary" />,
      points: [
        "Planos de manutenção personalizados",
        "Atendimento emergencial 24 horas",
        "Diagnóstico preciso de falhas",
        "Relatórios técnicos detalhados",
      ],
    },
    {
      id: 3,
      title: "Venda de Equipamentos",
      description:
        "Comercialização das melhores marcas de equipamentos de refrigeração para aplicações comerciais e industriais.",
      icon: <ShoppingBag size={40} className="text-primary" />,
      points: [
        "Equipamentos de alta eficiência energética",
        "Marcas líderes do mercado",
        "Garantia estendida",
        "Suporte técnico especializado",
      ],
    },
    {
      id: 4,
      title: "Projetos Personalizados",
      description:
        "Desenvolvimento de projetos de refrigeração sob medida para necessidades específicas de cada cliente e setor.",
      icon: <ClipboardCheck size={40} className="text-primary" />,
      points: [
        "Análise técnica do ambiente",
        "Dimensionamento preciso dos equipamentos",
        "Projetos com foco em eficiência energética",
        "Soluções adaptadas ao orçamento",
      ],
    },
    {
      id: 5,
      title: "Eficiência Energética",
      description:
        "Soluções para otimização do consumo energético em sistemas de refrigeração, reduzindo custos operacionais.",
      icon: <Zap size={40} className="text-primary" />,
      points: [
        "Diagnóstico de consumo energético",
        "Modernização de sistemas existentes",
        "Implementação de tecnologias ecológicas",
        "Monitoramento de desempenho",
      ],
    },
    {
      id: 6,
      title: "Automação de Sistemas",
      description:
        "Implementação de sistemas de automação e controle inteligente para refrigeração mais eficiente e monitoramento remoto.",
      icon: <AirVent size={40} className="text-primary" />,
      points: [
        "Controle digital de temperatura",
        "Monitoramento remoto via aplicativo",
        "Alertas automáticos de falhas",
        "Integração com sistemas existentes",
      ],
    },
  ];

  const segments = [
    {
      id: 1,
      title: "Indústria Alimentícia",
      icon: <Factory size={32} className="text-primary" />,
    },
    {
      id: 2,
      title: "Supermercados",
      icon: <Store size={32} className="text-primary" />,
    },
    {
      id: 3,
      title: "Restaurantes",
      icon: <Thermometer size={32} className="text-primary" />,
    },
    {
      id: 4,
      title: "Hotéis e Hospitais",
      icon: <Building size={32} className="text-primary" />,
    },
    {
      id: 5,
      title: "Centros de Distribuição",
      icon: <Fan size={32} className="text-primary" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl max-w-3xl text-white/90">
              Conheça nossa ampla gama de soluções em refrigeração comercial e
              industrial para atender às necessidades do seu negócio.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="page-section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center mb-6">
                      {service.icon}
                      <h2 className="text-3xl font-bold ml-4 text-primary">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mr-3 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contato">Solicitar Orçamento</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={`https://source.unsplash.com/random/600x400/?refrigeration,${service.title}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="page-section bg-accent">
          <div className="container">
            <h2 className="section-title text-center">
              Setores que Atendemos
            </h2>
            <p className="section-description text-center mx-auto">
              Temos experiência em diversas indústrias e setores, oferecendo
              soluções específicas para cada necessidade.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
              {segments.map((segment) => (
                <div
                  key={segment.id}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {segment.icon}
                  </div>
                  <h3 className="font-semibold text-primary">{segment.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Pronto para Melhorar o Seu Sistema de Refrigeração?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entre em contato para um diagnóstico personalizado e descubra as
                melhores soluções para o seu negócio.
              </p>
              <Button
                className="bg-white text-primary hover:bg-white/90"
                size="lg"
                asChild
              >
                <Link to="/contato">Fale com Nossa Equipe</Link>
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
