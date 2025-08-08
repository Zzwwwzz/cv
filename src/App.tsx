import { motion } from "framer-motion";

// --- EDIT HERE ---
const PROFILE = {
  name: "Etunimi Sukunimi",
  role: "Ohjelmistokehittäjä (Full‑Stack)",
  location: "Helsinki, FI",
  email: "etunimi.sukunimi@email.com",
  phone: "+358 40 123 4567",
  website: "https://example.com",
  linkedin: "https://linkedin.com/in/username",
  github: "https://github.com/username",
  summary:
    "Ratkaisukeskeinen kehittäjä, joka arvostaa selkeyttä, saavutettavuutta ja käytännön vaikuttavuutta.",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "CI/CD",
    "Accessibility",
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Yritys Oy",
      period: "2023 – nyt",
      highlight:
        "Vedin design system -uudistuksen ja paransin suorituskykyä (LCP −48%, bundle −30%).",
    },
    {
      title: "Full‑Stack Developer",
      company: "Toinen Firma Oy",
      period: "2021 – 2023",
      highlight:
        "Rakensin tilaus- ja autentikaatiopalvelun Next.js + Prisma -pinolla ja otin käyttöön CI/CD-putken.",
    },
  ],
  projects: [
    {
      name: "Projektinimi",
      description:
        "Lyhyt 1–2 lauseen kuvaus roolista, ongelmasta ja tuloksesta. Linkitä repo tai demo.",
      link: "https://example.com/project",
      tags: ["React", "Vite", "API"],
    },
    {
      name: "Toinen projekti",
      description:
        "Lyhyt kuvaus. Mitä ratkaisit? Mitkä mitattavat vaikutukset saatiin?",
      link: "https://github.com/username/repo",
      tags: ["Node", "GraphQL"],
    },
  ],
  education: [
    {
      school: "Aalto-yliopisto",
      degree: "DI, Tietotekniikka",
      period: "2017 – 2022",
    },
  ],
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Gradient Accent: background blobs + subtle noise */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400/30 via-fuchsia-400/30 to-rose-400/30 blur-3xl dark:from-indigo-500/15 dark:via-fuchsia-500/15 dark:to-rose-500/15" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-400/20 to-indigo-400/20 blur-3xl dark:from-fuchsia-500/10 dark:to-indigo-500/10" />
        <div className="absolute right-[-10rem] top-1/3 h-80 w-80 rounded-full bg-gradient-to-tr from-rose-400/20 to-fuchsia-400/20 blur-3xl dark:from-rose-500/10 dark:to-fuchsia-500/10" />
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-14">
        <Header />

        {/* Two-column layout */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr,1.2fr]">
          <aside className="space-y-10">
            <SectionTitle n="01" accent>Yhteydet</SectionTitle>
            <div className="text-sm leading-relaxed">
              <LinkRow href={`mailto:${PROFILE.email}`}>{PROFILE.email}</LinkRow>
              <LinkRow href={PROFILE.linkedin}>LinkedIn</LinkRow>
              <LinkRow href={PROFILE.github}>GitHub</LinkRow>
              <LinkRow href={PROFILE.website}>Website</LinkRow>
            </div>

            <SectionTitle n="02" accent>Taidot</SectionTitle>
            <ul className="-m-1 flex flex-wrap">
              {PROFILE.skills.map((s) => (
                <li
                  key={s}
                  className="m-1 rounded-full border border-zinc-300/70 px-3 py-1 text-xs backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-zinc-700/70 dark:supports-[backdrop-filter]:bg-zinc-900/40"
                >
                  {s}
                </li>
              ))}
            </ul>

            <SectionTitle n="03" accent>Koulutus</SectionTitle>
            <ul className="space-y-3 text-sm">
              {PROFILE.education.map((e) => (
                <li key={e.school} className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="font-medium">{e.school}</p>
                    <p className="text-zinc-600 dark:text-zinc-400">{e.degree}</p>
                  </div>
                  <span className="whitespace-nowrap text-zinc-500 dark:text-zinc-400">{e.period}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="space-y-12">
            <SectionTitle n="04" accent>Kokemus</SectionTitle>
            <ExperienceTimeline />

            <SectionTitle n="05" accent>Projektit</SectionTitle>
            <ProjectsGrid />
          </section>
        </div>

        <footer className="mt-16 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} {PROFILE.name} · Päivitetty {new Date().toLocaleDateString()}
        </footer>
      </main>

      <style>{`
        .sans { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial; }
        .grad-text { background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
      `}</style>
    </div>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-zinc-200/70 pb-8 dark:border-zinc-800"
    >
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
        <span className="grad-text">{PROFILE.name}</span>
      </h1>
      <p className="mt-1 text-lg text-zinc-700 dark:text-zinc-300">{PROFILE.role}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{PROFILE.location}</p>
      <p className="sans mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
        {PROFILE.summary}
      </p>
    </motion.header>
  );
}

function SectionTitle(
  { n, children, accent = false }:
  { n: string; children: React.ReactNode; accent?: boolean }
) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium tracking-widest text-zinc-500 dark:text-zinc-400">{n}</span>
      <span className={accent
        ? "h-px w-10 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-rose-400 opacity-60"
        : "h-px w-10 bg-zinc-300 dark:bg-zinc-700"} />
      <h2 className="text-[13px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{children}</h2>
    </div>
  );
}

function LinkRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      <span className="underline decoration-indigo-300/60 underline-offset-4 transition group-hover:decoration-fuchsia-400/80 dark:decoration-indigo-500/40 dark:group-hover:decoration-fuchsia-400/60">
        {children}
      </span>
    </a>
  );
}

function ExperienceTimeline() {
  return (
    <div className="relative pl-6">
      <span className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-fuchsia-300 to-rose-300 dark:from-indigo-600 dark:via-fuchsia-600 dark:to-rose-600" />
      {PROFILE.experience.map((exp, i) => (
        <article key={i} className="relative pb-10">
          <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gradient-to-tr from-indigo-400 to-fuchsia-400 shadow-sm" />
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-semibold">
              {exp.title}{" "}
              <span className="font-normal text-zinc-500 dark:text-zinc-400">· {exp.company}</span>
            </h3>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{exp.period}</span>
          </div>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{exp.highlight}</p>
        </article>
      ))}
    </div>
  );
}

function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {PROFILE.projects.map((p) => (
        <a
          key={p.name}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="group overflow-hidden rounded-2xl border border-zinc-200/70 transition hover:-translate-y-0.5 dark:border-zinc-800"
        >
          <div className="relative aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-rose-200 dark:from-indigo-900/50 dark:via-fuchsia-900/50 dark:to-rose-900/50" />
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 [background:radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.7),transparent_60%)] dark:[background:radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
          </div>
          <div className="p-4">
            <h3 className="font-medium tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                {p.name}
              </span>
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-600 dark:text-zinc-400">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-300/70 px-2 py-0.5 dark:border-zinc-700/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
