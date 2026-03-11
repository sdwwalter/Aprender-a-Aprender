import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const Blog = () => {
  const posts = [
    {
      title: "Como aplicar o Método Pomodoro sem se frustrar",
      excerpt: "A maioria das pessoas usa o Pomodoro errado. Descubra como adaptar a técnica para o seu ritmo biológico.",
      date: "12 Mar 2024",
      category: "Produtividade",
      readTime: "5 min"
    },
    {
      title: "O mito do 'Estilo de Aprendizagem'",
      excerpt: "Por que você não é apenas um aprendiz 'visual' ou 'auditivo' e como usar todas as modalidades a seu favor.",
      date: "05 Mar 2024",
      category: "Neurociência",
      readTime: "7 min"
    },
    {
      title: "Estudo de Caso: De 0 a Certificado em 30 dias",
      excerpt: "Como Mariana usou a técnica de Leitura Ativa para passar na certificação AWS sem experiência prévia.",
      date: "28 Fev 2024",
      category: "Estudos de Caso",
      readTime: "10 min"
    }
  ];

  return (
    <div className="bg-deep-1 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Blog & Conteúdos</h1>
          <p className="text-lg text-text-secondary">
            Artigos curtos, estudos de caso e dicas práticas para melhorar sua aprendizagem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-card-bg border-moss-dark hover:border-emerald/50 transition-all flex flex-col h-full cursor-pointer group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-emerald-bright bg-moss px-2 py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-moss">{post.readTime} de leitura</span>
                </div>
                <CardTitle className="text-xl font-bold text-text-primary group-hover:text-emerald transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-text-secondary mb-6 flex-grow text-base">
                  {post.excerpt}
                </CardDescription>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-moss-dark">
                  <span className="text-sm text-moss">{post.date}</span>
                  <span className="text-sm font-semibold text-gold-warm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
