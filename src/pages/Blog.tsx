import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowUpRight } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | Oestesul Refrigeração";
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "5 dicas para economizar energia em sistemas de refrigeração industrial",
      excerpt:
        "Descubra como implementar medidas de eficiência energética que podem reduzir significativamente os custos operacionais da sua empresa.",
      date: "15 de Maio, 2023",
      author: "Eng. Carlos Silva",
      category: "Eficiência Energética",
      image: "https://images.unsplash.com/photo-1611023693600-678c9c60be3a?q=80&w=1964&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "A importância da manutenção preventiva em equipamentos de refrigeração",
      excerpt:
        "Entenda por que a manutenção regular é essencial para prolongar a vida útil dos equipamentos e evitar paradas não programadas.",
      date: "28 de Abril, 2023",
      author: "Téc. Roberto Oliveira",
      category: "Manutenção",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1770&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Novas tecnologias em sistemas de refrigeração comercial",
      excerpt:
        "Conheça as inovações tecnológicas que estão revolucionando o setor de refrigeração comercial e trazendo mais eficiência e sustentabilidade.",
      date: "10 de Abril, 2023",
      author: "Eng. Amanda Costa",
      category: "Inovação",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Como escolher o sistema de refrigeração ideal para sua empresa",
      excerpt:
        "Um guia completo para ajudar você a selecionar o sistema de refrigeração mais adequado às necessidades específicas do seu negócio.",
      date: "22 de Março, 2023",
      author: "Consult. Fernanda Lima",
      category: "Consultoria",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1769&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Sustentabilidade na refrigeração: tendências e boas práticas",
      excerpt:
        "O setor de refrigeração está cada vez mais comprometido com práticas sustentáveis. Descubra como implementá-las em seu negócio.",
      date: "08 de Março, 2023",
      author: "Esp. Ricardo Mendes",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1592833167665-45747bd05b1d?q=80&w=1770&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Refrigeração na indústria alimentícia: normas e boas práticas",
      excerpt:
        "Um panorama completo das normativas que regulam a refrigeração no setor alimentício e como garantir a conformidade da sua empresa.",
      date: "18 de Fevereiro, 2023",
      author: "Eng. Patricia Santos",
      category: "Normativas",
      image: "https://images.unsplash.com/photo-1615897662672-4f492b6ae4b3?q=80&w=1770&auto=format&fit=crop",
    },
  ];

  const categories = [
    "Todas",
    "Eficiência Energética",
    "Manutenção",
    "Inovação",
    "Consultoria",
    "Sustentabilidade",
    "Normativas",
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Notícias</h1>
            <p className="text-xl max-w-3xl text-white/90">
              Mantenha-se atualizado com as novidades do setor de refrigeração, 
              dicas técnicas e tendências do mercado.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="page-section bg-white">
          <div className="container">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-primary">
                      <Link to="#" className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="#" className="flex justify-center items-center gap-2">
                        Ler mais
                        <ArrowUpRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav aria-label="Paginação do blog">
                <ul className="flex space-x-1">
                  <li>
                    <Button variant="outline" size="icon" disabled>
                      &laquo;
                    </Button>
                  </li>
                  <li>
                    <Button variant="default" size="icon">
                      1
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" size="icon">
                      2
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" size="icon">
                      3
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" size="icon">
                      &raquo;
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-accent">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Inscreva-se em Nossa Newsletter
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Receba novidades, dicas técnicas e informações sobre o setor de refrigeração
              diretamente em seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow sm:max-w-[70%]"
              />
              <Button className="w-full sm:w-auto">Inscrever-se</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Blog;
