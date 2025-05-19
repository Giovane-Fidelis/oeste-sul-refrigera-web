
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contato | Oestesul Refrigeração";
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulando envio de formulário com timeout
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
      });
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const locations = [
    {
      id: 1,
      city: "Chapecó",
      state: "SC",
      type: "Matriz",
      address: "Av. Principal, 1234, Centro",
      phone: "(49) 3322-1234",
      email: "chapeco@oestesul.com.br",
      hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113879.50857525106!2d-52.73600565!3d-27.10119325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b666c291b7cd%3A0xb671dd092b79e1b!2zQ2hhcGVjw7MsIFND!5e0!3m2!1spt-BR!2sbr!4v1621270064230!5m2!1spt-BR!2sbr"
    },
    {
      id: 2,
      city: "Rolândia",
      state: "PR",
      type: "Filial",
      address: "Rua das Indústrias, 567, Distrito Industrial",
      phone: "(43) 3255-5678",
      email: "rolandia@oestesul.com.br",
      hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58893.29101238927!2d-51.41101628955077!3d-23.31156370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eccd7b2a553fa1%3A0x15a0237dae989c9c!2sRol%C3%A2ndia%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1684319909273!5m2!1spt-BR!2sbr"
    },
    {
      id: 3,
      city: "Vale do Itajaí",
      state: "SC",
      type: "Filial",
      address: "Rodovia SC-486, Km 45, 789",
      phone: "(47) 3344-9876",
      email: "itajai@oestesul.com.br",
      hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224816.3486067354!2d-49.31847845218749!3d-26.913337850000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e408b5c3095%3A0xeee83c658d181187!2sVale%20do%20Itaja%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1684319943325!5m2!1spt-BR!2sbr"
    },
  ];

  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl max-w-3xl text-white/90">
              Estamos prontos para atender suas necessidades em refrigeração. 
              Entre em contato conosco para mais informações ou um orçamento.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="page-section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Envie-nos uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome completo*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-mail*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone*
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto*
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem*
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Descreva sua necessidade..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h2>
                
                {/* Location Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {locations.map((location) => (
                    <Button
                      key={location.id}
                      variant={activeLocation.id === location.id ? "default" : "outline"}
                      onClick={() => setActiveLocation(location)}
                      className="flex-1 min-w-[100px]"
                    >
                      {location.city}
                    </Button>
                  ))}
                </div>

                {/* Location Info */}
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {activeLocation.city} ({activeLocation.state})
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">{activeLocation.type}</p>

                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                      <p>{activeLocation.address}</p>
                    </div>
                    <div className="flex">
                      <Phone size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                      <p>{activeLocation.phone}</p>
                    </div>
                    <div className="flex">
                      <Mail size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                      <p>{activeLocation.email}</p>
                    </div>
                    <div className="flex">
                      <Clock size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                      <p>{activeLocation.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={activeLocation.mapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${activeLocation.city}`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contato;
