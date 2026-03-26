import type { CSSProperties, ReactNode, SVGProps } from 'react'
import { useState } from 'react'
import './App.css'

type SectionKey =
  | 'dashboard'
  | 'master-context'
  | 'offers'
  | 'agent-prompts'
  | 'proof-assets'
  | 'systems'
  | 'pipeline'

type NavItem = {
  id: SectionKey
  label: string
  tag: string
  description: string
  accent: string
  icon: ReactNode
}

type KpiCard = {
  label: string
  value: string
  subtext: string
  accent: string
}

type IconProps = SVGProps<SVGSVGElement>

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    tag: 'HOME',
    description: 'Console overview, KPI shells, pipeline health, and chart zones.',
    accent: '#f59e0b',
    icon: <GridIcon className="h-4 w-4" />,
  },
  {
    id: 'master-context',
    label: 'Master Context',
    tag: 'CORE',
    description:
      'Positioning rules, proposal constraints, operating logic, and agent identity.',
    accent: '#f59e0b',
    icon: <FileTextIcon className="h-4 w-4" />,
  },
  {
    id: 'offers',
    label: 'Offers',
    tag: 'COMMERCIAL',
    description:
      'Productized service tiers, pricing logic, and staged upsell pathways A  B  C.',
    accent: '#10b981',
    icon: <BriefcaseIcon className="h-4 w-4" />,
  },
  {
    id: 'agent-prompts',
    label: 'Agent Prompts',
    tag: 'OPERATIONS',
    description:
      'Scoped prompts for proposals, intake, delivery, and post-project follow-up.',
    accent: '#6366f1',
    icon: <TerminalIcon className="h-4 w-4" />,
  },
  {
    id: 'proof-assets',
    label: 'Proof Assets',
    tag: 'PORTFOLIO',
    description:
      'Completed projects with documented problem, solution, outcome, and stack.',
    accent: '#f97316',
    icon: <ShieldIcon className="h-4 w-4" />,
  },
  {
    id: 'systems',
    label: 'Systems',
    tag: 'PROCESS',
    description: 'SOPs, repeatable workflows, and delivery process templates.',
    accent: '#ec4899',
    icon: <SettingsIcon className="h-4 w-4" />,
  },
  {
    id: 'pipeline',
    label: 'Pipeline',
    tag: 'REVENUE',
    description:
      'Leads, proposal status, active work, and post-project upsell tracking.',
    accent: '#14b8a6',
    icon: <BarChartIcon className="h-4 w-4" />,
  },
]

const kpiCards: KpiCard[] = [
  {
    label: 'Pipeline Value',
    value: '--',
    subtext: 'Active + proposed project value',
    accent: '#10b981',
  },
  {
    label: 'Active Proposals',
    value: '--',
    subtext: 'Sent, pending response',
    accent: '#6366f1',
  },
  {
    label: 'Platform Activity',
    value: '--',
    subtext: 'Upwork / Fiverr / PPH',
    accent: '#f59e0b',
  },
  {
    label: 'Upsell Pipeline',
    value: '--',
    subtext: 'Option C conversion candidates',
    accent: '#14b8a6',
  },
]

const mainBackground = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
} satisfies CSSProperties

const sidebarTransition = {
  transition: 'width 200ms ease',
} satisfies CSSProperties

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionKey>('dashboard')

  const activeItem =
    navItems.find((item) => item.id === activeSection) ?? navItems[0]

  return (
    <main className="h-screen overflow-hidden bg-[#080809] font-mono text-zinc-100">
      <div className="flex h-full">
        <aside
          className="sticky top-0 flex h-screen shrink-0 flex-col border-r border-[#1c1c1e] bg-[#0d0d0f]"
          style={{
            width: collapsed ? 56 : 220,
            ...sidebarTransition,
          }}
        >
          <div className="border-b border-zinc-900 px-3 py-4">
            <div
              className={`flex min-h-[56px] items-center ${
                collapsed ? 'justify-center' : 'justify-start'
              }`}
            >
              <span className="text-lg font-bold uppercase tracking-[0.28em] text-zinc-100">
                {collapsed ? 'F' : 'FCOS'}
              </span>
            </div>
            {!collapsed ? (
              <div className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                <span>v1.0</span>
              </div>
            ) : null}
          </div>

          <nav className="flex-1 px-2 py-3">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = item.id === activeSection

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-current={isActive ? 'page' : undefined}
                      title={collapsed ? item.label : undefined}
                      onClick={() => setActiveSection(item.id)}
                      style={{
                        color: isActive ? item.accent : '#a1a1aa',
                        borderLeftColor: isActive ? item.accent : 'transparent',
                        backgroundColor: isActive
                          ? `${item.accent}14`
                          : 'transparent',
                      }}
                      className={`flex w-full items-center rounded-r-md border-l-2 px-3 py-2.5 text-sm transition-colors duration-200 hover:bg-zinc-800/80 ${
                        collapsed ? 'justify-center' : 'gap-3'
                      }`}
                    >
                      <span className="shrink-0">{item.icon}</span>
                      {!collapsed ? (
                        <span className="truncate text-left">{item.label}</span>
                      ) : null}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="border-t border-zinc-900 p-2">
            <button
              type="button"
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              onClick={() => setCollapsed((current) => !current)}
              className={`flex items-center rounded-md text-zinc-400 transition-colors duration-200 hover:bg-zinc-800 hover:text-zinc-100 ${
                collapsed
                  ? 'h-10 w-10 justify-center'
                  : 'w-full gap-3 px-3 py-2.5'
              }`}
            >
              {collapsed ? (
                <ChevronRightIcon className="h-4 w-4" />
              ) : (
                <>
                  <ChevronLeftIcon className="h-4 w-4 shrink-0" />
                  <span className="text-sm">Collapse</span>
                </>
              )}
            </button>
          </div>
        </aside>

        <section className="min-w-0 flex-1 overflow-y-auto bg-[#080809]" style={mainBackground}>
          <div className="min-h-full p-8">
            <div className="mx-auto flex min-h-full max-w-7xl flex-col">
              {activeSection === 'dashboard' ? (
                <DashboardView />
              ) : (
                <SectionPlaceholder item={activeItem} />
              )}

              <footer className="mt-8 flex flex-col gap-3 border-t border-zinc-900 pt-5 text-[11px] uppercase tracking-[0.24em] sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-700">FREELANCE-CAREER-OS</span>
                <a
                  href="https://supreme-arbor-assessment.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 transition-colors duration-200 hover:text-amber-300"
                >
                  Groves Field Assessment
                </a>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function DashboardView() {
  return (
    <div className="flex-1">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Operator Console
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Docs-to-App Builder for Trade &amp; Service SMBs.
        </p>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-amber-500/80 via-zinc-700 to-transparent" />
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((card) => (
          <article
            key={card.label}
            className="border border-zinc-900 bg-zinc-950/80 p-5 backdrop-blur"
            style={{ borderLeftColor: card.accent, borderLeftWidth: 3 }}
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              {card.label}
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
              {card.value}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: card.accent,
                  boxShadow: `0 0 10px ${card.accent}88`,
                }}
              />
              <span>Static trend placeholder</span>
            </div>
            <p className="mt-3 text-xs text-zinc-400">{card.subtext}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-5">
        <PlaceholderPanel
          title="Revenue Trend"
          tag="RECHARTS READY"
          placeholder="Revenue chart / Phase 2"
          heightClassName="h-[200px]"
          className="xl:col-span-3"
        />
        <PlaceholderPanel
          title="Proposal Funnel"
          tag="RECHARTS READY"
          placeholder="Funnel chart / Phase 2"
          heightClassName="h-[200px]"
          className="xl:col-span-2"
        />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <PlaceholderPanel
          title="Platform Breakdown"
          subtitle="Upwork / Fiverr / PPH split"
          tag="RECHARTS READY"
          placeholder="Platform breakdown / Phase 2"
          heightClassName="h-[160px]"
        />
        <PlaceholderPanel
          title="Upsell Tracker"
          subtitle="ABC conversion rate"
          tag="RECHARTS READY"
          placeholder="Upsell tracker / Phase 2"
          heightClassName="h-[160px]"
        />
        <PlaceholderPanel
          title="Project Velocity"
          subtitle="Avg delivery time per project"
          tag="RECHARTS READY"
          placeholder="Velocity chart / Phase 2"
          heightClassName="h-[160px]"
        />
      </section>
    </div>
  )
}

function SectionPlaceholder({ item }: { item: NavItem }) {
  return (
    <div className="flex flex-1 items-start">
      <section className="w-full border border-zinc-900 bg-zinc-950/80 p-6 backdrop-blur">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
              {item.label}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              {item.description}
            </p>
          </div>
          <span
            className="border px-2.5 py-1 text-[10px] uppercase tracking-[0.24em]"
            style={{
              borderColor: `${item.accent}44`,
              color: item.accent,
              backgroundColor: `${item.accent}12`,
            }}
          >
            {item.tag}
          </span>
        </div>

        <div
          className="mt-6 inline-flex items-center rounded-md border px-3 py-2 text-[11px] uppercase tracking-[0.24em]"
          style={{
            borderColor: `${item.accent}44`,
            color: item.accent,
            backgroundColor: `${item.accent}12`,
          }}
        >
          Coming in Phase 2
        </div>
      </section>
    </div>
  )
}

function PlaceholderPanel({
  title,
  subtitle,
  tag,
  placeholder,
  heightClassName,
  className = '',
}: {
  title: string
  subtitle?: string
  tag: string
  placeholder: string
  heightClassName: string
  className?: string
}) {
  return (
    <article className={`border border-zinc-900 bg-zinc-950/60 p-5 ${className}`}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-100">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-2 text-xs text-zinc-500">{subtitle}</p>
          ) : null}
        </div>
        <span className="border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-zinc-500">
          {tag}
        </span>
      </div>
      <div
        className={`flex items-center justify-center border border-dashed border-zinc-800 bg-zinc-900/50 text-center text-sm text-zinc-500 ${heightClassName}`}
      >
        {placeholder}
      </div>
    </article>
  )
}

function GridIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  )
}

function FileTextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M14 3v5h5M9 12h6M9 16h6" />
    </svg>
  )
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M8 7V5h8v2" />
      <path d="M5 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
      <path d="M3 12h18" />
    </svg>
  )
}

function TerminalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </svg>
  )
}

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9.5 12l1.7 1.7 3.3-3.7" />
    </svg>
  )
}

function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3l2.1 2.1 3-.3.3 3L19.5 10l-2.1 2 2.1 2-2.1 2.2-.3 3-3-.3L12 21l-2.1-2.1-3 .3-.3-3L4.5 14l2.1-2-2.1-2 2.1-2.2.3-3 3 .3L12 3z" />
      <path d="M12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" />
    </svg>
  )
}

function BarChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" />
    </svg>
  )
}

function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default App
