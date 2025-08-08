import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// -----------------------------
// EDIT THESE to personalize
// -----------------------------
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
    "Ratkaisukeskeinen kehittäjä, joka tykkää selkeästä koodista, käytettävyydestä ja nopeista julkaisuista.",
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
      bullets: [
        "Johdin design system -uudistusta (Storybook, Tailwind).",
        "Paransin LCP:ta 48% ja pienensin bundlea 30%.",
        "Rakensin testikattavuuden 85%:iin (Vitest/RTL).",
      ],
    },
    {
      title: "Full‑Stack Developer",
      company: "Toinen Firma Oy",
      period: "2021 – 2023",
      bullets: [
        "Rakensin Next.js + Prisma -pinolla sisäänkirjautumisen ja tilaukset.",
        "Otin käyttöön GitHub Actions -putken (build, test, deploy).",
      ],
    },
  ],
  projects: [
    {
      name: "Projektinimi",
      description:
        "Pieni kuvaus projektista, roolista ja tuloksista. Linkitä repo tai demo.",
      link: "https://example.com/project",
      tags: ["React", "Vite", "API"],
    },
    {
      name: "Toinen projekti",
      description: "Lyhyt kuvaus. Mitä ratkaisit? Mitä teknologioita käytit?",
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

function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
}

export default function App() {
  const { dark, setDark } = useTheme();
  const toggleTheme = () => setDark((d) => !d);
  const onPrint = () => window.print();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto max-w-3xl px-4 py-10 print:py-0">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 print:border-0 print:shadow-none print:bg-white print:dark:bg-white"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{PROFILE.name}</h1>
              <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-300">{PROFILE.role}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{PROFILE.location}</p>
            </div>
            <div className="flex gap-2 print:hidden">
              <button
                onClick={toggleTheme}
                className="rounded-xl border px-3 py-1.5 text-sm shadow-sm transition active:scale-[.98] border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                aria-label="Vaihda teema"
              >
                {dark ? "Light" : "Dark"}
              </button>
              <button
                onClick={onPrint}
                className="rounded-xl border px-3 py-1.5 text-sm shadow-sm transition active:scale-[.98] border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Lataa PDF
              </button>
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <a className="link" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <span className="text-zinc-400">•</span>
            <a className="link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="text-zinc-400">•</span>
            <a className="link" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <span className="text-zinc-400">•</span>
            <a className="link" href={PROFILE.website} target="_blank" rel="noreferrer">Website</a>
          </div>
        </motion.header>

        {/* Skills */}
        <Section title="Taidot">
          <ul className="flex flex-wrap gap-2">
            {PROFILE.skills.map((s) => (
              <li
                key={s}
                className="rounded-full border px-3 py-1 text-sm border-zinc-200 dark:border-zinc-700"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section title="Kokemus">
          <div className="space-y-5">
            {PROFILE.experience.map((exp) => (
              <article
                key={exp.title + exp.company}
                className="rounded-2xl border p-5 shadow-sm border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {exp.title} · <span className="font-normal text-zinc-500 dark:text-zinc-400">{exp.company}</span>
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projektit">
          <div className="grid gap-4 sm:grid-cols-2">
            {PROFILE.projects.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border p-5 shadow-sm transition hover:shadow border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="font-semibold group-hover:underline">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2 py-0.5 text-xs border-zinc-200 dark:border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Koulutus">
          <ul className="space-y-2">
            {PROFILE.education.map((e) => (
              <li key={e.school} className="flex items-baseline justify-between gap-2 rounded-2xl border p-4 shadow-sm border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.degree}</p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{e.period}</span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-10 mb-6 text-center text-xs text-zinc-500 print:hidden">
          © {new Date().getFullYear()} {PROFILE.name} · Päivitetty {new Date().toLocaleDateString()}
        </footer>
      </main>

      {/* Little global styles for print + links */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          main { max-width: 800px; }
        }
        .link { text-underline-offset: 4px; }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="mt-8"
    >
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      {children}
    </motion.section>
  );
}
