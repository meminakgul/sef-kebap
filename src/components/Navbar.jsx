import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/Navbar.css'

const navItems = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Menü', to: '/menu' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'İletişim', to: '/iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-main">Şef Kebap</span>
            <span className="logo-sub">Adana · Est. 2005</span>
          </Link>

          <ul className="navbar-links">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="tel:+903222260011"
            className="navbar-reserve"
          >
            Rezervasyon
          </a>

          <div
            className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menüyü aç/kapat"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="tel:+903222260011"
          className="mobile-reserve"
          onClick={() => setMenuOpen(false)}
        >
          Rezervasyon
        </a>
      </div>
    </>
  )
}
