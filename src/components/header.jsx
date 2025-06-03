import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../styles/header.css';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  
  // Função para verificar se o link está ativo
  const isActive = (path) => location.pathname === path;

  // Efeito para adicionar/remover o evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar o menu ao clicar fora ou pressionar ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target) && 
          menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Desabilitar scroll do body quando o menu está aberto
      document.body.style.overflow = 'hidden';
    } else {
      // Reativar scroll do body
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Fechar o menu ao mudar de rota
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Links de navegação
  const navItems = [
    { to: '/', icon: 'bi-house-door', label: 'Home' },
    { to: '/rotas-seguras', icon: 'bi-signpost-split', label: 'Rotas Seguras' },
    { to: '/dicas-seguranca', icon: 'bi-shield-check', label: 'Dicas de Segurança' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="Página Inicial">
            <i className="logoo bi bi-shield-check" aria-hidden="true"></i>
            <span className="logo-name">EvacuSeguro</span>
          </Link>

          <button 
            ref={menuButtonRef}
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <i 
              className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`} 
              aria-hidden="true"
            ></i>
          </button>

          {/* Overlay do menu móvel */}
          {isMenuOpen && (
            <div 
              className="menu-overlay active" 
              onClick={closeMenu}
              role="presentation"
              aria-hidden="true"
            />
          )}

          {/* Navegação principal */}
          <nav 
            ref={menuRef}
            id="main-navigation"
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`} 
            aria-label="Navegação principal"
          >
            <ul className="nav-menu-list">
              {navItems.map((item) => (
                <li key={item.to} className="nav-item">
                  <Link 
                    to={item.to} 
                    className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive(item.to) ? 'page' : undefined}
                  >
                    <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}