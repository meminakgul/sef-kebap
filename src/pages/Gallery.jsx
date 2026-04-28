import { useState } from 'react'
import '../styles/Gallery.css'

const galleryItems = [
  { id: 1, icon: '🔥', label: 'Adana Kebap', category: 'kebap', size: 'tall' },
  { id: 2, icon: '🥩', label: 'Karışık Izgara', category: 'izgara', size: 'square' },
  { id: 3, icon: '🫙', label: 'Meze Tabağı', category: 'meze', size: 'square' },
  { id: 4, icon: '🍮', label: 'Künefe', category: 'tatli', size: 'tall' },
  { id: 5, icon: '🔥', label: 'Urfa Kebap', category: 'kebap', size: 'wide' },
  { id: 6, icon: '🥩', label: 'Kuzu Pirzola', category: 'izgara', size: 'square' },
  { id: 7, icon: '🫙', label: 'Acılı Ezme', category: 'meze', size: 'square' },
  { id: 8, icon: '✨', label: 'Restoranımız', category: 'mekan', size: 'wide' },
  { id: 9, icon: '🍮', label: 'Baklava Çeşidi', category: 'tatli', size: 'square' },
]

const filters = [
  { key: 'hepsi', label: 'Tümü' },
  { key: 'kebap', label: '🔥 Kebaplar' },
  { key: 'izgara', label: '🥩 Izgaralar' },
  { key: 'meze', label: '🫙 Mezeler' },
  { key: 'tatli', label: '🍮 Tatlılar' },
  { key: 'mekan', label: '✨ Mekan' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('hepsi')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'hepsi'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  return (
    <div className="gallery-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-pattern" />
        <div className="page-hero-content">
          <span className="section-label">Görsel Şölen</span>
          <h1>Lezzet <em>Galerimiz</em></h1>
          <p>Her kare bir hikaye, her tabak bir sanat</p>
        </div>
      </div>

      <div className="container">
        {/* Filters */}
        <div className="gallery-filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`gallery-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`gallery-item ${item.size}`}
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-item-bg">
                <span className="gallery-item-food">{item.icon}</span>
              </div>
              <div className="gallery-item-overlay">
                <div className="gallery-overlay-plus">+</div>
                <div className="gallery-overlay-text">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Bu kategoride henüz fotoğraf bulunmuyor.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Kapat"
          >
            ✕
          </button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <div className="lightbox-visual">
              <div
                className="lightbox-visual-bg"
                style={{
                  background: `radial-gradient(ellipse at 40% 60%, rgba(176,58,46,0.4), rgba(10,8,6,0.95))`
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>{lightbox.icon}</span>
            </div>
            <div className="lightbox-caption">{lightbox.label}</div>
            <div className="lightbox-cat">
              {filters.find(f => f.key === lightbox.category)?.label || ''}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
