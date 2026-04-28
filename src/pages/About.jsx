import '../styles/About.css'

const values = [
  { icon: '🌿', title: 'Taze Malzeme', desc: 'Her gün yerel tedarikçilerden alınan taze sebze, et ve baharatlar kullanıyoruz.' },
  { icon: '🔥', title: 'Geleneksel Pişirme', desc: 'Odun ve kömür ateşinde, ecdattan öğrendiğimiz usullerle pişirim yapıyoruz.' },
  { icon: '🤝', title: 'Samimi Hizmet', desc: 'Her misafirimiz bize aile gibi değerlidir. Sıcak Adana misafirperverliği şiarımızdır.' },
]

const team = [
  { emoji: '👨‍🍳', name: 'Mehmet Yıldırım', role: 'Kurucu Şef', desc: '30 yıllık deneyimiyle Adana kebabının ustası. Tüm tariflerin mimarı.' },
  { emoji: '👩‍🍳', name: 'Ayşe Yıldırım', role: 'Tatlı Şefi', desc: 'Geleneksel Türk tatlılarını modern sunumla buluşturan ressam.' },
  { emoji: '🧑‍🍳', name: 'Emre Kaya', role: 'Baş Aşçı', desc: 'İzgara ve meze uzmanı. 15 yıldır Şef Kebap mutfağının kalbi.' },
]

const stats = [
  { number: '20+', label: 'Yıllık Deneyim' },
  { number: '500+', label: 'Günlük Müşteri' },
  { number: '40+', label: 'Menü Çeşidi' },
  { number: '4.9', label: 'Ortalama Puan' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-pattern" />
        <div className="page-hero-content">
          <span className="section-label">Biz Kimiz</span>
          <h1><em>Hakkımızda</em></h1>
          <p>Gelenekten gelen, geleceğe taşınan lezzet</p>
        </div>
      </div>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-img-block">
              <div className="about-img-block-bg" />
              <span className="about-img-icon">🔥</span>
              <div className="about-corner-accent" />
            </div>

            <div className="about-story-text">
              <span className="section-label">Hikayemiz</span>
              <h2 className="section-title">
                Adana'nın <em>Ateşi</em> ile Doğduk
              </h2>
              <div className="gold-divider left" />

              <p>
                Şef Kebap, 2005 yılında Mehmet Yıldırım tarafından Seyhan'ın tarihi
                Yenibaraj Mahallesi'nde kuruldu. Aileden öğrenilen otantik tarifler
                ve babaların babasından gelen pişirme teknikleriyle küçük bir dükkândan
                başladık.
              </p>
              <p>
                Yıllar içinde Adana'nın sevilen lezzet adreslerinden biri haline
                geldik. Bugün hâlâ aynı tutkuyla, aynı geleneksel yöntemlerle ve
                her geçen gün daha da güçlenen bir ekiple misafirlerimize hizmet
                veriyoruz.
              </p>
              <p>
                Sırrımız basit: En taze malzeme, en saf tarif, en samimi hizmet.
                Adana kebabı bizim için sadece bir yemek değil; bir kültür, bir kimlik,
                bir tutku.
              </p>
            </div>
          </div>

          <div className="about-story-grid" style={{ direction: 'ltr' }}>
            <div className="about-story-text">
              <span className="section-label">Felsefemiz</span>
              <h2 className="section-title">
                Lezzet <em>Yalın</em> Olduğunda Güzeldir
              </h2>
              <div className="gold-divider left" />

              <p>
                Adana mutfağı yüzyıllar boyunca saf ve sade kalmış, gösterişten
                uzak ama derinlikten ödün vermeden varlığını sürdürmüştür. Biz de
                bu anlayışla hareket ediyoruz.
              </p>
              <p>
                Her sabah taze alınan etler, günlük hazırlanan mezeler, ateşe
                düşen baharatlar. Hiçbir kısayol, hiçbir hazır ürün. Sadece gerçek,
                saf ve dürüst bir mutfak.
              </p>
              <p>
                Sofranıza koyduğumuz her tabak, onlarca yıllık birikimin ve derin
                bir ustalık sevgisinin ürünüdür.
              </p>
            </div>

            <div className="about-img-block">
              <div className="about-img-block-bg" style={{
                background: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.25) 0%, transparent 65%), radial-gradient(ellipse at 30% 80%, rgba(176,58,46,0.2) 0%, transparent 55%), var(--dark-card)'
              }} />
              <span className="about-img-icon">🥩</span>
              <div className="about-corner-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="about-values-header">
            <span className="section-label">Değerlerimiz</span>
            <h2 className="section-title">
              Bizi <em>Biz</em> Yapan Şeyler
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="about-values-grid">
            {values.map(v => (
              <div className="value-card" key={v.title}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="about-team-header">
            <span className="section-label">Ekibimiz</span>
            <h2 className="section-title">
              Lezzetin <em>Mimarları</em>
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="team-grid">
            {team.map(member => (
              <div className="team-card" key={member.name}>
                <div className="team-card-photo">
                  <span>{member.emoji}</span>
                </div>
                <div className="team-card-info">
                  <h4>{member.name}</h4>
                  <span className="team-card-role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
