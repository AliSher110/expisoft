import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/ExpinSoft-Logo-header.png'
import QuoteModal from './QuoteModal'

const megaLinks = [
  {
    cat: 'Mobile App Development',
    href: '/mobile-app-development',
    links: [
      'iOS App Development',
      'Android App Development',
      { label: 'Cross-Platform Apps', href: '/cross-platform-apps' },
      { label: 'React Native Apps', href: '/react-native-apps' },
    ]
  },
  {
    cat: 'Custom Software Development',
    href: '/services',
    links: [
      { label: 'Enterprise Software', href: '/enterprise-software' },
      { label: 'SaaS Development', href: '/saas-development' },
      { label: 'Legacy Modernization', href: '/legacy-modernization' },
      { label: 'API Integration', href: '/api-integration' },
    ]
  },
  {
    cat: 'Web Development',
    href: '/services',
    links: ['React / Next.js', 'Node.js Back-End', 'E-Commerce', 'CMS Solutions']
  },
  {
    cat: 'Artificial Intelligence',
    href: '/services',
    links: ['Machine Learning', 'Computer Vision', 'NLP Solutions', 'AI Consulting']
  },
  {
    cat: 'Blockchain Development',
    href: '/services',
    links: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplace', 'Web3 Integration']
  },
  {
    cat: 'Cloud Services',
    href: '/services',
    links: ['AWS Solutions', 'Azure DevOps', 'Cloud Migration', 'DevOps CI/CD']
  },
  {
    cat: 'Game Development',
    href: '/services',
    links: ['Unity 3D Games', 'Unreal Engine', 'AR/VR Games', 'Casual Mobile Games']
  },
  {
    cat: 'Digital Marketing',
    href: '/services',
    links: ['SEO / Content', 'PPC Advertising', 'Social Media', 'Brand Strategy']
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const megaTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMegaOpen(false) }, [pathname])

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true) }
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 160) }

  const isActive = (path) => pathname === path ? 'active' : ''

  return (
    <>
      <header className={scrolled || menuOpen ? 'scrolled' : ''}>
      <div className="wrap">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src={logo} alt="ExpinSoft" />
          </Link>

          <div className={`menu${menuOpen ? ' open' : ''}`}>
            <Link to="/" className={isActive('/')}>Home</Link>

            <div
              className={`has-mega${megaOpen ? ' open' : ''}`}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <Link to="/services" className={isActive('/services')}>
                Services <span className="chevron">▾</span>
              </Link>
            </div>

            <Link to="/industries" className={isActive('/industries')}>Industries</Link>
            <Link to="/technologies" className={isActive('/technologies')}>Technologies</Link>
            <Link to="/insights" className={isActive('/insights')}>Insights</Link>
            <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
            <button className="btn btn-sm hide-mobile" style={{marginLeft:8}} onClick={() => setQuoteOpen(true)}>Get a Quote</button>
            <button className="btn mobile-cta" onClick={() => setQuoteOpen(true)}>Get a Quote</button>
          </div>

          <button
            className={`burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      <div
        className={`mega-menu${megaOpen ? ' open' : ''}`}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <div className="wrap">
          <div className="mega-inner">
            <div className="mega-promo">
              <h3>Build Something Great</h3>
              <p>From idea to launch — ExpinSoft engineers intelligent digital products that scale.</p>
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=480&q=80"
                alt="Team at work"
              />
            </div>
            <div className="mega-cols">
              {megaLinks.map((col) => (
                <div key={col.cat} className="mega-col-group">
                  <Link to={col.href} className="mega-cat">{col.cat}</Link>
                  <ul className="mega-links">
                    {col.links.map((l) => {
                      const label = typeof l === 'string' ? l : l.label
                      const href = typeof l === 'string' ? col.href : l.href
                      return <li key={label}><Link to={href}>{label}</Link></li>
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </header>
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </>
  )
}
