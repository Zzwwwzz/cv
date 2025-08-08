import { motion } from "framer-motion";

// --- EDIT HERE ---
const PROFILE = {
  name: "Etunimi Sukunimi",
  role: "OHJELMISTOKEHITTÄJÄ / FULL‑STACK",
  location: "Helsinki, FI",
  email: "etunimi.sukunimi@email.com",
  phone: "+358 40 123 4567",
  website: "https://example.com",
  linkedin: "https://linkedin.com/in/username",
  github: "https://github.com/username",
  summary:
    "Rakennan suorituskykyisiä ja saavutettavia web-sovelluksia. Kiinnostuksen kohteet: DX, typografia käyttöliittymissä ja pieni mutta mitattava vaikutus.",
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
        "Design system -vastuu. LCP −48 %, bundle −30 %. Testikattavuus 85 %.",
    },
    {
      title: "Full‑Stack Developer",
      company: "Toinen Firma Oy",
      period: "2021 – 2023",
      highlight:
        "Tilaukset + auth Next.js/Prisma. CI/CD GitHub Actionsiin.",
    },
  ],
  projects: [
    {
      name: "Projektinimi",
      description:
        "1–2 lauseen kuvaus roolista, ongelmasta ja vaikutuksesta. Linkki repo/demoon.",
      link: "https://example.com/project",
      tags: ["REACT", "VITE", "API"],
    },
    {
      name: "Toinen projekti",
      description:
        "Lyhyt kuvaus. Mitä ratkaisit? Mitä mitattiin?",
      link: "https://github.com/username/repo",
      tags: ["NODE", "GRAPHQL"],
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
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Header />

        {/* BRUTAL GRID */}
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr,1.15fr]">
          <aside className="space-y-8">
            <SectionTitle n="01">YHTEYDET</SectionTitle>
            <div className="text-sm leading-relaxed">
              <LinkRow href={`mailto:${PROFILE.email}`}>{PROFILE.email}</LinkRow>
              <LinkRow href={PROFILE.linkedin}>LINKEDIN</LinkRow>
              <LinkRow href={PROFILE.github}>GITHUB</LinkRow>
              <LinkRow href={PROFILE.website}>WEBSITE</LinkRow>
            </div>

            <SectionTitle n="02">TAIDOT</SectionTitle>
            <ul className="-m-1 flex flex-wrap">
              {PROFILE.skills.map((s) => (
                <li key={s} className="m-1 border-2 border-black px-2 py-0.5 text-[11px] dark:border-white font-mono">
                  [{s.toUpperCase()}]
                </li>
              ))}
            </ul>

            <SectionTitle n="03">KOULUTUS</SectionTitle>
            <ul className="divide-y-2 divide-black dark:divide-white border-2 border-black dark:border-white">
              {PROFILE.education.map((e) => (
                <li key={e.school} className="flex items-baseline justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="font-semibold tracking-tight">{e.school}</p>
                    <p className="text-sm opacity-70">{e.degree}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm opacity-70">{e.period}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="space-y-10">
            <SectionTitle n="04">KOKEMUS</SectionTitle>
            <ExperienceTimeline />

            <SectionTitle n="05">PROJEKTIT</SectionTitle>
            <ProjectsList />
          </section>
        </div>

        <footer className="mt-16 border-t-4 border-black pt-4 text-xs opacity-80 dark:border-white">
          © {new Date().getFullYear()} {PROFILE.name} / Päivitetty {new Date().toLocaleDateString()}
        </footer>
      </main>

      <style>{`
        .title { letter-spacing: -0.02em; }
        .allcaps { letter-spacing: 0.06em; }
        a, .alink { text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
        @media print { * { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
      `}</style>
    </div>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="border-b-4 border-black pb-6 dark:border-white"
    >
      <div className="flex flex-col gap-2">
        <h1 className="title text-4xl font-black leading-tight md:text-5xl">
          {PROFILE.name}
        </h1>
        <p className="allcaps text-xs font-bold">{PROFILE.role}</p>
        <p className="text-sm opacity-70">{PROFILE.location}</p>
      </div>

      <p className="mt-5 max-w-3xl text-[15px] leading-relaxed">
        {PROFILE.summary}
      </p>
    </motion.header>
  );
}

function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-3">
        <span className="allcaps inline-flex h-6 min-w-[2.5rem] items-center justify-center border-2 border-black px-2 text-[11px] font-bold dark:border-white">
          {n}
        </span>
        <h2 className="allcaps text-[12px] font-extrabold">{children}</h2>
      </div>
      <div className="h-2 w-full border-y-2 border-black dark:border-white" />
    </div>
  );
}

function LinkRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block font-semibold">
      {children}
    </a>
  );
}

function ExperienceTimeline() {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-0 bottom-0 w-2 bg-black dark:bg-white" />
      {PROFILE.experience.map((exp, i) => (
        <article key={i} className="relative border-b-2 border-black py-5 last:border-b-0 dark:border-white">
          <span className="absolute -left-2 top-6 h-4 w-4 bg-black dark:bg-white" />
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-base font-extrabold">
              {exp.title} <span className="opacity-70">· {exp.company}</span>
            </h3>
            <span className="text-sm opacity-70">{exp.period}</span>
          </div>
          <p className="mt-2 text-sm">{exp.highlight}</p>
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
          className="group block border-4 border-black p-4 transition dark:border-white"
        >
          <h3 className="title text-lg font-black leading-tight group-hover:underline">
            {p.name}
          </h3>
          <p className="mt-2 text-sm">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="font-mono text-[11px]">
                [{t}]
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
