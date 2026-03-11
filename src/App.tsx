/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Modulos } from './pages/Modulos';
import { Recursos } from './pages/Recursos';
import { Precos } from './pages/Precos';
import { Blog } from './pages/Blog';
import { Contato } from './pages/Contato';
import { Login } from './pages/Login';
import { AreaAluno } from './pages/AreaAluno';
import { Privacidade } from './pages/Privacidade';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/precos" element={<Precos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/area-aluno" element={<AreaAluno />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Privacidade />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
