import Link from 'next/link'
import styles from './page.module.css'

export default function DashboardMarca() {
  return (
    <div className={styles.shell}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          influence<span>markt</span>
        </div>
        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className={`${styles.navItem} ${item.active ? styles.navActive : ''}`}>
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <div className={styles.userRow}>
            <div className={styles.userAvatar}>NC</div>
            <div>
              <div className={styles.userName}>Nike CDMX</div>
              <div className={styles.userRole}>Marca verificada</div>
            </div>
          </div>
          <Link href="/" className={styles.backLink}>← Volver al inicio</Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.main}>
        {/* HEADER */}
        <div className={styles.topbar}>
          <div>
            <h1 className={styles.pageTitle}>Panel de campaña</h1>
            <p className={styles.pageSubtitle}>Bienvenida de vuelta, Nike CDMX</p>
          </div>
          <button className={styles.btnNew}>+ Nueva campaña</button>
        </div>

        {/* MÉTRICAS RÁPIDAS */}
        <div className={styles.metricsRow}>
          {METRICS.map((m) => (
            <div key={m.label} className={styles.metricCard}>
              <div className={styles.metricLabel}>{m.label}</div>
              <div className={styles.metricValue}>{m.value}</div>
              <div className={styles.metricDelta} style={{ color: m.up ? 'var(--teal-600)' : 'var(--coral-600)' }}>
                {m.delta}
              </div>
            </div>
          ))}
        </div>

        {/* CAMPAÑAS ACTIVAS */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Campañas activas</h2>
            <span className={styles.badge}>3 en curso</span>
          </div>
          <div className={styles.campaignList}>
            {CAMPAIGNS.map((c) => (
              <div key={c.name} className={styles.campaignRow}>
                <div className={styles.campaignInfo}>
                  <div className={styles.campaignName}>{c.name}</div>
                  <div className={styles.campaignMeta}>{c.influencers} influencers · Cierra {c.closes}</div>
                </div>
                <div className={styles.campaignProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: c.progress + '%', background: c.color }} />
                  </div>
                  <span className={styles.progressLabel}>{c.progress}%</span>
                </div>
                <div className={styles.campaignBudget}>${c.budget.toLocaleString()}</div>
                <div className={`${styles.statusPill} ${styles['status_' + c.status]}`}>{c.statusLabel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BÚSQUEDA DE INFLUENCERS */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Explorar influencers</h2>
            <div className={styles.searchRow}>
              <input className={styles.searchInput} placeholder="Buscar por nombre, nicho o ciudad..." />
              <select className={styles.filterSelect}>
                <option>Todos los nichos</option>
                <option>Moda</option>
                <option>Tech</option>
                <option>Fitness</option>
                <option>Gastronomía</option>
              </select>
              <select className={styles.filterSelect}>
                <option>Todas las plataformas</option>
                <option>Instagram</option>
                <option>TikTok</option>
                <option>YouTube</option>
              </select>
            </div>
          </div>
          <div className={styles.infGrid}>
            {INFLUENCERS.map((inf) => (
              <div key={inf.name} className={styles.infCard}>
                <div className={styles.infTop}>
                  <div className={styles.infAvatar} style={{ background: inf.bg, color: inf.color }}>
                    {inf.initials}
                  </div>
                  <div>
                    <div className={styles.infName}>{inf.name}</div>
                    <div className={styles.infCat}>{inf.cat}</div>
                  </div>
                </div>
                <div className={styles.infStats}>
                  <div className={styles.infStat}>
                    <span className={styles.infStatVal}>{inf.followers}</span>
                    <span className={styles.infStatLabel}>seguidores</span>
                  </div>
                  <div className={styles.infStat}>
                    <span className={styles.infStatVal}>{inf.eng}</span>
                    <span className={styles.infStatLabel}>engagement</span>
                  </div>
                  <div className={styles.infStat}>
                    <span className={styles.infStatVal}>{inf.rate}</span>
                    <span className={styles.infStatLabel}>tarifa base</span>
                  </div>
                </div>
                <div className={styles.platforms}>
                  {inf.platforms.map((p) => (
                    <span key={p} className={styles.platformTag}>{p}</span>
                  ))}
                </div>
                <button className={styles.btnInvite}>Invitar a campaña</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const NAV_ITEMS = [
  { icon: '▦', label: 'Dashboard', active: true },
  { icon: '◎', label: 'Campañas', active: false },
  { icon: '◈', label: 'Influencers', active: false },
  { icon: '✉', label: 'Mensajes', active: false },
  { icon: '◑', label: 'Pagos', active: false },
  { icon: '▤', label: 'Reportes', active: false },
  { icon: '◇', label: 'Configuración', active: false },
]

const METRICS = [
  { label: 'Campañas activas', value: '3', delta: '+1 este mes', up: true },
  { label: 'Presupuesto total', value: '$84,500', delta: 'de $120,000', up: true },
  { label: 'Influencers activos', value: '12', delta: '+4 esta semana', up: true },
  { label: 'Alcance estimado', value: '2.4M', delta: '+18% vs anterior', up: true },
]

const CAMPAIGNS = [
  { name: 'Colección Primavera 2026', influencers: 5, closes: '30 abr', progress: 68, budget: 32000, color: 'var(--purple-600)', status: 'active', statusLabel: 'En curso' },
  { name: 'Lanzamiento Air Max MX', influencers: 3, closes: '15 may', progress: 25, budget: 28500, color: 'var(--teal-400)', status: 'review', statusLabel: 'Revisión' },
  { name: 'Back to School 2026', influencers: 4, closes: '20 ago', progress: 10, budget: 24000, color: 'var(--gray-400)', status: 'draft', statusLabel: 'Borrador' },
]

const INFLUENCERS = [
  { initials: 'AL', name: 'Andrea L.', cat: 'Moda & Lifestyle · CDMX', followers: '245K', eng: '4.2%', rate: '$8,000', platforms: ['IG', 'TT'], bg: '#EEEDFE', color: '#3C3489' },
  { initials: 'SC', name: 'Sofía C.', cat: 'Fitness · GDL', followers: '512K', eng: '3.8%', rate: '$15,000', platforms: ['IG', 'YT'], bg: '#FAECE7', color: '#712B13' },
  { initials: 'JV', name: 'Juan V.', cat: 'Gastronomía · CDMX', followers: '178K', eng: '5.1%', rate: '$6,500', platforms: ['IG', 'TT'], bg: '#FAEEDA', color: '#633806' },
  { initials: 'LP', name: 'Lucía P.', cat: 'Viajes · GDL', followers: '320K', eng: '4.9%', rate: '$11,000', platforms: ['IG', 'YT', 'TT'], bg: '#FBEAF0', color: '#72243E' },
]
