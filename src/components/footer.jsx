import { Link } from "react-router-dom";
import { newsletterService } from "../services/newsletterService";
import { useState, useEffect } from "react";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 4000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, insira um e-mail válido");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await newsletterService.subscribeToNewsletter(email);
      setMessage("✅ E-mail cadastrado com sucesso!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setMessage(`❌ Houve um erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      {/* Efeito de onda no topo do rodapé */}
      <div className="footer-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Coluna 1: Sobre */}
        <div className="footer-col">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <i className="bi bi-shield-check"></i>
              <span className="footer-logo-text">GeoEscape</span>
            </Link>
            <p className="footer-description">
              Uma plataforma dedicada a fornecer informações essenciais sobre
              rotas de fuga e segurança em situações de emergência.
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://facebook.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-col">
          <h3 className="footer-title">Links Rápidos</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">
                <i className="bi bi-chevron-right"></i>
                Página Inicial
              </Link>
            </li>
            <li>
              <Link to="/rotas-seguras">
                <i className="bi bi-chevron-right"></i>
                Rotas Seguras
              </Link>
            </li>
            <li>
              <Link to="/dicas-seguranca">
                <i className="bi bi-chevron-right"></i>
                Dicas de Segurança
              </Link>
            </li>
            <li>
              <a href="#sobre-nos">
                <i className="bi bi-chevron-right"></i>
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#contato">
                <i className="bi bi-chevron-right"></i>
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer-col">
          <h3 className="footer-title">Contato</h3>
          <ul className="footer-contact-info">
            <li>
              <i className="bi bi-geo-alt"></i>
              <span>
                Av. Exemplo, 1234 - Centro
                <br />
                São Paulo - SP, 01001-000
              </span>
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              <a href="tel:+5511999999999">(11) 99999-9999</a>
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              <a href="mailto:contato@geoescape.com">contato@geoescape.com</a>
            </li>
            <li>
              <i className="bi bi-clock"></i>
              <span>Seg-Sex: 9h às 18h</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter */}
        <div className="footer-col">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-description">
            Inscreva-se para receber atualizações e dicas de segurança
            diretamente no seu e-mail.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
                aria-label="Seu e-mail"
                aria-describedby="button-newsletter"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="submit"
                id="button-newsletter"
                disabled={loading}
                style={{textTransform:"capitalize"}}
              >
                {loading ? "Enviando..." : ""}
                <i className="bi bi-send"></i>
              </button>
            </div>
            {message && (
              <div
                className={`mt-2 alert ${
                  message.includes("✅") ? "alert-success" : "alert-danger"
                }`}
              >
                {message}
              </div>
            )}
            <div className="form-text text-white-50">
              Não compartilhamos seus dados. Leia nossa{" "}
              <a href="#" className="text-white">
                Política de Privacidade
              </a>
              .
            </div>
          </form>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="footer-bottom">
        <p className="copyright mb-0">
          &copy; {currentYear} GeoEscape. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
