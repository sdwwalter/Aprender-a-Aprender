import React from 'react';
import { Clock, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Modulos = () => {
  const modulos = [
    {
      title: "Módulo 1: Desintoxicação Digital e Foco",
      summary: "Limpe sua mente e organize seu ambiente para foco total.",
      duration: "1h 30m",
      activity: "Auditoria de distrações e configuração do ambiente de estudo.",
    },
    {
      title: "Módulo 2: Leitura Ativa e Retenção",
      summary: "Como ler um livro técnico e extrair o sumo em poucas horas.",
      duration: "2h 15m",
      activity: "Aplicação do método SQ3R em um capítulo de livro real.",
    },
    {
      title: "Módulo 3: Anotações Inteligentes (Zettelkasten)",
      summary: "Esqueça resumos longos. Crie mapas mentais e notas conectadas.",
      duration: "2h 00m",
      activity: "Criação do seu primeiro 'Segundo Cérebro' no Notion/Obsidian.",
    },
    {
      title: "Módulo 4: Memorização Espaçada",
      summary: "Técnicas validadas para nunca mais esquecer o que estudou.",
      duration: "1h 45m",
      activity: "Configuração de um deck no Anki com 20 conceitos-chave.",
    },
    {
      title: "Módulo 5: Transformando Teoria em Prática",
      summary: "O passo a passo para criar projetos a partir de cursos teóricos.",
      duration: "2h 30m",
      activity: "Desenho de um plano de ação de 7 dias para uma habilidade nova.",
    },
    {
      title: "Módulo 6: Hábitos de Aprendizagem Contínua",
      summary: "Como manter a consistência sem depender de motivação.",
      duration: "1h 15m",
      activity: "Criação de um cronograma semanal realista de estudos.",
    },
  ];

  return (
    <div className="bg-deep-2 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Programa Completo</h1>
          <p className="text-lg text-text-secondary">
            Conheça em detalhes o que você vai aprender em cada etapa da nossa jornada.
          </p>
        </div>

        <div className="space-y-6">
          {modulos.map((mod, index) => (
            <Card key={index} className="bg-card-bg border-moss-dark hover:border-emerald/50 transition-colors">
              <CardHeader className="border-b border-moss-dark pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-emerald-bright">{mod.title}</CardTitle>
                  <span className="flex items-center text-sm text-emerald bg-moss px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-1" /> {mod.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-text-primary font-medium mb-4">{mod.summary}</p>
                <div className="bg-deep-1 p-4 rounded-lg border border-moss flex items-start gap-3">
                  <FileText className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-bold text-text-primary mb-1">Atividade Prática:</span>
                    <span className="text-sm text-text-secondary">{mod.activity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
