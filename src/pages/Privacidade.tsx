import React from 'react';

export const Privacidade = () => {
  return (
    <div className="bg-deep-1 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Política de Privacidade e Termos de Uso</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <h2 className="text-xl font-bold text-emerald-bright mt-8 mb-4">1. Coleta de Informações</h2>
          <p className="text-text-secondary mb-4">
            Coletamos informações que você nos fornece diretamente, como quando cria uma conta, assina nossa newsletter, preenche um formulário ou se comunica conosco. Os tipos de informações que podemos coletar incluem seu nome, endereço de e-mail, senha e outras informações que você escolher fornecer.
          </p>

          <h2 className="text-xl font-bold text-emerald-bright mt-8 mb-4">2. Uso das Informações</h2>
          <p className="text-text-secondary mb-4">
            Usamos as informações que coletamos para fornecer, manter e melhorar nossos serviços, processar transações, enviar avisos técnicos, atualizações, alertas de segurança e mensagens de suporte e administrativas.
          </p>

          <h2 className="text-xl font-bold text-emerald-bright mt-8 mb-4">3. Compartilhamento de Informações</h2>
          <p className="text-text-secondary mb-4">
            Não compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta política de privacidade ou com o seu consentimento.
          </p>

          <h2 className="text-xl font-bold text-emerald-bright mt-8 mb-4">4. Segurança</h2>
          <p className="text-text-secondary mb-4">
            Tomamos medidas razoáveis para ajudar a proteger as informações sobre você contra perda, roubo, uso indevido e acesso não autorizado, divulgação, alteração e destruição.
          </p>

          <h2 className="text-xl font-bold text-emerald-bright mt-8 mb-4">5. Termos de Uso</h2>
          <p className="text-text-secondary mb-4">
            Ao acessar e usar nosso curso, você concorda em cumprir estes termos. O conteúdo do curso é para seu uso pessoal e não comercial. Você não pode modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos do curso.
          </p>

          <h2 className="text-xl font-bold text-emerald-bright mt-8 mb-4">6. Contato</h2>
          <p className="text-text-secondary mb-4">
            Se você tiver alguma dúvida sobre esta Política de Privacidade ou Termos de Uso, entre em contato conosco através da nossa página de contato.
          </p>
        </div>
      </div>
    </div>
  );
};
