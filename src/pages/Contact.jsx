import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  'Mobile App Development', 'Custom Software Development', 'Web Development',
  'Artificial Intelligence', 'Blockchain Development', 'Cloud Services',
  'Game Development', 'Digital Marketing', 'Staff Augmentation', 'IT Consulting',
]

const details = [
  { ic: '🏷️', label: 'Brand', value: 'Expinsoft' },
  { ic: '📧', label: 'Email', value: 'info@expinsoft.com', href: 'mailto:info@expinsoft.com' },
  { ic: '🕐', label: 'Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM' },
  { ic: '📞', label: 'Phone — USA', value: '+1 (832) 555-0190', href: 'tel:+18325550190' },
  { ic: '📞', label: 'Phone — Pakistan', value: '+92 305 8002387', href: 'tel:+923058002387' },
  { ic: '📍', label: 'Office — Karachi, PK', value: 'Shahrah-e-Faisal, Karachi, Pakistan' },
  { ic: '📍', label: 'Office — Coquitlam, Canada', value: '1462 Moore Pl, Coquitlam, BC V3E 3B9, Canada' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <section className="contact-hero">
      <div className="contact-blob b1" />
      <div className="contact-blob b2" />
      <div className="wrap">
        <p className="crumb contact-crumb">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <span className="cur">Contact</span>
        </p>

        <div className="contact-grid-glass">
          <div className="glass-panel contact-details">
            <p className="eyebrow orange" style={{ marginBottom: 10 }}>Get In Touch</p>
            <h1>Contact ExpinSoft</h1>
            <p className="contact-lead">
              Have a project in mind or just exploring options? Reach out directly or send us a message —
              our team typically replies within one business day.
            </p>
            <div className="cdetails">
              {details.map(d => (
                <div className="cdetail" key={d.label}>
                  <span className="cdetail-ic">{d.ic}</span>
                  <div>
                    <b>{d.label}</b>
                    {d.href ? <a href={d.href}>{d.value}</a> : <span>{d.value}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel contact-form-panel">
            <h3>Send Us a Message</h3>
            {sent ? (
              <p className="success-msg">✓ Thanks! We'll be in touch within one business day.</p>
            ) : (
              <form onSubmit={onSubmit} className="glass-form">
                <div className="fld">
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your Name*" required />
                </div>
                <div className="fld">
                  <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email Address*" required />
                </div>
                <div className="fld">
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" />
                </div>
                <div className="fld">
                  <select name="service" value={form.service} onChange={onChange} required>
                    <option value="" disabled>Service Requested*</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="fld">
                  <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your project…" rows={4} />
                </div>
                <div className="submit">
                  <button type="submit" className="btn-glass-orange">Send Message →</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
