import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, PlayCircle, Download, Star, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Home = () => {
  const [heroVariant, setHeroVariant] = useState<1 | 2 | 3>(1);

  return (
    <div className="overflow-hidden bg-deep-1">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-moss rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-emerald rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {heroVariant === 1 && (
                <>
                  <span className="inline-block py-1 px-3 rounded-full bg-moss-dark text-emerald-bright text-sm font-semibold mb-6 border border-moss">
                    Novo Curso Prático
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-text-primary">
                    Pare de acumular cursos e comece a <span className="text-emerald">aplicar</span> o que aprende.
                  </h1>
                  <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
                    Um método passo a passo para adultos que precisam transformar teoria em resultados práticos no dia a dia.
                  </p>
                </>
              )}

              {heroVariant === 2 && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-text-primary">
                    Sente que estuda muito mas não retém nada?
                  </h1>
                  <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
                    Descubra o método "Aprender a Aprender" e transforme horas de estudo frustrantes em conhecimento prático e aplicável.
                  </p>
                </>
              )}

              {heroVariant === 3 && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-text-primary">
                    Domine qualquer assunto na <span className="text-emerald">metade do tempo</span>.
                  </h1>
                  <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-xl leading-relaxed">
                    Técnicas validadas de neurociência e produtividade para você aprender mais rápido e nunca mais esquecer.
                  </p>
                </>
              )}

              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald shrink-0" />
                  <span className="text-text-primary">Técnicas de memorização e foco imediato.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald shrink-0" />
                  <span className="text-text-primary">Templates prontos para organizar seus estudos.</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/precos">
                  <Button size="lg" className="w-full sm:w-auto bg-emerald hover:bg-emerald-bright text-deep-1 font-bold text-lg h-14 px-8 shadow-lg shadow-emerald/20 border-none">
                    Inscreva-se Agora
                  </Button>
                </Link>
                <Link to="/modulos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-moss text-text-primary hover:bg-moss-dark hover:text-emerald h-14 px-8">
                    Ver Programa Completo
                  </Button>
                </Link>
              </div>

              {/* A/B Test Toggles (Hidden in production, just for demo) */}
              <div className="mt-8 flex gap-2 text-xs text-moss">
                <span>Testar Hero:</span>
                <button onClick={() => setHeroVariant(1)} className={`underline ${heroVariant === 1 ? 'text-emerald font-bold' : ''}`}>V1</button>
                <button onClick={() => setHeroVariant(2)} className={`underline ${heroVariant === 2 ? 'text-emerald font-bold' : ''}`}>V2</button>
                <button onClick={() => setHeroVariant(3)} className={`underline ${heroVariant === 3 ? 'text-emerald font-bold' : ''}`}>V3</button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-video bg-moss-dark rounded-2xl shadow-2xl overflow-hidden relative border border-moss">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Estudantes focados" 
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="h-20 w-20 bg-deep-1/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-emerald/20 transition-colors border border-emerald/30 group">
                    <PlayCircle className="h-10 w-10 text-emerald group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card-bg backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce border border-moss-dark">
                <div className="bg-moss p-3 rounded-full">
                  <Users className="h-6 w-6 text-emerald-bright" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">+2.000 alunos</p>
                  <p className="text-xs text-text-secondary">Aplicando o método</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE SECTION */}
      <section className="py-12 bg-deep-2 border-y border-moss-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card-bg backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-sm border border-moss flex flex-col md:flex-row items-center gap-8 text-left">
            <div className="bg-moss-dark p-4 rounded-full shrink-0">
              <Download className="h-8 w-8 text-emerald" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-text-primary mb-2">Material Gratuito: Checklist de Aplicação</h3>
              <p className="text-text-secondary text-sm mb-4 md:mb-0">
                Baixe nosso PDF "Como aplicar o que aprendeu em 7 dias" e dê o primeiro passo.
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  aria-label="Seu melhor e-mail"
                  placeholder="Seu melhor e-mail" 
                  className="flex h-10 w-full rounded-md border border-moss bg-deep-1 px-3 py-2 text-sm text-text-primary placeholder:text-moss focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent"
                  required
                />
                <Button type="submit" className="bg-emerald hover:bg-emerald-bright text-deep-1 font-bold">
                  Baixar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES HIGHLIGHT */}
      <section className="py-20 bg-deep-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">O que você vai dominar</h2>
            <p className="text-lg text-text-secondary">
              Um programa direto ao ponto, focado em resultados práticos. Sem enrolação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Módulo 1: Desintoxicação", desc: "Limpe sua mente e organize seu ambiente para foco total.", icon: BookOpen },
              { title: "Módulo 2: Leitura Ativa", desc: "Como ler um livro técnico e extrair o sumo em poucas horas.", icon: CheckCircle2 },
              { title: "Módulo 3: Anotações Inteligentes", desc: "Esqueça resumos longos. Crie mapas mentais que funcionam.", icon: CheckCircle2 },
            ].map((mod, i) => (
              <Card key={i} className="bg-card-bg border-moss-dark hover:border-emerald/50 hover:shadow-lg hover:shadow-emerald/5 transition-all">
                <CardContent className="p-6">
                  <mod.icon className="h-10 w-10 text-emerald mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">{mod.title}</h3>
                  <p className="text-text-secondary">{mod.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/modulos">
              <Button variant="outline" className="gap-2 border-moss text-text-primary hover:bg-moss-dark hover:text-emerald">
                Ver todos os 6 módulos <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-deep-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Quem aplica, vê resultados</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carlos S.", role: "Analista de Sistemas", text: "Eu comprava cursos na Udemy e nunca terminava. Com o método, finalizei 3 certificações em 2 meses." },
              { name: "Mariana T.", role: "Empreendedora", text: "A técnica de leitura ativa mudou minha vida. Agora leio um livro de negócios por semana e aplico na minha empresa." },
              { name: "Ricardo V.", role: "Estudante", text: "Estava travado nos estudos para concurso. A desintoxicação digital do Módulo 1 me devolveu o foco." },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-card-bg border-moss-dark shadow-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-gold-warm text-gold-warm" />)}
                  </div>
                  <p className="text-text-secondary mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-moss rounded-full flex items-center justify-center text-emerald-bright font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-moss">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMMIGRANT NOTICE (Subtle) */}
      <section className="py-12 bg-moss-dark border-y border-moss">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-emerald-bright mb-2">Bienvenido a Brasil</h3>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto">
            Se você é imigrante (especialmente da Venezuela), temos um módulo bônus gratuito na área do aluno explicando como validar credenciais e usar este curso para se recolocar no mercado brasileiro.
          </p>
        </div>
      </section>
    </div>
  );
};
