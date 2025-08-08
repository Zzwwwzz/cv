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
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Editorial subtle masthead halo */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_35%_at_50%_0%,rgba(24,24,27,0.06),transparent_60%)] dark:[background:radial-gradient(60%_35%_at_50%_0%,rgba(250,250,250,0.05),transparent_60%)]" />

      <main className="relative mx-auto max-w-4xl px-6 py-14">
        <Header />

        {/* 2-column editorial grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr,1.2fr]">
          <aside className="space-y-10">
            <SectionTitle n="01">Yhteydet</SectionTitle>
            <div className="text-sm leading-relaxed">
              <LinkRow href={`mailto:${PROFILE.email}`}>{PROFILE.email}</LinkRow>
              <LinkRow href={PROFILE.linkedin}>LinkedIn</LinkRow>
              <LinkRow href={PROFILE.github}>GitHub</LinkRow>
              <LinkRow href={PROFILE.website}>Website</LinkRow>
            </div>

            <SectionTitle n="02">Taidot</SectionTitle>
            <ul className="-m-1 flex flex-wrap">
              {PROFILE.skills.map((s) => (
                <li key={s} className="m-1 rounded-full border border-zinc-300 px-3 py-1 text-xs dark:border-zinc-700">
                  {s}
                </li>
              ))}
            </ul>

            <SectionTitle n="03">Koulutus</SectionTitle>
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

          <section className="space-y-10">
            <SectionTitle n="04">Kokemus</SectionTitle>
            <ExperienceTimeline />

            <SectionTitle n="05">Projektit</SectionTitle>
            <ProjectsList />
          </section>
        </div>

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} {PROFILE.name} · Päivitetty {new Date().toLocaleDateString()}
        </footer>
      </main>

      {/* Editorial tweaks */}
      <style>{`
        .serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
        .sans { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
      `}</style>
    </div>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="serif border-b border-zinc-200 pb-8 dark:border-zinc-800"
    >
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        {PROFILE.name}
      </h1>
      <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-300">{PROFILE.role}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{PROFILE.location}</p>

      <p className="sans mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
        {PROFILE.summary}
      </p>
    </motion.header>
  );
}

function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="sans mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
      <span>{n}</span>
      <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
      <span className="text-[13px] normal-case tracking-normal text-zinc-800 dark:text-zinc-100">{children}</span>
    </h2>
  );
}

function LinkRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      <span className="underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-900 dark:decoration-zinc-700 dark:group-hover:decoration-zinc-100">
        {children}
      </span>
    </a>
  );
}

function ExperienceTimeline() {
  return (
    <div className="relative pl-6">
      <span className="absolute left-2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
      {PROFILE.experience.map((exp, i) => (
        <article key={i} className="relative pb-8">
          <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
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

function ProjectsList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {PROFILE.projects.map((p) => (
        <a
          key={p.name}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="group overflow-hidden rounded-xl border border-zinc-200 transition dark:border-zinc-800"
        >
          <div className="aspect-[16/9] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900" />
          <div className="p-4">
            <h3 className="font-medium tracking-tight group-hover:underline">{p.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-600 dark:text-zinc-400">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-zinc-300 px-2 py-0.5 dark:border-zinc-700">
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
