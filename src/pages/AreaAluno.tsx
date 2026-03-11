import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { PlayCircle, CheckCircle2, FileText, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AreaAluno = () => {
  const { isAuthenticated } = useAuth();
  const [activeModule, setActiveModule] = useState(1);
  const [progress, setProgress] = useState<number[]>([1]); // Array of completed module IDs

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const modules = [
    { id: 1, title: "Módulo 1: Desintoxicação Digital", duration: "1h 30m" },
    { id: 2, title: "Módulo 2: Leitura Ativa", duration: "2h 15m" },
    { id: 3, title: "Módulo 3: Anotações Inteligentes", duration: "2h 00m" },
    { id: 4, title: "Módulo 4: Memorização Espaçada", duration: "1h 45m" },
    { id: 5, title: "Módulo 5: Teoria em Prática", duration: "2h 30m" },
    { id: 6, title: "Módulo 6: Hábitos Contínuos", duration: "1h 15m" },
  ];

  const toggleProgress = (id: number) => {
    if (progress.includes(id)) {
      setProgress(progress.filter(p => p !== id));
    } else {
      setProgress([...progress, id]);
    }
  };

  const calculateProgress = () => {
    return Math.round((progress.length / modules.length) * 100);
  };

  return (
    <div className="bg-deep-1 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Progress */}
        <div className="bg-card-bg p-6 rounded-2xl shadow-sm border border-moss-dark mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary mb-2">Bem-vindo(a) de volta!</h1>
            <p className="text-text-secondary">Continue de onde parou e aplique o conhecimento.</p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex justify-between text-sm font-medium text-text-secondary mb-2">
              <span>Seu Progresso</span>
              <span className="text-emerald">{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-moss-dark rounded-full h-2.5">
              <div className="bg-emerald h-2.5 rounded-full transition-all duration-500" style={{ width: `${calculateProgress()}%` }}></div>
            </div>
          </div>
        </div>

        {/* Immigrant Notice */}
        <div className="bg-moss/20 border border-moss p-4 rounded-xl mb-8 flex items-start gap-4">
          <Globe className="h-6 w-6 text-emerald shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-emerald-bright mb-1">Aviso para Imigrantes / Aviso para Inmigrantes</h3>
            <p className="text-sm text-text-secondary">
              Disponibilizamos um guia em espanhol com orientações sobre como validar suas credenciais no Brasil e adaptar seus estudos para o mercado local. <a href="#/" onClick={(e) => e.preventDefault()} className="font-bold text-emerald underline hover:text-emerald-bright">Acesse aqui / Accede aquí</a>.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Modules List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-bold text-text-primary mb-4">Trilha de Aprendizagem</h2>
            {modules.map((mod) => (
              <div 
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeModule === mod.id 
                    ? 'bg-moss border-emerald/50 shadow-sm' 
                    : 'bg-card-bg border-moss-dark hover:border-moss'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleProgress(mod.id); }}
                      className="mt-0.5 focus:outline-none"
                    >
                      <CheckCircle2 className={`h-5 w-5 ${progress.includes(mod.id) ? 'text-emerald fill-emerald/20' : 'text-moss'}`} />
                    </button>
                    <div>
                      <h3 className={`font-semibold text-sm ${activeModule === mod.id ? 'text-emerald-bright' : 'text-text-primary'}`}>
                        {mod.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1">{mod.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card-bg border-moss-dark shadow-sm overflow-hidden">
              <div className="aspect-video bg-deep-2 relative flex items-center justify-center group">
                {/* Mock Video Player */}
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <button className="relative z-10 h-20 w-20 bg-deep-1/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-emerald/20 transition-colors border border-emerald/30">
                  <PlayCircle className="h-10 w-10 text-emerald" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-text-primary text-sm">
                  <span className="bg-deep-1/80 px-2 py-1 rounded">Aula 1.1 - Introdução</span>
                  <span className="bg-deep-1/80 px-2 py-1 rounded">15:00</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">
                      {modules.find(m => m.id === activeModule)?.title}
                    </h2>
                    <p className="text-text-secondary">
                      Nesta aula, você aprenderá os conceitos fundamentais para aplicar o método na prática.
                    </p>
                  </div>
                  <Button 
                    onClick={() => toggleProgress(activeModule)}
                    variant={progress.includes(activeModule) ? "outline" : "default"}
                    className={progress.includes(activeModule) ? "border-emerald text-emerald hover:bg-moss hover:text-emerald-bright" : "bg-emerald text-deep-1 hover:bg-emerald-bright font-bold"}
                  >
                    {progress.includes(activeModule) ? "Concluído" : "Marcar como Concluído"}
                  </Button>
                </div>

                <div className="border-t border-moss-dark pt-6">
                  <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-gold" /> Materiais da Aula
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a href="#/" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-3 rounded-lg border border-moss-dark hover:bg-moss transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-900/30 p-2 rounded text-red-400 font-bold text-xs">PDF</div>
                        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary">Resumo da Aula</span>
                      </div>
                      <Download className="h-4 w-4 text-moss group-hover:text-emerald" />
                    </a>
                    <a href="#/" onClick={(e) => e.preventDefault()} className="flex items-center justify-between p-3 rounded-lg border border-moss-dark hover:bg-moss transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-900/30 p-2 rounded text-blue-400 font-bold text-xs">DOC</div>
                        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary">Checklist de Aplicação</span>
                      </div>
                      <Download className="h-4 w-4 text-moss group-hover:text-emerald" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Registration */}
            <Card className="bg-card-bg border-moss-dark shadow-sm">
              <CardHeader className="bg-deep-2 border-b border-moss-dark pb-4">
                <CardTitle className="text-lg text-text-primary">Registro de Atividade Prática</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-text-secondary mb-4">
                  Descreva brevemente como você aplicou o conceito desta aula no seu dia a dia. Isso ajuda a fixar o conhecimento.
                </p>
                <textarea 
                  rows={4} 
                  className="w-full rounded-md border border-moss-dark bg-deep-1 p-3 text-sm text-text-primary placeholder:text-moss focus:outline-none focus:ring-2 focus:ring-emerald mb-4"
                  placeholder="Ex: Hoje eu organizei meu ambiente de estudo removendo o celular da mesa..."
                ></textarea>
                <Button className="bg-gold hover:bg-gold-warm text-deep-1 font-bold border-none">
                  Salvar Registro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
