import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './styles/pages.css';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import RotasSeguras from './pages/RotasSeguras';
import DicasSeguranca from './pages/DicasSeguranca';

function App() {
  return (
    <Router>
      <div className='header-space'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rotas-seguras" element={<RotasSeguras />} />
          <Route path="/dicas-seguranca" element={<DicasSeguranca />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
