import React from 'react';
import { Download, FileText, LayoutTemplate, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Recursos = () => {
  const recursos = [
    {
      title: "Checklist de Aplicação Rápida",
      desc: "Um guia de 1 página para aplicar qualquer conceito novo em 7 dias.",
      icon: CheckSquare,
      type: "PDF",
    },
    {
      title: "Template Notion: Segundo Cérebro",
      desc: "Nosso modelo oficial para organizar suas anotações e projetos.",
      icon: LayoutTemplate,
      type: "Notion",
    },
    {
      title: "Guia de Leitura SQ3R",
      desc: "Passo a passo para ler livros técnicos de forma ativa e eficiente.",
      icon: FileText,
      type: "PDF",
    },
    {
      title: "Planilha de Revisão Espaçada",
      desc: "Controle suas revisões sem precisar de aplicativos complexos.",
      icon: LayoutTemplate,
      type: "Excel",
    },
  ];

  return (
    <div className="bg-deep-1 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Recursos Gratuitos</h1>
          <p className="text-lg text-text-secondary">
            Materiais de apoio, templates e checklists para você baixar e começar a usar hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {recursos.map((rec, index) => (
            <Card key={index} className="bg-card-bg border-moss-dark flex flex-col h-full hover:border-emerald/30 transition-colors">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-moss p-3 rounded-lg">
                    <rec.icon className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{rec.title}</h3>
                    <span className="text-xs font-semibold text-gold-warm bg-gold/10 px-2 py-1 rounded-md uppercase tracking-wider">
                      {rec.type}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 flex-grow">{rec.desc}</p>
                <Button variant="outline" className="w-full gap-2 border-moss text-emerald hover:bg-moss-dark hover:text-emerald-bright">
                  <Download className="h-4 w-4" /> Baixar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
