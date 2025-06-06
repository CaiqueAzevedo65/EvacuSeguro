import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import './styles/pages.css';
import Footer from './components/Footer/footer.jsx';
import Header from './components/Header/header.jsx';
import Home from './pages/home.jsx';
import RotasSeguras from './pages/RotasSeguras';
import DicasSeguranca from './pages/DicasSeguranca';

// Componente para rolar para o topo ao mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rotas-seguras" element={<RotasSeguras />} />
            <Route path="/dicas-seguranca" element={<DicasSeguranca />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
