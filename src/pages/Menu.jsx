import { useState } from 'react'
import '../styles/Menu.css'

const menuData = {
  kebaplar: {
    icon: '🔥',
    title: 'Kebaplar',
    desc: 'Geleneksel Adana usulü, özel baharat karışımıyla marine edilmiş taze et çeşitleri',
    items: [
      { name: 'Adana Kebap', desc: 'Kıyma, biber ve baharatlarla hazırlanan imza kebabımız. İnce ekmek ve közlenmiş domates ile servis edilir.', price: '₺280', badges: ['spicy', 'popular'] },
      { name: 'Urfa Kebap', desc: 'Acısız, aromalı kıyma kebabı. Aile sofraları için ideal.', price: '₺260', badges: ['popular'] },
      { name: 'Tavuk Şiş', desc: 'Marine edilmiş tavuk göğsü, kömür ateşinde pişirilir.', price: '₺230', badges: [] },
      { name: 'Karışık Kebap', desc: 'Adana, Urfa ve tavuk şiş üçlüsü. Zengin damak tatları için.', price: '₺340', badges: ['popular'] },
      { name: 'Kuzu Şiş', desc: 'Özel marine kuzu but şiş. Yavaş ateşte pişirilir.', price: '₺320', badges: ['new'] },
      { name: 'Patlıcanlı Kebap', desc: 'Közlenmiş patlıcan üzerine Adana kebap. Şef\'in özel sosuyla.', price: '₺300', badges: ['popular'] },
    ],
  },
  izgaralar: {
    icon: '🥩',
    title: 'Izgaralar',
    desc: 'Seçme etlerin kömür mangalında, en doğal haliyle pişirilmiş versiyonları',
    items: [
      { name: 'Dana Antrikot', desc: '250gr dana antrikot, yanında közlenmiş sebze ve pilav ile.', price: '₺380', badges: ['popular'] },
      { name: 'Kuzu Pirzola', desc: 'Taze kuzu pirzola, özel baharat harmanıyla marine edilmiş.', price: '₺360', badges: [] },
      { name: 'Köfte', desc: 'Ev yapımı ızgara köfte, domates sos ve yoğurtla.', price: '₺220', badges: ['popular'] },
      { name: 'Karışık Izgara', desc: 'Dana, kuzu ve tavutdan oluşan büyük porsiyonlu tabak.', price: '₺420', badges: ['new'] },
      { name: 'Tavuk Kanat', desc: 'Baharatlı marine tavuk kanat. Crispy dışı, sulu içi.', price: '₺200', badges: ['spicy'] },
      { name: 'Balık Izgara', desc: 'Günün taze balığı, limon ve zeytinyağı ile.', price: '₺280', badges: [] },
    ],
  },
  mezeler: {
    icon: '🫙',
    title: 'Mezeler',
    desc: 'Her gün taze hazırlanan geleneksel Türk mezeleri ve salata çeşitleri',
    items: [
      { name: 'Haydari', desc: 'Süzme yoğurt, sarımsak ve taze nane ile hazırlanan kremalı meze.', price: '₺80', badges: [] },
      { name: 'Humus', desc: 'Nohut, tahin ve limondan yapılan geleneksel humus.', price: '₺90', badges: [] },
      { name: 'Acılı Ezme', desc: 'Domates, biber ve baharatlarla hazırlanan ateşli ezme.', price: '₺75', badges: ['spicy', 'popular'] },
      { name: 'Mevsim Salatası', desc: 'Taze sebzeler, nar ekşisi ve zeytinyağlı sos.', price: '₺95', badges: [] },
      { name: 'Közlenmiş Patlıcan', desc: 'Közde pişirilmiş patlıcan, sarımsak ve zeytinyağlı.', price: '₺85', badges: ['popular'] },
      { name: 'Meze Tabağı', desc: 'Tüm mezelerimizden seçilmiş karışık tabak. İkili paylaşım için.', price: '₺180', badges: ['popular'] },
    ],
  },
  tatlilar: {
    icon: '🍮',
    title: 'Tatlılar',
    desc: 'Geleneksel Türk tatlıları ve özel ev yapımı lezzetlerle sofranızı taçlandırın',
    items: [
      { name: 'Künefe', desc: 'Tel kadayıf, taze peynir ve şerbetten oluşan sıcak tatlı. Dondurma ile servis edilir.', price: '₺160', badges: ['popular'] },
      { name: 'Sütlü Nuriye', desc: 'Sütlü şurupla ıslatılmış baklava. Hafif ve kremamsı.', price: '₺130', badges: ['new'] },
      { name: 'Baklava', desc: 'Antep fıstığı veya cevizli ev yapımı baklava. Günlük taze.', price: '₺140', badges: ['popular'] },
      { name: 'Sütlaç', desc: 'Fırında pişirilmiş geleneksel Türk pirinç pudingi.', price: '₺95', badges: [] },
      { name: 'Kadayıf', desc: 'Şerbetli tel kadayıf, kaymak ve ceviz ile.', price: '₺120', badges: [] },
      { name: 'Dondurma', desc: 'Günlük taze dondurma çeşitleri. Vanilyalı, çikolatalı veya sakızlı.', price: '₺80', badges: [] },
    ],
  },
}

const tabOrder = ['kebaplar', 'izgaralar', 'mezeler', 'tatlilar']

export default function Menu() {
  const [activeTab, setActiveTab] = useState('hepsi')

  const renderItems = (items) => (
    <div className="menu-items-grid">
      {items.map(item => (
        <div className="menu-item-card" key={item.name}>
          <div className="menu-item-info">
            <div className="menu-item-name">{item.name}</div>
            <div className="menu-item-desc">{item.desc}</div>
            {item.badges.length > 0 && (
              <div className="menu-item-badges">
                {item.badges.map(b => (
                  <span key={b} className={`menu-badge ${b}`}>
                    {b === 'spicy' ? '🌶 Acılı' : b === 'popular' ? '⭐ Popüler' : '✦ Yeni'}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="menu-item-price">{item.price}</div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="menu-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-pattern" />
        <div className="page-hero-content">
          <span className="section-label">Mutfağımızdan</span>
          <h1>Şef Kebap <em>Menüsü</em></h1>
          <p>Geleneksel lezzetler, taze malzemeler</p>
        </div>
      </div>

      <div className="container">
        {/* Tabs */}
        <div className="menu-tabs">
          <button
            className={`menu-tab ${activeTab === 'hepsi' ? 'active' : ''}`}
            onClick={() => setActiveTab('hepsi')}
          >
            Tüm Kategoriler
          </button>
          {tabOrder.map(key => (
            <button
              key={key}
              className={`menu-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {menuData[key].icon} {menuData[key].title}
            </button>
          ))}
        </div>

        {/* Note */}
        <div className="menu-note">
          <p>
            <strong>Not:</strong> Tüm fiyatlarımıza KDV dahildir. Porsiyon büyüklükleri
            kişiye göre değişebilir. Alerjiniz varsa lütfen garsonumuzu bilgilendirin.
            Günlük özel menü için bizi arayın: <strong>(0322) 226 00 11</strong>
          </p>
        </div>

        {/* All categories */}
        {activeTab === 'hepsi' && tabOrder.map(key => {
          const cat = menuData[key]
          return (
            <div className="menu-all-section" key={key}>
              <h3>
                <span className="cat-icon">{cat.icon}</span>
                {cat.title}
              </h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 28, fontSize: 15 }}>
                {cat.desc}
              </p>
              {renderItems(cat.items)}
            </div>
          )
        })}

        {/* Single category */}
        {activeTab !== 'hepsi' && menuData[activeTab] && (() => {
          const cat = menuData[activeTab]
          return (
            <>
              <div className="menu-category-header">
                <span className="menu-category-icon">{cat.icon}</span>
                <div>
                  <h2>{cat.title}</h2>
                  <p>{cat.desc}</p>
                </div>
              </div>
              {renderItems(cat.items)}
            </>
          )
        })()}
      </div>
    </div>
  )
}
