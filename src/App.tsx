import { useEffect, useRef, useState } from 'react'
import {
  CASES, SKILLS, ABOUT_BIO, COPY, EXPERIENCE,
  AWARDS, CERTIFICATIONS, MEMBERSHIPS, ACTIVITIES,
  type CaseStudy,
} from './data'

/* ─── FORMSPREE: paste your endpoint here to enable real email sending.
   Create a free form at https://formspree.io → copy the URL (e.g.
   https://formspree.io/f/abcdwxyz) → paste below. Leave '' for demo mode. ─── */
const FORMSPREE_ENDPOINT = ''

/* Highlight [~placeholder] metrics in amber */
function renderPlaceholders(text: string) {
  const parts = text.split(/(\[[^\]]*~[^\]]*\])/g)
  return parts.map((p, i) =>
    /^\[.*~.*\]$/.test(p)
      ? <span key={i} className="placeholder-flag">{p}</span>
      : <span key={i}>{p}</span>
  )
}

function catClass(cat: string) {
  if (cat.includes('Bioinformatics')) return 'cat-lab'
  if (cat.includes('Training')) return 'cat-field'
  return 'cat-ai'
}

/* ════════════ NAV ════════════ */
function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'work', 'experience', 'about', 'skills', 'writing', 'contact']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const links: [string, string][] = [['hero', 'Home'], ['work', 'Work'], ['experience', 'Experience'], ['about', 'About'], ['skills', 'Skills'], ['writing', 'Writing'], ['contact', 'Contact']]

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a className="nav-logo" onClick={() => go('hero')} style={{ cursor: 'pointer' }}>Gliday <span>Yuka</span></a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</a>
          ))}
          <span className="nav-divider" />
          <a className="btn btn-primary" style={{ padding: '8px 16px' }} onClick={() => go('contact')}>Say hi ↗</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
            {theme === 'dark' ? '☾' : '☀'}
          </button>
          <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu"><span /><span /><span /></button>
        </div>
      </div>
    </nav>
  )
}

/* ════════════ HERO ════════════ */
function Hero() {
  return (
    <section id="hero">
      <svg className="hero-motif" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="var(--motif)" strokeWidth="1.5">
          <path d="M1100,180 q120,-60 200,40 q60,90 -40,170 q-130,90 -250,10 q-90,-90 0,-180 q40,-40 90,-40Z" />
          <path d="M1080,200 q110,-50 180,40 q50,80 -40,150 q-120,80 -220,10 q-80,-80 0,-160 q40,-40 100,-30Z" />
          <path d="M1060,225 q95,-40 160,35 q45,70 -35,130 q-110,70 -190,10 q-70,-70 0,-140 q35,-35 100,-35Z" />
          <path d="M150,620 q120,-70 230,30 q70,100 -50,190 q-150,90 -270,-10 q-80,-90 10,-180 q40,-40 80,-30Z" />
          <path d="M170,640 q105,-55 200,30 q60,90 -45,165 q-130,80 -235,-10 q-70,-80 10,-160 q40,-35 75,-35Z" />
        </g>
        <g stroke="var(--motif)" strokeWidth="1.2" strokeDasharray="8 10">
          <line x1="-50" y1="120" x2="1490" y2="420" />
          <line x1="-50" y1="260" x2="1490" y2="560" />
          <line x1="-50" y1="400" x2="1490" y2="700" />
        </g>
        <g fill="var(--signal-amber)" opacity="0.5">
          <circle cx="320" cy="186" r="3.5" /><circle cx="760" cy="320" r="3.5" />
          <circle cx="1180" cy="452" r="3.5" /><circle cx="540" cy="430" r="3" />
        </g>
      </svg>

      <div className="wrap hero-content">
        <p className="hero-eyebrow">Wildlife Survey Technology &amp; Research</p>
        <h1>Turning wildlife surveys into <span className="ink">scalable, auditable, AI-ready</span> pipelines.</h1>
        <p className="hero-secondary">And building the training systems that make human–elephant coexistence work on the ground.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>See selected work →</a>
          <a className="btn btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Reach out ↗</a>
        </div>
        <div className="hero-meta">
          <span><i className="wp" /> Save the Elephants — Lead, Aerial Survey Modernisation</span>
          <span><i className="wp" /> Voi, Kenya · East Africa</span>
          <span><i className="wp" /> Dual M.Sc. · Biotechnology &amp; Zoology</span>
        </div>
      </div>

      <div className="scroll-hint"><span>Scroll</span><span className="line" /></div>
    </section>
  )
}

/* ════════════ PROOF ════════════ */
function Proof() {
  const items: [string, string][] = [
    ['Lead', 'Aerial Survey Reform · STE'],
    ['2× M.Sc.', 'Biotechnology & Zoology'],
    ['TB-scale', 'Imagery Pipelines'],
    ['10+', 'Open Peer Reviews'],
  ]
  return (
    <div className="proof">
      <div className="wrap">
        <div className="proof-grid">
          {items.map(([n, l]) => (
            <div className="proof-item" key={l}><span className="proof-num">{n}</span><span className="proof-label">{l}</span></div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ════════════ WHAT I DO ════════════ */
function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />What I do</span>
        <h2 className="section-title">Three connected <em>practices</em></h2>
        <p className="section-intro">I turn field realities into clean, reproducible data — and turn that data into decisions that conservation teams, donors, and scientists can trust.</p>
        <div className="do-grid">
          <article className="do-card">
            <svg className="do-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="14" width="28" height="18" rx="3" /><circle cx="20" cy="23" r="6" /><path d="M6 14l-4-5M34 14l4-5M6 32l-4 5M34 32l4 5" /></svg>
            <h3>Survey modernisation</h3>
            <p>Camera-based oblique counts (OCC) and AI-assisted processing replacing manual census — with standardised, QA/QC'd workflows on terabyte-scale aerial imagery.</p>
          </article>
          <article className="do-card">
            <svg className="do-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="14" r="4" /><circle cx="12" cy="34" r="4" /><circle cx="36" cy="24" r="4" /><path d="M16 14h8l8 8M16 34h8l8-8" /></svg>
            <h3>AI / ML monitoring</h3>
            <p>End-to-end platform benchmarking and human-in-the-loop annotation — translating field constraints into auditable adoption decisions, not vendor demos.</p>
          </article>
          <article className="do-card">
            <svg className="do-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="14" r="6" /><path d="M12 38c0-7 5-12 12-12s12 5 12 12" /><path d="M8 30l-4 2M40 30l4 2" /></svg>
            <h3>Training &amp; M&amp;E</h3>
            <p>Trainer-of-Trainers programs for human–elephant coexistence — aligned curriculum, facilitation, and monitoring that deliver consistently across cohorts.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ════════════ WORK ════════════ */
function CaseVisual({ c }: { c: CaseStudy }) {
  return (
    <div className="case-visual" style={{ background: `linear-gradient(135deg, ${c.color1}, #0d0d0d)` }}>
      <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="6 8">
          <line x1="-20" y1="40" x2="420" y2="120" /><line x1="-20" y1="100" x2="420" y2="180" />
        </g>
        <circle cx="340" cy="50" r="3" fill={c.color2} /><circle cx="80" cy="160" r="3" fill={c.color2} />
        <text x="200" y="125" fontSize="58" textAnchor="middle" dominantBaseline="central">{c.emoji}</text>
      </svg>
    </div>
  )
}

function Work({ onOpen }: { onOpen: (c: CaseStudy) => void }) {
  return (
    <section className="section section-alt" id="work">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Selected work</span>
        <h2 className="section-title">Featured <em>case studies</em></h2>
        <p className="section-intro">From aerial survey modernisation at Save the Elephants to RNA-seq analysis and coexistence training — the thread is turning field realities into reproducible data and clear decisions.</p>
        <div className="work-grid">
          {CASES.map(c => (
            <button className="case-card" key={c.slug} onClick={() => onOpen(c)}>
              <CaseVisual c={c} />
              <div className="case-meta-strip">{c.meta}</div>
              <div className="case-body">
                <span className={`tag ${catClass(c.cat)}`} style={{ alignSelf: 'flex-start' }}>{c.cat}</span>
                <h3>{c.title}</h3>
                <p className="case-oneliner">{c.oneLiner}</p>
                <div className="tags">{c.tags.slice(0, 4).map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <div className="case-footer"><span className="link-arrow">Read case study →</span></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════ CASE DETAIL ════════════ */
function CaseDetail({ c, onClose }: { c: CaseStudy; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => { ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, [c])
  return (
    <div className="case-detail" ref={ref}>
      <div className="wrap">
        <button className="cd-close" onClick={onClose}>✕ Close</button>
        <span className="cd-cat">{c.cat}</span>
        <h3 className="cd-title">{c.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '70ch' }}>{c.oneLiner}</p>
        <div className="tags" style={{ marginTop: 'var(--sp-4)' }}>{c.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
        <div className="cd-block"><h4>Context</h4><p>{c.context}</p></div>
        <div className="cd-block"><h4>Role</h4><p>{c.role}</p></div>
        <div className="cd-block"><h4>Approach &amp; Methods</h4><ul>{c.approach.map((a, i) => <li key={i}>{a}</li>)}</ul></div>
        <div className="cd-block"><h4>Deliverables</h4><ul>{c.deliverables.map((d, i) => <li key={i}>{d}</li>)}</ul></div>
        <div className="cd-block"><h4>Results &amp; Impact <span style={{ color: 'var(--text-muted)', textTransform: 'none', letterSpacing: 0 }}>— highlighted figures are placeholders to replace with your real numbers</span></h4><ul className="cd-results">{c.results.map((r, i) => <li key={i}>{renderPlaceholders(r)}</li>)}</ul></div>
        <div className="cd-block"><h4>Challenges &amp; Learnings</h4><p>{c.challenges}</p></div>
        <div className="cd-block"><h4>Next Steps</h4><p>{c.nextSteps}</p></div>
      </div>
    </div>
  )
}

/* ════════════ EXPERIENCE ════════════ */
function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Career</span>
        <h2 className="section-title">Full <em>experience</em></h2>
        <p className="section-intro">{COPY.experienceIntro}</p>
        <div className="timeline">
          {EXPERIENCE.map((r, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-head">
                  <div>
                    <h3>{r.title}</h3>
                    <p className="tl-org">{r.org}</p>
                  </div>
                  <div className="tl-meta">
                    <span className="tl-dates">{r.dates}</span>
                    <span className="tl-loc">{r.location}</span>
                  </div>
                </div>
                <span className={`tag ${r.tag === 'Bioinformatics' || r.tag === 'Genomics' || r.tag === 'ML' ? 'cat-lab' : r.tag === 'Teaching' ? 'cat-field' : 'cat-ai'}`} style={{ alignSelf: 'flex-start' }}>{r.tag}</span>
                <p className="tl-note">{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════ RECOGNITION ════════════ */
function Recognition() {
  const cols: [string, { title: string; detail: string }[]][] = [
    ['🏆 Awards', AWARDS],
    ['📜 Certifications', CERTIFICATIONS],
    ['🤝 Memberships', MEMBERSHIPS],
    ['🎤 Activities', ACTIVITIES],
  ]
  return (
    <section className="section section-alt" id="recognition">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Recognition &amp; involvement</span>
        <h2 className="section-title">Awards, credentials &amp; <em>community</em></h2>
        <p className="section-intro">{COPY.recognitionIntro}</p>
        <div className="rec-grid">
          {cols.map(([heading, items]) => (
            <div className="rec-col" key={heading}>
              <h3>{heading}</h3>
              <ul>
                {items.map((it, i) => (
                  <li key={i}>
                    <strong>{it.title}</strong>
                    <span>{it.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════ ABOUT ════════════ */
function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />About</span>
        <h2 className="section-title">Field operations meet <em>data science</em></h2>
        <div className="about-grid">
          <div>
            {/* HEADSHOT: drop headshot.jpg into /public, then uncomment the <img> and delete the placeholder. */}
            {/* <img className="about-photo" src="/headshot.jpg" alt="Gliday Yuka Luvonga, Wildlife Survey Technology & Research Officer" /> */}
            <div className="about-photo-placeholder">
              <span style={{ fontSize: '1.6rem' }}>🖼️</span>
              <span>Add <strong>/public/headshot.jpg</strong><br />then enable the &lt;img&gt; in App.tsx (About)</span>
            </div>
            <div className="about-bio">
              {ABOUT_BIO.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div>
            <div className="edu-card">
              <h3>Education</h3>
              <div className="edu-list">
                <div><strong>M.Sc. Biotechnology (Hons)</strong> · First Class<br /><span className="sub">Punjabi University Patiala · 2021–2023 · ICCR Scholarship</span></div>
                <div><strong>M.Sc. Zoology (Hons)</strong> · First Class<br /><span className="sub">Guru Nanak Dev University · 2019–2021</span></div>
                <div><strong>B.Sc. Biology (Hons)</strong> · Second Class Upper<br /><span className="sub">Pwani University · 2014–2018 · Dean's Roll of Honour</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════ SKILLS ════════════ */
function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Skills &amp; tools</span>
        <h2 className="section-title">A <em>lab-to-field</em> toolkit</h2>
        <p className="section-intro">Practical capability deployed in real conservation and research programs.</p>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div className="skill-group" key={s.group}>
              <h3>{s.group}</h3>
              <div className="tags">{s.items.map(it => <span className="tag" key={it}>{it}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════ WRITING ════════════ */
function Writing() {
  const pubs: [string, string, string, string][] = [
    ['Journal', 'Carotenoids and Human Health', 'International Journal of Novel Research and Development · Dec 2023 · DOI: 10.1729/Journal.37063', 'http://doi.one/10.1729/Journal.37063'],
    ['Conference', 'Bioactive Elements in Prosopis juliflora', 'Conference presentation · Mar 2023 · impacts on livestock & livelihoods', 'http://dx.doi.org/10.13140/RG.2.2.35970.96962'],
    ['Peer Review', '10+ Open Preprint Reviews', 'PreReview · neuroscience, immunology, cancer biology & microbiology', 'https://prereview.org/profiles/0000-0002-4784-4345'],
    ['Profile', 'ORCID & full record', '0000-0002-4784-4345 · complete and current publication record', 'https://orcid.org/0000-0002-4784-4345'],
  ]
  return (
    <section className="section" id="writing">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Research &amp; writing</span>
        <h2 className="section-title">Published &amp; <em>reviewed</em> work</h2>
        <p className="section-intro">{COPY.writingIntro}</p>
        <div className="pub-list">
          {pubs.map(([type, title, desc, url]) => (
            <a className="pub-item" href={url} target="_blank" rel="noopener noreferrer" key={title}>
              <span className="pub-type">{type}</span>
              <div className="pub-content"><h3>{title}</h3><p>{desc}</p></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════ CONTACT ════════════ */
function Contact() {
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true); setNote('')
    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        })
        if (res.ok) { setNote('✅ Thanks! Your message was sent.'); form.reset() }
        else setNote('⚠️ Something went wrong — please email glidayyuka@gmail.com directly.')
      } catch { setNote('⚠️ Network error — please email glidayyuka@gmail.com directly.') }
    } else {
      setTimeout(() => { setNote('✅ Demo mode. Add your Formspree endpoint in App.tsx to send for real.'); form.reset() }, 1000)
    }
    setSending(false)
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Contact</span>
        <h2 className="section-title">Let's <em>work together</em></h2>
        <p className="section-intro">{COPY.contactIntro}</p>
        <div className="contact-grid">
          <div>
            <div className="contact-detail"><span className="ci">✉</span><div><span className="cl">Email</span><br /><a href="mailto:glidayyuka@gmail.com">glidayyuka@gmail.com</a></div></div>
            <div className="contact-detail"><span className="ci">✆</span><div><span className="cl">Phone</span><br /><span className="cv">+254 718 660 277</span></div></div>
            <div className="contact-detail"><span className="ci">⚲</span><div><span className="cl">Location</span><br /><span className="cv">Voi, Kenya · East Africa</span></div></div>
            <div className="contact-socials">
              <a className="social-link" href="https://www.linkedin.com/in/glidayyuka5a7a14169/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="social-link" href="https://orcid.org/0000-0002-4784-4345" target="_blank" rel="noopener noreferrer">ORCID</a>
              <a className="social-link" href="https://prereview.org/profiles/0000-0002-4784-4345" target="_blank" rel="noopener noreferrer">PreReview</a>
            </div>
            <p className="ref-note">References available on request.</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="fg"><label htmlFor="name">Name</label><input type="text" id="name" name="name" required /></div>
            <div className="fg"><label htmlFor="email">Email</label><input type="email" id="email" name="email" required /></div>
            <div className="fg"><label htmlFor="subject">Subject</label><input type="text" id="subject" name="subject" /></div>
            <div className="fg"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} required /></div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
              {sending ? 'Sending…' : 'Send message →'}
            </button>
            <p className="form-note" style={{ color: 'var(--accent)' }}>{note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ════════════ FOOTER ════════════ */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <span className="footer-name">Gliday Yuka Luvonga</span>
          <div className="footer-status"><span className="pulse" /> Available for collaborations &amp; consulting</div>
        </div>
        <p className="footer-copy">© 2026 Gliday Yuka Luvonga · Wildlife Survey Technology &amp; Research · Built with field-science clarity.</p>
      </div>
    </footer>
  )
}

/* ════════════ APP ════════════ */
export default function App() {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'dark')
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar theme={theme} toggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
      <main id="main">
        <Hero />
        <Proof />
        <Services />
        <Work onOpen={setActiveCase} />
        {activeCase && <CaseDetail c={activeCase} onClose={() => setActiveCase(null)} />}
        <Experience />
        <About />
        <Skills />
        <Recognition />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
