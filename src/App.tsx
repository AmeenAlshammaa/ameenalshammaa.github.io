import { useState } from 'react'
import './App.css'

const CONTACT = {
  linkedin: 'https://www.linkedin.com/in/ameen-al-shammaa-443b17200/',
  email: 'mailto:ameenalshammaa732@gmail.com',
} as const

type TabId = 'about' | 'blue' | 'red'

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGmail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#4285F4"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#34A853"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 7V6a2 2 0 012-2h2a2 2 0 012 2v1h3a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9a2 2 0 012-2h3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

export default function App() {
  const [tab, setTab] = useState<TabId>('about')

  const tabs: { id: TabId; label: string }[] = [
    { id: 'about', label: 'About me' },
    { id: 'blue', label: 'Blue Team' },
    { id: 'red', label: 'Red Team' },
  ]

  return (
    <div className="app">
      <div className="app__bg" aria-hidden />
      <div className="app__grid" aria-hidden />

      <div className="app__inner">
        <header className="site-header">
          <div className="brand">
            <span className="brand__name">Ameen Al-Shammaa</span>
            <span className="brand__tag">Cybersecurity · Research · Engineering</span>
          </div>

          <div className="header-actions">
            <nav className="tabs" role="tablist" aria-label="Portfolio sections">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={tab === t.id}
                  aria-controls={`panel-${t.id}`}
                  className="tab"
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </nav>

            <div className="social-row">
              <a
                className="social-btn"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <IconLinkedIn />
              </a>
              <a className="social-btn" href={CONTACT.email} aria-label="Send email via Gmail">
                <IconGmail />
              </a>
            </div>
          </div>
        </header>

        <main>
          <section
            id="panel-about"
            role="tabpanel"
            aria-labelledby="tab-about"
            hidden={tab !== 'about'}
          >
            {tab === 'about' && (
              <article className="hero-panel">
                <div className="hero-panel__badge">
                  <span className="hero-panel__badge-dot" />
                  Portfolio · GitHub Pages
                </div>
                <h1>Building resilient systems through offensive insight and defensive rigor.</h1>
                <p className="lead">
                  I am an eighteen-year-old cybersecurity researcher and engineer exploring how
                  organizations detect, withstand, and learn from adversarial pressure. This site is a
                  living workspace for Blue Team and Red Team work—methodology-first, impact-focused,
                  and grounded in real operational constraints.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat__label">Focus</div>
                    <div className="stat__value">Defense &amp; offense</div>
                  </div>
                  <div className="stat">
                    <div className="stat__label">Lens</div>
                    <div className="stat__value">Research-led engineering</div>
                  </div>
                  <div className="stat">
                    <div className="stat__label">Audience</div>
                    <div className="stat__value">Teams who ship securely</div>
                  </div>
                </div>
              </article>
            )}
          </section>

          <section
            id="panel-blue"
            role="tabpanel"
            aria-labelledby="tab-blue"
            hidden={tab !== 'blue'}
            className="section-tab"
          >
            {tab === 'blue' && (
              <article className="focus-card">
                <div className="focus-card__accent" />
                <div className="focus-card__body">
                  <p className="focus-card__label">Blue Team · Defensive security</p>
                  <h2>Detection engineering, visibility, and calm incident response</h2>
                  <p className="description">
                    This thread covers how we instrument environments so misuse becomes observable:
                    telemetry design, detection logic, alert tuning, containment playbooks, and the
                    feedback loops that turn incidents into durable controls. Case studies and builds
                    will land here first—structured so executives and practitioners can skim to what
                    matters.
                  </p>
                  <div className="value-block">
                    <div className="value-block__title">
                      <IconBriefcase />
                      Business value
                    </div>
                    <ul>
                      <li>
                        Fewer blind spots mean faster answers when something breaks—or when someone
                        probes your perimeter on purpose.
                      </li>
                      <li>
                        Well-tested detection and response reduces dwell time, limits blast radius,
                        and protects revenue and reputation during crises.
                      </li>
                      <li>
                        Repeatable workflows between security and IT shorten remediation cycles and
                        lower the cost of compliance evidence.
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            )}
          </section>

          <section
            id="panel-red"
            role="tabpanel"
            aria-labelledby="tab-red"
            hidden={tab !== 'red'}
            className="section-tab"
          >
            {tab === 'red' && (
              <article className="focus-card">
                <div className="focus-card__accent focus-card__accent--red" />
                <div className="focus-card__body">
                  <p className="focus-card__label focus-card__label--red">
                    Red Team · Offensive security
                  </p>
                  <h2>Controlled adversarial testing that respects production realities</h2>
                  <p className="description">
                    Here you will find adversarial simulations and research framed around realistic
                    attacker trade-offs: phishing-resistant paths, lateral movement assumptions,
                    privilege escalation chains, and reporting that separates theater from genuine
                    organizational risk. Each write-up will pair technical depth with clarity on
                    what leaders should fund next.
                  </p>
                  <div className="value-block">
                    <div className="value-block__title">
                      <IconBriefcase />
                      Business value
                    </div>
                    <ul>
                      <li>
                        Evidence-backed findings prioritize fixes that materially reduce likelihood or
                        impact—rather than chasing noisy scanner output.
                      </li>
                      <li>
                        Safe, scoped exercises validate detective controls and train responders under
                        pressure without gambling uptime.
                      </li>
                      <li>
                        Executive-ready narratives bridge engineering detail with dollars-at-risk,
                        supporting smarter roadmaps for identity, segmentation, and patching.
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            )}
          </section>
        </main>

        <footer className="site-footer">
          © {new Date().getFullYear()} Ameen Al-Shammaa · Cybersecurity portfolio
        </footer>
      </div>
    </div>
  )
}
