import { useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import './App.css'

type SectionCard = {
  title: string
  tag: string
  accent: string
  status: string
  description: string
  icon: ReactNode
}

const sections: SectionCard[] = [
  {
    title: 'Master Context',
    tag: 'CORE',
    accent: '#f59e0b',
    status: 'Active',
    description:
      'Positioning rules, proposal constraints, operating logic, and agent identity.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
        <path d="M9.5 10.5h5M9.5 13.5h5" />
      </svg>
    ),
  },
  {
    title: 'Offers',
    tag: 'COMMERCIAL',
    accent: '#10b981',
    status: 'Active',
    description:
      'Productized service tiers, pricing logic, and staged upsell pathways A  B  C.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 8.5h14" />
        <path d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: 'Agent Prompts',
    tag: 'OPERATIONS',
    accent: '#6366f1',
    status: 'Active',
    description:
      'Scoped prompts for proposals, intake, delivery, and post-project follow-up.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 9.5h8" />
        <path d="M8 13h5" />
        <path d="M6 5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4l-4 3v-3H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: 'Proof Assets',
    tag: 'PORTFOLIO',
    accent: '#f97316',
    status: '1 Asset',
    description:
      'Completed projects with documented problem, solution, outcome, and stack.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M7 7h10v10H7z" />
        <path d="M10 10h4v4h-4z" />
        <path d="M4.5 12H3m18 0h-1.5M12 4.5V3m0 18v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Systems',
    tag: 'PROCESS',
    accent: '#ec4899',
    status: 'Building',
    description:
      'SOPs, repeatable workflows, and delivery process templates.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3l2.4 2.4 3.4-.4.4 3.4L20.5 12l-2.3 3.6-.4 3.4-3.4-.4L12 21l-2.4-2.4-3.4.4-.4-3.4L3.5 12l2.3-3.6.4-3.4 3.4.4L12 3z" />
        <path d="M9.5 12h5" />
      </svg>
    ),
  },
  {
    title: 'Pipeline',
    tag: 'REVENUE',
    accent: '#14b8a6',
    status: 'Building',
    description:
      'Leads, proposal status, active work, and post-project upsell tracking.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M5 18V9" />
        <path d="M12 18V5" />
        <path d="M19 18v-6" />
        <path d="M4 18h16" />
      </svg>
    ),
  },
]

const gridBackground = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
  backgroundSize: '36px 36px',
} satisfies CSSProperties

function App() {
  const [hovered, setHovered] = useState<string | null>(null)

  const glowStyle = useMemo<CSSProperties>(
    () => ({
      background:
        'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0.16) 28%, rgba(245, 158, 11, 0.04) 55%, transparent 72%)',
    }),
    [],
  )

  return (
    <main className="min-h-screen bg-[#080809] font-mono text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 opacity-60"
        style={gridBackground}
      />
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-48 w-[36rem] -translate-x-1/2 blur-3xl"
        style={glowStyle}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 border border-zinc-900 bg-zinc-950/70 px-5 py-5 backdrop-blur sm:px-6">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-zinc-400">
            <span className="flex items-center gap-2 text-zinc-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.85)]" />
              Freelance Career OS
            </span>
            <span className="border border-zinc-800 px-2 py-1 text-zinc-500">
              v0.1 / Phase 1
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Operator Console
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Docs-to-App Builder for Trade &amp; Service SMBs.
          </p>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-amber-500/70 via-zinc-700 to-transparent" />
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const isHovered = hovered === section.title

            return (
              <article
                key={section.title}
                onMouseEnter={() => setHovered(section.title)}
                onMouseLeave={() =>
                  setHovered((current) =>
                    current === section.title ? null : current,
                  )
                }
                style={{
                  borderColor: isHovered
                    ? section.accent
                    : 'rgba(39, 39, 42, 0.95)',
                  boxShadow: isHovered
                    ? `0 0 0 1px ${section.accent}, 0 0 28px ${section.accent}33`
                    : 'inset 0 1px 0 rgba(255,255,255,0.03)',
                }}
                className="group flex min-h-[220px] flex-col justify-between border bg-zinc-950/80 p-5 transition-all duration-300 ease-out backdrop-blur"
              >
                <div>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div
                      style={{
                        color: isHovered ? section.accent : '#d4d4d8',
                        borderColor: isHovered
                          ? `${section.accent}55`
                          : 'rgba(63,63,70,0.9)',
                        backgroundColor: isHovered
                          ? `${section.accent}14`
                          : 'rgba(24,24,27,0.92)',
                      }}
                      className="flex h-11 w-11 items-center justify-center border transition-all duration-300"
                    >
                      {section.icon}
                    </div>
                    <span className="border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                      {section.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-100">
                      {section.title}
                    </h2>
                    <p
                      style={{ color: isHovered ? '#a1a1aa' : '#71717a' }}
                      className="text-xs leading-6 transition-colors duration-300"
                    >
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-4 text-[11px] uppercase tracking-[0.24em]">
                  <span className="flex items-center gap-2 text-zinc-400">
                    <span
                      style={{
                        backgroundColor: section.accent,
                        boxShadow: `0 0 10px ${section.accent}88`,
                      }}
                      className="h-2 w-2 rounded-full"
                    />
                    {section.status}
                  </span>
                  <span
                    style={{ color: isHovered ? section.accent : '#d4d4d8' }}
                    className="transition-colors duration-300"
                  >
                    OPEN -&gt;
                  </span>
                </div>
              </article>
            )
          })}
        </section>

        <footer className="mt-8 flex flex-col gap-3 border-t border-zinc-900 pt-5 text-[11px] uppercase tracking-[0.24em] sm:flex-row sm:items-center sm:justify-between">
          <span className="text-zinc-700">FREELANCE-CAREER-OS</span>
          <a
            href="https://supreme-arbor-assessment.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 transition-colors duration-300 hover:text-amber-300"
          >
            Proof asset: Groves Field Assessment
          </a>
        </footer>
      </div>
    </main>
  )
}

export default App
