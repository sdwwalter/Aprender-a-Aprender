import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Sobre = () => {
  return (
    <div className="bg-deep-1 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold text-text-primary mb-6">Sobre o Curso</h1>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              O "Aprender a Aprender" não é mais um curso teórico. É uma metodologia prática, desenvolvida para adultos que não têm tempo a perder e precisam transformar conhecimento em resultados reais.
            </p>
            
            <h2 className="text-2xl font-bold text-text-primary mb-4">Nossa Metodologia</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Foco na Aplicação: 80% prática, 20% teoria.",
                "Micro-learning: Aulas curtas de 5 a 15 minutos.",
                "Templates Prontos: Não comece do zero, use nossos modelos.",
                "Comunidade Ativa: Troque experiências com outros alunos."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-text-primary mb-4">Objetivos de Aprendizagem</h2>
            <p className="text-text-secondary mb-4">Ao final do curso, você será capaz de:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>Ler e reter informações de livros técnicos em 50% menos tempo.</li>
              <li>Criar resumos visuais que facilitam a revisão.</li>
              <li>Aplicar técnicas de foco profundo para sessões de estudo ininterruptas.</li>
              <li>Transformar qualquer curso online em um plano de ação prático.</li>
            </ul>
          </div>

          <div className="bg-card-bg p-8 rounded-2xl border border-moss-dark">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Quem é o Instrutor?</h2>
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 bg-moss rounded-full mb-4 overflow-hidden border-4 border-moss-dark shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Foto do Instrutor" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary">João Silva</h3>
              <p className="text-emerald">Especialista em Aprendizagem Acelerada</p>
            </div>
            <p className="text-text-secondary text-center leading-relaxed">
              Com mais de 10 anos de experiência em educação corporativa, João já ajudou mais de 5.000 profissionais a destravarem seu potencial de aprendizado. Formado em Neurociência Aplicada, ele traduz conceitos complexos em ferramentas simples que qualquer pessoa pode usar no dia a dia para estudar melhor e aplicar mais rápido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
