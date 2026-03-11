import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Contato = () => {
  return (
    <div className="bg-deep-2 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Fale Conosco</h1>
          <p className="text-lg text-text-secondary">
            Dúvidas sobre o curso? Precisa de ajuda com o acesso? Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Informações de Contato */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card-bg p-6 rounded-2xl border border-moss-dark shadow-sm flex items-start gap-4">
              <div className="bg-moss p-3 rounded-full shrink-0">
                <Mail className="h-6 w-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">E-mail</h3>
                <p className="text-text-secondary text-sm mb-2">Respondemos em até 24h úteis.</p>
                <a href="mailto:suporte@aprender.com" className="text-emerald font-medium hover:text-emerald-bright transition-colors">suporte@aprender.com</a>
              </div>
            </div>

            <div className="bg-card-bg p-6 rounded-2xl border border-moss-dark shadow-sm flex items-start gap-4">
              <div className="bg-moss p-3 rounded-full shrink-0">
                <MessageCircle className="h-6 w-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">WhatsApp</h3>
                <p className="text-text-secondary text-sm mb-2">Atendimento de Seg a Sex, 9h às 18h.</p>
                <a href="https://wa.me/5511999999999" className="text-emerald font-medium hover:text-emerald-bright transition-colors">+55 (11) 99999-9999</a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2 bg-card-bg p-8 rounded-2xl border border-moss-dark shadow-sm">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Envie uma mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary">Nome Completo</label>
                  <Input id="name" placeholder="João Silva" required className="bg-deep-1 border-moss-dark text-text-primary placeholder:text-moss focus:border-emerald" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary">E-mail</label>
                  <Input id="email" type="email" placeholder="joao@exemplo.com" required className="bg-deep-1 border-moss-dark text-text-primary placeholder:text-moss focus:border-emerald" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Assunto</label>
                <select id="subject" className="flex h-10 w-full rounded-md border border-moss-dark bg-deep-1 px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-0 focus-visible:border-emerald">
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre o curso</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="financeiro">Financeiro / Pagamento</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="flex w-full rounded-md border border-moss-dark bg-deep-1 px-3 py-2 text-sm text-text-primary placeholder:text-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-0 focus-visible:border-emerald"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-emerald hover:bg-emerald-bright text-deep-1 font-bold h-12 text-lg border-none">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
