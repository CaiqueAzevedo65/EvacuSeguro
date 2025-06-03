import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  const location = useLocation();
  
  // Função para verificar se o link está ativo
  const isActive = (path) => location.pathname === path;

  return (
    <div className='header shadow d-flex align-items-center'>
      <div className='container-fluid row m-0 p-0'>
        <div className='header-title col-12 col-md-6 col-lg-6'>
          <Link to="/" className='text-decoration-none'>
            <div className='logo d-flex align-items-center'>
              <i className="logoo bi bi-shield-check text-light"></i>
              <span className='text-light logo-name'>EvacuSeguro</span>
            </div>
          </Link>
        </div>
        <nav className='header-nav col-12 col-md-6 col-lg-6'>
          <ul className='nav justify-content-end pages'>
            <li className='nav-item'>
              <Link 
                className={`nav-link fs-5 ${isActive('/') ? 'active' : 'text-light'}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                className={`nav-link fs-5 ${isActive('/rotas-seguras') ? 'active' : 'text-light'}`} 
                to="/rotas-seguras"
              >
                Rotas Seguras
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                className={`nav-link fs-5 ${isActive('/dicas-seguranca') ? 'active' : 'text-light'}`} 
                to="/dicas-seguranca"
              >
                Dicas de Segurança
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}