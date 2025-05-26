import React from "react";
import { Settings, Wrench, ShoppingBag, ClipboardCheck, Zap } from "lucide-react";

export const services = [
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
    icon: <Wrench size={36} className="text-primary" />,
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
