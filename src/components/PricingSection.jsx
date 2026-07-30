import { useNavigate } from 'react-router-dom'

const pricingPlans = [
  {
    name: 'Starter',
    price: 300,
    desc: 'Perfect for landing pages and lightweight professional sites.',
    features: ['Custom-designed website (up to 5 pages)', 'Mobile-responsive & SEO-optimized', 'Contact form & Google Maps', 'Basic hosting setup guidance', '2 rounds of revisions', '30 days post-launch support'],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: 1200,
    desc: 'Full-featured web or ecommerce apps for growing businesses.',
    features: ['Full-featured ecommerce or web app', 'Custom design (up to 15 pages)', 'Payment gateway integration', 'User accounts & CMS included', '4 rounds of revisions', '60 days post-launch support', 'Speed & performance optimization'],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 3500,
    desc: 'Full-scale custom platform for multi-module enterprise apps.',
    features: ['Full-scale custom software / platform', 'Multi-module enterprise architecture', 'API integrations & 3rd-party services', 'Dedicated project manager', 'Unlimited revisions during build', '6 months priority support'],
    cta: 'Talk to Sales',
  },
]

const addOns = ['Mobile App Companion', 'Advanced Analytics', 'AI Chatbot Integration', 'Logo & Branding', 'Ongoing Maintenance Plan']

export default function PricingSection({
  eyebrow = 'Transparent Pricing',
  title = 'Investment Plans for Every Ambition',
  subtitle = 'No surprises. No hidden fees. Clear, value-driven packages for websites, software, and full-scale digital products. Every project starts with a free discovery call.',
  gray = true,
}) {
  const navigate = useNavigate()

  const selectPlan = (plan) => {
    navigate(`/checkout?plan=${encodeURIComponent(plan.name)}&price=${plan.price}`)
  }

  return (
    <section className="sec" style={gray ? { background: 'var(--gray-bg)' } : undefined}>
      <div className="wrap">
        <div className="head">
          <p className="eyebrow orange">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <div key={plan.name} className={`price-card${plan.popular ? ' popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="price-desc">{plan.desc}</p>
              <div className="price-tag"><span className="cur">$</span>{plan.price.toLocaleString()}<span className="per">starting from</span></div>
              <ul className="price-feats">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button
                className={`btn${plan.popular ? '' : ' btn-ghost'}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => selectPlan(plan)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <div className="addons-bar">
          <p><b>Need Something Extra?</b> Add-on Services</p>
          <div className="addon-chips">
            {addOns.map(a => <span key={a}>{a}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
