import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-deep-2 border-t border-moss-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-emerald" />
              <span className="font-bold text-xl text-text-primary">Aprender<span className="text-emerald">.</span></span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-md">
              Transforme sua maneira de estudar e aplique o conhecimento na prática. Um método validado para adultos que não têm tempo a perder.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-moss hover:text-emerald transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-moss hover:text-emerald transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-moss hover:text-emerald transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-text-primary font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><Link to="/sobre" className="hover:text-emerald transition-colors">Sobre o Curso</Link></li>
              <li><Link to="/modulos" className="hover:text-emerald transition-colors">Programa Completo</Link></li>
              <li><Link to="/precos" className="hover:text-emerald transition-colors">Planos e Preços</Link></li>
              <li><Link to="/blog" className="hover:text-emerald transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><Link to="/contato" className="hover:text-emerald transition-colors">Contato</Link></li>
              <li><Link to="/recursos" className="hover:text-emerald transition-colors">Recursos Gratuitos</Link></li>
              <li><Link to="/login" className="hover:text-emerald transition-colors">Área do Aluno</Link></li>
              <li><Link to="/sobre" className="hover:text-emerald transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-moss-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Aprender a Aprender. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-text-secondary">
            <Link to="/privacidade" className="hover:text-emerald transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-emerald transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
