import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <span className="logo-main">Şef Kebap</span>
            <span className="logo-sub">Adana · Est. 2005</span>
            <p>
              Adana'nın kalbinde, geleneksel lezzetleri modern bir dokunuşla
              sunan kebap restoranımıza hoş geldiniz.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/sefkebap/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://maps.app.goo.gl/wT81j7UnusjPPPkW7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
              >
                📍
              </a>
              <a
                href="tel:+903222260011"
                aria-label="Telefon"
              >
                ☎
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Sayfalar</h4>
            <ul>
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/menu">Menü</Link></li>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/galeri">Galeri</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>İletişim</h4>
            <div className="footer-contact-item">
              <span className="icon">☎</span>
              <a href="tel:+903222260011">(0322) 226 00 11</a>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📍</span>
              <a
                href="https://maps.app.goo.gl/wT81j7UnusjPPPkW7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yenibaraj, Seyhan / Adana
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="icon">IG</span>
              <a
                href="https://www.instagram.com/sefkebap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sefkebap
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-col">
            <h4>Çalışma Saatleri</h4>
            <div className="footer-hours-row">
              <span className="day">Pzt – Cuma</span>
              <span className="time">11:00 – 23:00</span>
            </div>
            <div className="footer-hours-row">
              <span className="day">Cumartesi</span>
              <span className="time">11:00 – 24:00</span>
            </div>
            <div className="footer-hours-row">
              <span className="day">Pazar</span>
              <span className="time">12:00 – 22:00</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Şef Kebap. Tüm hakları saklıdır.</p>
          <div className="footer-bottom-links">
            <Link to="/iletisim">İletişim</Link>
            <a
              href="https://www.instagram.com/sefkebap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
