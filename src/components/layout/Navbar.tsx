import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: 'Sobre', path: '/sobre' },
    { name: 'Módulos', path: '/modulos' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Preços', path: '/precos' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-deep-2/90 backdrop-blur-md border-b border-moss-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-emerald" />
              <span className="font-bold text-xl text-text-primary">Aprender<span className="text-emerald">.</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-text-secondary hover:text-emerald transition-colors text-sm font-medium">
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4 border-l border-moss-dark pl-4">
              {isAuthenticated ? (
                <>
                  <Link to="/area-aluno" className="text-text-secondary hover:text-emerald transition-colors text-sm font-medium">Área do Aluno</Link>
                  <Button onClick={logout} variant="outline" className="border-moss text-text-secondary hover:bg-moss-dark hover:text-emerald">Sair</Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-text-secondary hover:text-emerald transition-colors text-sm font-medium">Entrar</Link>
                  <Link to="/precos">
                    <Button className="bg-emerald text-deep-1 hover:bg-emerald-bright font-bold border-none">Começar Agora</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-secondary hover:text-emerald">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-2 border-b border-moss-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-text-secondary hover:text-emerald hover:bg-moss-dark rounded-md text-base font-medium">
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/area-aluno" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-text-secondary hover:text-emerald hover:bg-moss-dark rounded-md text-base font-medium">Área do Aluno</Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-text-secondary hover:text-emerald hover:bg-moss-dark rounded-md text-base font-medium">Sair</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-text-secondary hover:text-emerald hover:bg-moss-dark rounded-md text-base font-medium">Entrar</Link>
                <Link to="/precos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-emerald font-bold hover:bg-moss-dark rounded-md text-base">Começar Agora</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
