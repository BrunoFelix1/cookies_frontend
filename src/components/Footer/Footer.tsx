import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <p className="footer-text">123 Main St</p>
          <p className="footer-text">sweet-Crumb.com</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Social Media</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <span>f</span>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <span>t</span>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <span>▶</span>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <span>📷</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Sweet Crumbs Bakery</p>
      </div>
    </footer>
  );
}
