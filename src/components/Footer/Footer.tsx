import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <img
            src="/logoBuguDudaFooter.png"
            alt="BuguDuda Cookies"
            className="footer-logo"
          />
          <p className="footer-brand-text">
            Cookies artesanais feitos com amor e ingredientes selecionados,
            direto da nossa cozinha para a sua mesa.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contato</h3>
          <p className="footer-text">
            📍 Avenida Amazonas, 565 - Universitário, Caruaru-PE
          </p>
          <p className="footer-text">📧 oi@bugududa.com.br</p>
          <p className="footer-text">📱 (81) 99115-0401</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Redes Sociais</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text footer-newsletter-desc">
            Receba novidades e promoções exclusivas.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="newsletter-input"
            />
            <button className="newsletter-button" aria-label="Assinar">
              →
            </button>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BuguDuda · Feito com 🍪 e muito amor</p>
      </div>
    </footer>
  );
}
