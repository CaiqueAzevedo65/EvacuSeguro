import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import './styles/pages.css';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import RotasSeguras from './pages/RotasSeguras';
import DicasSeguranca from './pages/DicasSeguranca';

function App() {
  // Efeito para rolar para o topo ao mudar de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="app-container">
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
