
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      city: "Chapecó",
      state: "SC",
      type: "Matriz",
      address: "Av. Principal, 1234, Centro",
      phone: "(49) 3322-1234",
      email: "chapeco@oestesul.com.br",
    },
    {
      id: 2,
      city: "Rolândia",
      state: "PR",
      type: "Filial",
      address: "Rua das Indústrias, 567, Distrito Industrial",
      phone: "(43) 3255-5678",
      email: "rolandia@oestesul.com.br",
    },
    {
      id: 3,
      city: "Vale do Itajaí",
      state: "SC",
      type: "Filial",
      address: "Rodovia SC-486, Km 45, 789",
      phone: "(47) 3344-9876",
      email: "itajai@oestesul.com.br",
    },
  ];

  return (
    <section className="page-section bg-white">
      <div className="container">
        <h2 className="section-title text-center">Nossas Unidades</h2>
        <p className="section-description text-center mx-auto">
          Estamos estrategicamente localizados para atender todo o Sul do Brasil com agilidade e eficiência.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white border border-border p-8 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              <div className="flex items-start mb-6">
                <MapPin size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {location.city} ({location.state})
                  </h3>
                  <p className="text-sm text-muted-foreground">{location.type}</p>
                </div>
              </div>

              <p className="mb-6 text-muted-foreground">{location.address}</p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={18} className="text-primary mr-3" />
                  <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-primary mr-3" />
                  <a href={`mailto:${location.email}`} className="hover:underline">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-[21/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113879.50857525106!2d-52.73600565!3d-27.10119325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b666c291b7cd%3A0xb671dd092b79e1b!2zQ2hhcGVjw7MsIFND!5e0!3m2!1spt-BR!2sbr!4v1621270064230!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Mapa Oestesul Refrigeração"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
