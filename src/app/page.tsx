import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          influence<span>markt</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#para-marcas">Para marcas</a>
          <a href="#para-influencers">Para influencers</a>
        </div>
        <div className={styles.navActions}>
          <Link href="/dashboard-marca" className={styles.btnOutline}>Entrar como marca</Link>
          <Link href="/dashboard-influencer" className={styles.btnPrimary}>Entrar como creador</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>Beta — acceso anticipado</div>
        <h1 className={styles.heroTitle}>
          El marketplace donde las marcas
          <br />
          <em>encuentran influencers reales</em>
        </h1>
        <p className={styles.heroSub}>
          Analíticas verificadas directamente desde las APIs de Instagram, TikTok y YouTube.
          Contratos digitales, pagos en escrow y gestión completa de campañas en un solo lugar.
        </p>
        <div className={styles.heroActions}>
          <Link href="/dashboard-marca" className={styles.btnBig}>
            Publicar campaña
          </Link>
          <Link href="/dashboard-influencer" className={styles.btnGhost}>
            Soy creador de contenido
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statN}>12,400+</span>
            <span className={styles.statL}>Influencers verificados</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statN}>3,200+</span>
            <span className={styles.statL}>Marcas activas</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statN}>98%</span>
            <span className={styles.statL}>Campañas completadas</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statN}>4.8★</span>
            <span className={styles.statL}>Calificación promedio</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features} id="como-funciona">
        <div className={styles.sectionHeader}>
          <h2>Todo lo que necesitas, en un solo lugar</h2>
          <p>Herramientas para gestionar campañas de principio a fin</p>
        </div>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className={styles.sectionHeader}>
          <h2>De la idea a los resultados en 4 pasos</h2>
        </div>
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className={styles.stepNum}>{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL CTA */}
      <section className={styles.dualCta}>
        <div className={styles.ctaCard} id="para-marcas">
          <div className={styles.ctaBadge} style={{ background: 'var(--purple-50)', color: 'var(--purple-800)' }}>Para marcas</div>
          <h3>Encuentra al influencer perfecto para tu campaña</h3>
          <p>Filtra por nicho, engagement real, audiencia y plataforma. Contrata con un clic.</p>
          <ul className={styles.ctaList}>
            <li>Búsqueda con 10+ filtros avanzados</li>
            <li>Métricas verificadas vía API</li>
            <li>Pagos en escrow seguros</li>
            <li>Dashboard de campañas en tiempo real</li>
          </ul>
          <Link href="/dashboard-marca" className={styles.btnPrimary}>
            Publicar mi primera campaña →
          </Link>
        </div>
        <div className={styles.ctaCard} id="para-influencers">
          <div className={styles.ctaBadge} style={{ background: 'var(--teal-50)', color: 'var(--teal-800)' }}>Para creadores</div>
          <h3>Colabora con marcas que valoran tu trabajo</h3>
          <p>Aplica a campañas, negocia tu precio y cobra automáticamente al entregar.</p>
          <ul className={styles.ctaList}>
            <li>Perfil con métricas conectadas</li>
            <li>Propuestas con precio libre</li>
            <li>Contrato digital incluido</li>
            <li>Cobro automático al aprobar</li>
          </ul>
          <Link href="/dashboard-influencer" className={styles.btnTeal}>
            Crear mi perfil →
          </Link>
        </div>
      </section>

      {/* INFLUENCER SHOWCASE */}
      <section className={styles.showcase}>
        <div className={styles.sectionHeader}>
          <h2>Creadores verificados en todos los nichos</h2>
          <p>Más de 12,000 influencers con métricas reales</p>
        </div>
        <div className={styles.influencerGrid}>
          {INFLUENCERS.map((inf) => (
            <div key={inf.name} className={styles.infCard}>
              <div className={styles.infAvatar} style={{ background: inf.bg, color: inf.color }}>
                {inf.initials}
              </div>
              <div className={styles.infName}>{inf.name}</div>
              <div className={styles.infCat}>{inf.cat}</div>
              <div className={styles.infPills}>
                <span className={styles.pill}>{inf.followers}</span>
                <span className={styles.pillAccent}>{inf.eng} eng.</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>influence<span>markt</span></div>
        <div className={styles.footerLinks}>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Soporte</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className={styles.footerCopy}>© 2026 InfluenceMarkt</div>
      </footer>
    </div>
  )
}

const FEATURES = [
  { icon: '⚡', title: 'Búsqueda inteligente', desc: 'Filtra por nicho, audiencia, engagement real, plataforma y ubicación geográfica.' },
  { icon: '📊', title: 'Analíticas verificadas', desc: 'Métricas directo de las APIs de Instagram, TikTok y YouTube. Sin datos declarados.' },
  { icon: '🤝', title: 'Contratos digitales', desc: 'Templates legales con entregables, fechas y condiciones de uso. Firma en un clic.' },
  { icon: '💸', title: 'Pagos en escrow', desc: 'Fondea la campaña al inicio. El influencer cobra automáticamente al aprobar el contenido.' },
  { icon: '💬', title: 'Mensajería integrada', desc: 'Negocia, comparte briefs y gestiona revisiones sin salir de la plataforma.' },
  { icon: '📈', title: 'Dashboard de resultados', desc: 'ROI, alcance y engagement consolidado al cerrar cada campaña.' },
]

const STEPS = [
  { title: 'Publica tu campaña', desc: 'Define objetivos, presupuesto y tipo de contenido en minutos.' },
  { title: 'Recibe propuestas', desc: 'Los influencers aplican o tú los invitas directamente.' },
  { title: 'Colabora', desc: 'Aprueba contenido, da feedback y gestiona entregas desde el dashboard.' },
  { title: 'Mide resultados', desc: 'Dashboard con métricas de impacto y ROI de la campaña.' },
]

const INFLUENCERS = [
  { initials: 'AL', name: 'Andrea L.', cat: 'Moda & Lifestyle · CDMX', followers: '245K', eng: '4.2%', bg: '#EEEDFE', color: '#3C3489' },
  { initials: 'MR', name: 'Marco R.', cat: 'Tech & Gaming · MTY', followers: '89K', eng: '6.7%', bg: '#E1F5EE', color: '#085041' },
  { initials: 'SC', name: 'Sofía C.', cat: 'Fitness · GDL', followers: '512K', eng: '3.8%', bg: '#FAECE7', color: '#712B13' },
  { initials: 'JV', name: 'Juan V.', cat: 'Gastronomía · CDMX', followers: '178K', eng: '5.1%', bg: '#FAEEDA', color: '#633806' },
  { initials: 'LP', name: 'Lucía P.', cat: 'Viajes · GDL', followers: '320K', eng: '4.9%', bg: '#FBEAF0', color: '#72243E' },
  { initials: 'DR', name: 'Diego R.', cat: 'Finanzas · CDMX', followers: '67K', eng: '8.3%', bg: '#E6F1FB', color: '#0C447C' },
  { initials: 'AM', name: 'Ana M.', cat: 'Belleza · MTY', followers: '430K', eng: '3.5%', bg: '#EAF3DE', color: '#27500A' },
  { initials: 'CS', name: 'Carlos S.', cat: 'Deportes · CDMX', followers: '195K', eng: '5.6%', bg: '#EEEDFE', color: '#3C3489' },
]
