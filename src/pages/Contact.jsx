import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', guests: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-pattern" />
        <div className="page-hero-content">
          <span className="section-label">Bize Ulaşın</span>
          <h1><em>İletişim</em></h1>
          <p>Rezervasyon ve sorularınız için buradayız</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info">
            <span className="section-label">Bize Ulaşın</span>
            <h2 className="section-title">
              Her Zaman <em>Yanınızdayız</em>
            </h2>
            <div className="gold-divider left" />

            <p>
              Rezervasyon, etkinlik planlama veya herhangi bir konuda
              bize ulaşabilirsiniz. Ekibimiz size yardımcı olmaktan
              memnuniyet duyacaktır.
            </p>

            <div className="contact-info-cards">
              <a
                href="tel:+903222260011"
                className="contact-info-card"
              >
                <span className="contact-card-icon">☎</span>
                <div className="contact-card-text">
                  <strong>Telefon</strong>
                  <span>(0322) 226 00 11</span>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/wT81j7UnusjPPPkW7"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <span className="contact-card-icon">📍</span>
                <div className="contact-card-text">
                  <strong>Adres</strong>
                  <span>Yenibaraj Mahallesi, Seyhan / Adana</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/sefkebap/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <span className="contact-card-icon">📸</span>
                <div className="contact-card-text">
                  <strong>Instagram</strong>
                  <span>@sefkebap</span>
                </div>
              </a>

              <div className="contact-info-card">
                <span className="contact-card-icon">🕐</span>
                <div className="contact-card-text">
                  <strong>Çalışma Saatleri</strong>
                  <span>Her gün 11:00 – 23:00</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Sosyal Medya</h4>
              <div className="contact-social-links">
                <a
                  href="https://www.instagram.com/sefkebap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <span>IG</span>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/Yenibaraj+Seyhan+Adana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <span>📍</span>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h4>Mesajınız Alındı!</h4>
                <p>
                  En kısa sürede size geri döneceğiz. Acil rezervasyon için
                  doğrudan arayabilirsiniz: (0322) 226 00 11
                </p>
              </div>
            ) : (
              <>
                <h3>Rezervasyon / Mesaj</h3>
                <p>Formu doldurun, size 24 saat içinde geri dönelim.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Adınız Soyadınız"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Tarih</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="guests">Kişi Sayısı</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="">Seçin</option>
                        <option value="1-2">1 – 2 Kişi</option>
                        <option value="3-5">3 – 5 Kişi</option>
                        <option value="6-10">6 – 10 Kişi</option>
                        <option value="10+">10+ Kişi</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mesajınız</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Özel isteğiniz, etkinlik detayı veya sorunuz..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="form-submit">
                    Mesaj Gönder
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-map-header">
            <span className="section-label">Konum</span>
            <h2 className="section-title">Bizi <em>Bulun</em></h2>
            <div className="gold-divider" />
          </div>

          <div className="map-placeholder">
            <div className="map-placeholder-bg" />
            <div className="map-placeholder-inner">
              <span className="map-pin-icon">📍</span>
              <h4>Yenibaraj Mahallesi</h4>
              <p>Seyhan / Adana, Türkiye</p>
              <a
                href="https://maps.app.goo.gl/DtCGsTYqq6Y6SL8p6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Google Maps'te Aç</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="contact-hours">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Zaman Planlaması</span>
            <h2 className="section-title">Çalışma <em>Saatleri</em></h2>
            <div className="gold-divider" />
          </div>

          <div className="hours-grid">
            <div className="hours-card">
              <h4>Hafta İçi</h4>
              <div className="hours-row">
                <span className="day">Pazartesi</span>
                <span className="time">11:00 – 23:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Salı</span>
                <span className="time">11:00 – 23:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Çarşamba</span>
                <span className="time">11:00 – 23:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Perşembe</span>
                <span className="time">11:00 – 23:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Cuma</span>
                <span className="time">11:00 – 23:00</span>
              </div>
            </div>

            <div className="hours-card">
              <h4>Hafta Sonu</h4>
              <div className="hours-row">
                <span className="day">Cumartesi</span>
                <span className="time">11:00 – 24:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Pazar</span>
                <span className="time">12:00 – 22:00</span>
              </div>
              <div className="hours-row" style={{ marginTop: 20 }}>
                <span className="day" style={{ color: 'var(--gold)', fontSize: 14, fontStyle: 'normal', fontFamily: 'Bebas Neue', letterSpacing: '1px' }}>
                  📞 Rezervasyon
                </span>
                <a href="tel:+903222260011" className="time" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                  (0322) 226 00 11
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
