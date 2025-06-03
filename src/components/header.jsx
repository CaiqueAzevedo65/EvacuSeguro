import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/header.css';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Função para verificar se o link está ativo
  const isActive = (path) => location.pathname === path;

  // Efeito para adicionar o evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar o menu ao clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="logoo bi bi-shield-check"></i>
            <span className="logo-name">EvacuSeguro</span>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>


          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Navegação principal">
            <ul className="nav-menu-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="bi bi-house-door"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/rotas-seguras" 
                  className={`nav-link ${isActive('/rotas-seguras') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="bi bi-signpost-split"></i>
                  Rotas Seguras
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/dicas-seguranca" 
                  className={`nav-link ${isActive('/dicas-seguranca') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <i className="bi bi-shield-check"></i>
                  Dicas de Segurança
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}