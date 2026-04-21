import Link from 'next/link'
import styles from './page.module.css'

export default function DashboardInfluencer() {
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
            <div className={styles.userAvatar}>AL</div>
            <div>
              <div className={styles.userName}>Andrea L.</div>
              <div className={styles.userRole}>✓ Perfil verificado</div>
            </div>
          </div>
          <Link href="/" className={styles.backLink}>← Volver al inicio</Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.main}>
        <div className={styles.topbar}>
          <div>
            <h1 className={styles.pageTitle}>Mi panel</h1>
            <p className={styles.pageSubtitle}>Hola de nuevo, Andrea 👋</p>
          </div>
          <div className={styles.topbarPills}>
            <span className={styles.verifiedPill}>✓ Perfil verificado</span>
            <span className={styles.platformPill}>IG · TT · YT conectados</span>
          </div>
        </div>

        {/* MÉTRICAS */}
        <div className={styles.metricsRow}>
          {METRICS.map((m) => (
            <div key={m.label} className={styles.metricCard} style={{ borderTop: `3px solid ${m.accent}` }}>
              <div className={styles.metricLabel}>{m.label}</div>
              <div className={styles.metricValue}>{m.value}</div>
              <div className={styles.metricSub}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* CAMPAÑAS EN CURSO */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Mis colaboraciones activas</h2>
            <span className={styles.badgeTeal}>2 en curso</span>
          </div>
          <div className={styles.colabList}>
            {ACTIVE_COLABS.map((c) => (
              <div key={c.brand} className={styles.colabCard}>
                <div className={styles.colabBrandAvatar} style={{ background: c.bg, color: c.color }}>
                  {c.initials}
                </div>
                <div className={styles.colabInfo}>
                  <div className={styles.colabBrand}>{c.brand}</div>
                  <div className={styles.colabCampaign}>{c.campaign}</div>
                  <div className={styles.colabDeadline}>Entrega: {c.deadline}</div>
                </div>
                <div className={styles.colabActions}>
                  <div className={styles.colabAmount}>{c.amount}</div>
                  <div className={`${styles.colabStatus} ${styles['st_' + c.status]}`}>{c.statusLabel}</div>
                  <button className={styles.btnEntrega}>Subir entregable</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAMPAÑAS DISPONIBLES */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Campañas para ti</h2>
            <span className={styles.badge}>Basado en tu perfil</span>
          </div>
          <div className={styles.availableGrid}>
            {AVAILABLE_CAMPAIGNS.map((c) => (
              <div key={c.brand} className={styles.availCard}>
                <div className={styles.availHeader}>
                  <div className={styles.availAvatar} style={{ background: c.bg, color: c.color }}>{c.initials}</div>
                  <div>
                    <div className={styles.availBrand}>{c.brand}</div>
                    <div className={styles.availIndustry}>{c.industry}</div>
                  </div>
                </div>
                <div className={styles.availTitle}>{c.title}</div>
                <div className={styles.availPlatforms}>
                  {c.platforms.map((p) => <span key={p} className={styles.platformTag}>{p}</span>)}
                </div>
                <div className={styles.availFooter}>
                  <span className={styles.availBudget}>{c.budget}</span>
                  <button className={styles.btnApply}>Aplicar →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PERFIL / MÉTRICAS DE RED */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Mis métricas verificadas</h2>
            <span className={styles.badge}>Actualizado hace 2h</span>
          </div>
          <div className={styles.platformMetrics}>
            {PLATFORM_METRICS.map((p) => (
              <div key={p.name} className={styles.platformCard}>
                <div className={styles.platformHeader}>
                  <span className={styles.platformName}>{p.name}</span>
                  <span className={styles.platformHandle}>{p.handle}</span>
                </div>
                <div className={styles.platformStats}>
                  <div className={styles.pStat}>
                    <span className={styles.pStatVal}>{p.followers}</span>
                    <span className={styles.pStatLabel}>seguidores</span>
                  </div>
                  <div className={styles.pStat}>
                    <span className={styles.pStatVal}>{p.eng}</span>
                    <span className={styles.pStatLabel}>engagement</span>
                  </div>
                  <div className={styles.pStat}>
                    <span className={styles.pStatVal}>{p.reach}</span>
                    <span className={styles.pStatLabel}>alcance prom.</span>
                  </div>
                </div>
                <div className={styles.platformAudience}>
                  <span className={styles.audLabel}>Audiencia principal:</span>
                  <span className={styles.audValue}>{p.audience}</span>
                </div>
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
  { icon: '◎', label: 'Mis campañas', active: false },
  { icon: '◈', label: 'Explorar', active: false },
  { icon: '✉', label: 'Mensajes', active: false },
  { icon: '◑', label: 'Pagos', active: false },
  { icon: '◷', label: 'Mi perfil', active: false },
  { icon: '◇', label: 'Configuración', active: false },
]

const METRICS = [
  { label: 'Ingresos este mes', value: '$24,500', sub: '+12% vs mes anterior', accent: 'var(--teal-400)' },
  { label: 'Colaboraciones activas', value: '2', sub: '1 pendiente de aprobación', accent: 'var(--purple-600)' },
  { label: 'Tasa de aceptación', value: '78%', sub: 'De tus propuestas', accent: 'var(--coral-400)' },
  { label: 'Calificación promedio', value: '4.9★', sub: 'Basado en 23 reseñas', accent: '#EF9F27' },
]

const ACTIVE_COLABS = [
  {
    initials: 'NK', brand: 'Nike México', campaign: 'Colección Primavera 2026',
    deadline: '30 abr 2026', amount: '$12,000', status: 'pendiente', statusLabel: 'Esperando entrega',
    bg: '#EEEDFE', color: '#3C3489',
  },
  {
    initials: 'SH', brand: 'Shein MX', campaign: 'Look del día · Verano',
    deadline: '18 abr 2026', amount: '$6,500', status: 'revision', statusLabel: 'En revisión',
    bg: '#FBEAF0', color: '#72243E',
  },
]

const AVAILABLE_CAMPAIGNS = [
  { initials: 'AD', brand: 'Adidas MX', industry: 'Deportes · Moda', title: 'Campaña Running 2026 · 3 posts + stories', platforms: ['IG', 'TT'], budget: 'hasta $15,000', bg: '#E1F5EE', color: '#085041' },
  { initials: 'ZR', brand: 'Zara MX', industry: 'Moda', title: 'Look de oficina · Colección otoño', platforms: ['IG'], budget: 'hasta $9,500', bg: '#FAEEDA', color: '#633806' },
  { initials: 'SB', brand: 'Starbucks MX', industry: 'Gastronomía', title: 'Lanzamiento frappuccinos verano', platforms: ['IG', 'TT'], budget: 'hasta $7,000', bg: '#E1F5EE', color: '#085041' },
  { initials: 'MC', brand: 'MAC Cosmetics', industry: 'Belleza', title: 'Nueva colección labiales · 2 reels', platforms: ['IG', 'YT'], budget: 'hasta $18,000', bg: '#FBEAF0', color: '#72243E' },
]

const PLATFORM_METRICS = [
  { name: 'Instagram', handle: '@andrealooks', followers: '245K', eng: '4.2%', reach: '38K', audience: 'Mujeres 18-34, CDMX' },
  { name: 'TikTok', handle: '@andrea.looks', followers: '182K', eng: '6.8%', reach: '52K', audience: 'Mujeres 16-28, México' },
  { name: 'YouTube', handle: 'Andrea Looks', followers: '31K', eng: '3.1%', reach: '12K', audience: 'Mujeres 22-38, LATAM' },
]
