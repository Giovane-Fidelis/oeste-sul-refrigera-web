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

const Servicos = () => {
  const servicesData = [
    {
      id: 1,
      title: "Instalação",
      description:
        "Instalação profissional de sistemas de refrigeração comercial e industrial com garantia de qualidade.",
      features: [
        "Equipe especializada e certificada",
        "Planejamento detalhado da instalação",
        "Procedimentos de acordo com normas técnicas",
        "Testes de eficiência e segurança",
        "Treinamento operacional para a equipe",
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Manutenção",
      description:
        "Serviços de manutenção preventiva e corretiva para garantir o funcionamento contínuo dos seus equipamentos.",
      features: [
        "Inspeção completa dos componentes",
        "Substituição de peças desgastadas",
        "Ajustes e calibração para otimizar o desempenho",
        "Relatórios detalhados dos serviços realizados",
        "Atendimento emergencial 24 horas",
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Venda de Equipamentos",
      description:
        "Comercialização das melhores marcas de equipamentos de refrigeração com garantia e suporte técnico.",
      features: [
        "Ampla variedade de modelos e capacidades",
        "Equipamentos de alta eficiência energética",
        "Condições especiais de pagamento",
        "Entrega e instalação inclusas",
        "Garantia estendida disponível",
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Projetos Personalizados",
      description:
        "Desenvolvimento de projetos de refrigeração sob medida para as necessidades específicas da sua empresa.",
      features: [
        "Análise detalhada das necessidades do cliente",
        "Dimensionamento preciso dos equipamentos",
        "Elaboração de plantas e diagramas",
        "Acompanhamento da execução do projeto",
        "Consultoria para otimização de custos",
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Eficiência Energética",
      description:
        "Soluções para redução do consumo de energia em sistemas de refrigeração existentes.",
      features: [
        "Auditoria energética completa",
        "Implementação de tecnologias de ponta",
        "Substituição de equipamentos obsoletos",
        "Monitoramento contínuo do consumo",
        "Relatórios de economia de energia",
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Sistemas de Automação",
      description:
        "Implementação de sistemas de automação para controle e monitoramento remoto de equipamentos de refrigeração.",
      features: [
        "Controle de temperatura e umidade",
        "Alarmes de falhas e desvios",
        "Registro de dados para análise",
        "Acesso remoto via web ou aplicativo",
        "Integração com outros sistemas prediais",
      ],
      imageUrl: "/placeholder.svg"
    },
  ];

  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços | Oestesul Refrigeração";
  }, []);

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

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
                          className="rounded-lg mb-4"
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
