import { Link } from 'react-router-dom'
import logo from '../assets/ExpinSoft-Logo-header.png'

const services = [
  'Mobile App Development','Custom Software Dev','Web Development',
  'Artificial Intelligence','Blockchain Development','Cloud Services',
  'Game Development','Digital Marketing','Staff Augmentation','IT Consulting'
]
const technologies = [
  'React / React Native','Node.js','Python','Java','.NET / C#',
  'Azure','AWS','Flutter','Unity 3D','PostgreSQL'
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ready">
          <p className="small">READY TO START?</p>
          <h2>Let's Build Something<br /><span style={{color:'var(--orange)'}}>Extraordinary</span> Together</h2>
          <Link to="/" className="btn">Start Your Project</Link>
        </div>

        <div className="fcols">
          <div className="fcol">
            <h4>Services</h4>
            <div className="flink-grid">
              {services.map(s => <Link key={s} to="/services">{s}</Link>)}
            </div>
          </div>
          <div className="fcol">
            <h4>Technologies</h4>
            <div className="flink-grid">
              {technologies.map(t => <Link key={t} to="/technologies">{t}</Link>)}
            </div>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <Link to="/">About ExpinSoft</Link>
            <Link to="/">Careers</Link>
            <Link to="/insights">Blog & Insights</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/">Press & Media</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="locs">
          <h4>Our Offices</h4>
          <div className="loc-codes">
            <span>Houston, TX</span>
            <span>New York, NY</span>
            <span>Austin, TX</span>
            <span>Los Angeles, CA</span>
            <span>Karachi, PK</span>
          </div>
          <div className="loc-meta">
            <span>📧 info@expinsoft.com</span>
            <span>📞 +1 (832) 555-0190</span>
          </div>
        </div>

        <div className="fbottom">
          <div className="fbottom-brand">
            <img src={logo} alt="ExpinSoft" className="fbottom-logo" />
            <p>© ExpinSoft 2026. All rights reserved.</p>
          </div>
          <div className="links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
