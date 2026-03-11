import React from 'react';
import { CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export const Precos = () => {
  const faqs = [
    {
      q: "Por quanto tempo tenho acesso?",
      a: "Você tem acesso vitalício ao curso e a todas as futuras atualizações."
    },
    {
      q: "E se eu não gostar?",
      a: "Temos uma garantia incondicional de 15 dias. Se não gostar, devolvemos 100% do seu dinheiro."
    },
    {
      q: "Sou imigrante, como funciona o módulo bônus?",
      a: "Na área do aluno, você encontrará instruções em espanhol e materiais específicos sobre como usar o curso para se adaptar ao mercado brasileiro e validar credenciais."
    },
    {
      q: "Posso pagar via PIX ou Boleto?",
      a: "Sim, aceitamos PIX (com desconto), Boleto bancário e Cartão de Crédito em até 12x."
    }
  ];

  return (
    <div className="bg-deep-2 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Invista no seu aprendizado</h1>
          <p className="text-lg text-text-secondary">
            Escolha o plano que melhor se adapta a você e comece a transformar sua forma de estudar hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {/* Plano à vista */}
          <Card className="bg-card-bg border-moss-dark hover:border-moss transition-all shadow-sm">
            <CardHeader className="text-center pb-8 border-b border-moss-dark">
              <CardTitle className="text-2xl font-bold text-text-primary mb-2">Pagamento à Vista</CardTitle>
              <CardDescription className="text-text-secondary mb-6">Acesso vitalício com desconto</CardDescription>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-3xl font-bold text-text-primary">R$</span>
                <span className="text-5xl font-extrabold text-text-primary">297</span>
                <span className="text-moss">,00</span>
              </div>
              <p className="text-sm text-emerald font-semibold mt-2">Economize R$ 60,00</p>
            </CardHeader>
            <CardContent className="pt-8 space-y-4">
              {[
                "Acesso completo aos 6 módulos",
                "Todos os templates e checklists",
                "Módulo bônus para imigrantes",
                "Acesso vitalício",
                "Suporte por e-mail"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-14 text-lg bg-moss hover:bg-moss-dark text-emerald-bright border border-moss-dark">
                Comprar à Vista
              </Button>
            </CardFooter>
          </Card>

          {/* Plano Parcelado */}
          <Card className="bg-card-bg border-gold relative shadow-lg shadow-gold/5 transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-deep-1 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              Mais Popular
            </div>
            <CardHeader className="text-center pb-8 border-b border-moss-dark bg-gold/5 rounded-t-xl">
              <CardTitle className="text-2xl font-bold text-text-primary mb-2">Parcelado em 12x</CardTitle>
              <CardDescription className="text-text-secondary mb-6">Acesso vitalício, pagamento facilitado</CardDescription>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-2xl font-bold text-text-primary">12x de R$</span>
                <span className="text-5xl font-extrabold text-text-primary">29</span>
                <span className="text-moss">,70</span>
              </div>
              <p className="text-sm text-moss mt-2">Total: R$ 356,40</p>
            </CardHeader>
            <CardContent className="pt-8 space-y-4">
              {[
                "Acesso completo aos 6 módulos",
                "Todos os templates e checklists",
                "Módulo bônus para imigrantes",
                "Acesso vitalício",
                "Suporte prioritário no WhatsApp"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-14 text-lg bg-emerald hover:bg-emerald-bright text-deep-1 font-bold shadow-lg shadow-emerald/20 border-none">
                Assinar Agora
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Garantia */}
        <div className="max-w-3xl mx-auto bg-card-bg p-8 rounded-2xl border border-moss-dark flex flex-col sm:flex-row items-center gap-6 mb-20">
          <ShieldCheck className="h-16 w-16 text-emerald shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Garantia Incondicional de 15 Dias</h3>
            <p className="text-text-secondary">
              Assista às aulas, baixe os materiais e teste o método. Se em até 15 dias você achar que o curso não é para você, basta enviar um e-mail e devolveremos 100% do seu investimento. Sem perguntas.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-10 flex items-center justify-center gap-3">
            <HelpCircle className="h-8 w-8 text-emerald" /> Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-xl border border-moss-dark">
                <h4 className="text-lg font-bold text-text-primary mb-2">{faq.q}</h4>
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
