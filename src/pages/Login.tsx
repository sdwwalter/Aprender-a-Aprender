import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, AlertCircle } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (email && password) {
      login();
      navigate('/area-aluno');
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="min-h-screen bg-deep-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <BookOpen className="h-12 w-12 text-emerald" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-text-primary">
          Acesse sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-text-secondary">
          Ou{' '}
          <Link to="/precos" className="font-medium text-emerald hover:text-emerald-bright transition-colors">
            inscreva-se no curso
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card-bg py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-moss-dark">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-900/30 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-200">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                Endereço de e-mail
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-moss-dark bg-deep-2 text-text-primary rounded-md shadow-sm placeholder-moss focus:outline-none focus:ring-emerald focus:border-emerald sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary">
                Senha
              </label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-moss-dark bg-deep-2 text-text-primary rounded-md shadow-sm placeholder-moss focus:outline-none focus:ring-emerald focus:border-emerald sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald focus:ring-emerald border-moss-dark bg-deep-2 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">
                  Lembrar de mim
                </label>
              </div>

              <div className="text-sm">
                <a href="#/" onClick={(e) => e.preventDefault()} className="font-medium text-emerald hover:text-emerald-bright transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-deep-1 bg-emerald hover:bg-emerald-bright focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald focus:ring-offset-deep-1">
                Entrar
              </Button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-moss-dark" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card-bg text-moss">
                  Aviso para alunos
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-text-secondary">
              <p>Qualquer e-mail e senha funcionam neste protótipo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
