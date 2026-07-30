import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'

const featured = {
  tag: 'Industry Report',
  h: 'The State of Custom Software Development: 2026 Industry Report',
  desc: 'We surveyed 200+ CTOs and engineering leaders to uncover the trends shaping how enterprises build, buy, and scale software this year — from AI-assisted development to the return of platform engineering.',
  img: '1515879218367-8466d910aaa4',
}

const blogs = [
  { h: 'How AI is Transforming Enterprise Software in 2026', p: 'Explore the top AI-driven patterns reshaping how companies build and deploy custom software.', img: '1674027444485-cec3da58eef4', cat: 'AI' },
  { h: 'React Native vs Flutter: Which Should You Pick?', p: 'A head-to-head comparison to help you choose the right cross-platform framework for your app.', img: '1480694313141-fce5e697ee25', cat: 'Mobile' },
  { h: 'The Definitive Guide to Hiring a Software Development Partner', p: '10 critical questions every CTO should ask before signing a software outsourcing contract.', img: '1607799279861-4dd421887fb3', cat: 'Web' },
  { h: 'Cloud Cost Optimization: 7 Strategies That Actually Work', p: 'Practical ways engineering teams are trimming AWS and Azure bills without sacrificing reliability.', img: '1695668548342-c0c1ad479aee', cat: 'Cloud' },
  { h: "Building HIPAA-Compliant Apps: A Developer's Checklist", p: 'The technical and process controls every healthcare app needs before it reaches production.', img: '1576091160399-112ba8d25d1d', cat: 'Web' },
  { h: 'What Generative AI Means for Product Teams in 2026', p: 'How product managers are embedding LLMs into roadmaps without losing sight of user value.', img: '1697577418970-95d99b5a55cf', cat: 'AI' },
  { h: 'Microservices vs Monoliths: Choosing the Right Architecture', p: 'A practical framework for deciding when to split — and when to stay monolithic for longer.', img: '1542831371-29b0f74f9713', cat: 'Web' },
  { h: 'DevOps in 2026: CI/CD Pipelines That Scale', p: 'Lessons from shipping 800+ releases a year without slowing engineering velocity.', img: '1639066648921-82d4500abf1a', cat: 'Cloud' },
  { h: '5 Signs Your Startup Needs a Dedicated Mobile Team', p: 'How to tell when it is time to move beyond a single contractor and build a real mobile practice.', img: '1519389950473-47ba0277781c', cat: 'Mobile' },
]

const categories = ['All', 'Mobile', 'AI', 'Web', 'Cloud']

export default function Insights() {
  const [tab, setTab] = useState('All')
  const filtered = tab === 'All' ? blogs : blogs.filter(b => b.cat === tab)

  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">INSIGHTS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Insights</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Blog & Insights</p>
              <h1>Ideas Worth Reading</h1>
              <p className="lead">
                Practical, engineering-led perspectives on mobile, AI, cloud, and software strategy —
                written by the team that ships the projects, not a marketing desk.
              </p>
              <div className="pillars">
                {['120+ Articles Published', '50k+ Monthly Readers', 'Written by Our Engineers', 'No Fluff, No Filler'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Have a Project\nin Mind?'} />
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="case">
            <div>
              <p style={{ color: 'var(--orange)', fontFamily: 'Poppins', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>{featured.tag}</p>
              <h3>{featured.h}</h3>
              <p>{featured.desc}</p>
              <Link to="/" className="btn">Read Full Report</Link>
            </div>
            <div className="case-img">
              <img src={`https://images.unsplash.com/photo-${featured.img}?w=700&q=80`} alt={featured.h} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Browse by Topic</p>
            <h2>Latest Articles</h2>
          </div>
          <div className="ins-tabs">
            {categories.map(t => (
              <button key={t} className={`ins-tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
          <p className="grid-label">Showing {filtered.length} of {blogs.length} articles</p>
          <div className="blog-grid">
            {filtered.map(b => (
              <div key={b.h} className="blog">
                <div className="img">
                  <img src={`https://images.unsplash.com/photo-${b.img}?w=600&q=80`} alt={b.h} loading="lazy" />
                </div>
                <div className="bd">
                  <h3>{b.h}</h3>
                  <p>{b.p}</p>
                  <span className="more">Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Stay in the Loop</p>
              <h2>Get New Articles in Your Inbox</h2>
              <p>One email a month — engineering deep-dives, industry trends, and no sales pitches. Unsubscribe any time.</p>
              <Link to="/" className="btn" style={{ background: 'var(--orange)' }}>Subscribe to the Newsletter</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
