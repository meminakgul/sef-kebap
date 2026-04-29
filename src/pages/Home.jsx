import { Link } from 'react-router-dom'
import '../styles/Home.css'

const menuCategories = [
  {
    icon: '🔥',
    title: 'Kebaplar',
    desc: 'Adana, Urfa, Tavuk Şiş ve daha fazlası. Özel baharatlarla marine edilmiş taze etler.',
    tag: 'İmza Lezzet',
  },
  {
    icon: '🥩',
    title: 'Izgaralar',
    desc: 'Kömür ateşinde pişirilmiş dana antrikot, pirzola ve köfte çeşitlerimiz.',
    tag: 'Şef Önerir',
  },
  {
    icon: '🫙',
    title: 'Mezeler',
    desc: 'Tazelik içinde hazırlanan haydari, humus, ezme ve özel mevsim meze seçenekleri.',
    tag: 'Günlük Taze',
  },
  {
    icon: '🍮',
    title: 'Tatlılar',
    desc: 'Künefe, sütlü nuriye ve ev yapımı baklava ile sofranızı taçlandırın.',
    tag: 'Geleneksel',
  },
]

const galleryItems = [
  { label: 'Şef\'in İmza Adana Kebabı', icon: '🔥' },
  { label: 'Izgara Çeşitleri', icon: '🥩' },
  { label: 'Özel Mezeler', icon: '🫙' },
  { label: 'Tatlı Köşesi', icon: '🍮' },
  { label: 'Atmosferimiz', icon: '✨' },
]

export default function Home() {
  return (
    <div className="home-page">
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-noise" />
        <div className="hero-ornament" />

        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span>Adana'nın Gerçek Lezzeti</span>
          </div>

          <h1>
            Şef
            <span className="title-em">Kebap</span>
            <span className="title-sub">Adana · Seyhan</span>
          </h1>

          <p className="hero-desc">
            1990'lardan bu yana kuşaktan kuşağa aktarılan tariflerimizle,
            Adana'nın otantik kebap kültürünü yaşatıyoruz.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="btn-primary">
              <span>Menüyü Gör</span>
            </Link>
            <Link to="/iletisim" className="btn-outline">
              Rezervasyon
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Keşfet</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ---- FEATURE STRIP ---- */}
      <div className="feature-strip">
        <div className="container">
          <div className="feature-strip-inner">
            <div className="feature-item">
              <span className="feature-icon">🔥</span>
              <div className="feature-text">
                <strong>Odun Ateşinde</strong>
                <small>Geleneksel pişirme</small>
              </div>
            </div>
            <div className="feature-sep" />
            <div className="feature-item">
              <span className="feature-icon">🌿</span>
              <div className="feature-text">
                <strong>Taze Malzeme</strong>
                <small>Günlük tedarik</small>
              </div>
            </div>
            <div className="feature-sep" />
            <div className="feature-item">
              <span className="feature-icon">👨‍🍳</span>
              <div className="feature-text">
                <strong>Ustadan Tarif</strong>
                <small>20 yıllık deneyim</small>
              </div>
            </div>
            <div className="feature-sep" />
            <div className="feature-item">
              <span className="feature-icon">📍</span>
              <div className="feature-text">
                <strong>Seyhan, Adana</strong>
                <small>Yenibaraj Mahallesi</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- SIGNATURE ---- */}
      <section className="signature-section">
        <div className="container">
          <div className="signature-grid">
            <div className="signature-visual">
              <div className="signature-img-frame">
                <div className="signature-img-bg">
                  <span className="signature-img-icon">🔥</span>
                </div>
              </div>
              <div className="signature-badge">
                <span className="badge-num">20+</span>
                <span className="badge-text">YIL</span>
              </div>
            </div>

            <div className="signature-content">
              <span className="section-label">Hikayemiz</span>
              <h2 className="section-title">
                Adana'nın <em>Ruhunu</em> Taşıyan Bir Mekan
              </h2>
              <div className="gold-divider left" />

              <p>
                Şef Kebap, Adana kebabının anavatanında, Seyhan'ın kalbinde
                konuşlanan özgün bir lezzet durağıdır. Her tabak, ustalardan
                öğrenilen geleneksel tariflerle ve taze yerel malzemelerle hazırlanır.
              </p>
              <p>
                Kömür ateşinin dumanı, baharatların kokusu ve sıcak Adana
                misafirperverliği bir araya geldiğinde ortaya çıkan şey sadece
                bir yemek değil; bir deneyimdir.
              </p>

              <div className="signature-quote">
                <blockquote>
                  "Adana kebabı bir et değil, bir medeniyettir."
                </blockquote>
                <cite>— Şef Mehmet, Kurucu</cite>
              </div>

              <Link to="/hakkimizda" className="btn-outline">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- MENU PREVIEW ---- */}
      <section className="menu-preview">
        <div className="container">
          <div className="menu-preview-header">
            <span className="section-label">Damak Tadınız İçin</span>
            <h2 className="section-title">
              Seçkin <em>Lezzetler</em>
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="menu-preview-grid">
            {menuCategories.map(cat => (
              <div className="menu-card" key={cat.title}>
                <div className="menu-card-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="menu-card-tag">{cat.tag}</span>
              </div>
            ))}
          </div>

          <div className="menu-preview-cta">
            <Link to="/menu" className="btn-primary">
              <span>Tüm Menüyü Görüntüle</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- GALLERY STRIP ---- */}
      <section className="gallery-strip">
        <div className="container">
          <div className="gallery-strip-header">
            <span className="section-label">Fotoğraflar</span>
            <h2 className="section-title">
              <em>Gözlerinizle</em> Afiyet Olsun
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="gallery-grid-home">
            {galleryItems.map((item, i) => (
              <div className="gallery-cell" key={i}>
                <div className="gallery-cell-bg">
                      
                  <span className="gallery-cell-food-icon">{item.icon}</span>
                </div>
                <div className="gallery-cell-overlay">

                  <span className="gallery-overlay-icon">+</span>
                </div>
                <div className="gallery-cell-label">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="gallery-strip-cta">
            <Link to="/galeri" className="btn-outline">
              Tüm Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* ---- TESTIMONIAL ---- */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-inner">
            <div className="testimonial-stars">★ ★ ★ ★ ★</div>
            <blockquote>
              "New York'dan kalkıp şef kebap için yollara düştüm. Cok memnun kaldım. Yemekler müthiş lezzetli. Çalışanların hepsi cok ilgili ve güler yüzlüler. Ben 10 yıldız olsa 10 yildiz vereceğim o derece 😁 Muhakkak gidilmesi gereken bir yer...."
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">D</div>
              <div className="testimonial-name">
                <strong>Dilara Uysal</strong>
                <small>Adana, Türkiye · Google Yorumu</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container">
          <div className="cta-inner">
            <span className="section-label">Sofranızı Hazırlayalım</span>
            <h2 className="section-title">
              Rezervasyon <em>Yapın</em>
            </h2>
            <p>
              Özel anlarınızı ve kutlamalarınızı bizimle paylaşın.
              Masanızı ayırtmak için bizi arayın.
            </p>
            <div className="cta-actions">
              <a href="tel:+903222260011" className="btn-primary">
                <span>(0322) 226 00 11</span>
              </a>
              <Link to="/iletisim" className="btn-outline">
                İletişim Formu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
