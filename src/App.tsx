// src/App.tsx

import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import ExperienceList from "./components/ExperienceList";
import ProjectsList from "./components/ProjectsList";
import { PROFILE } from "./data/profile";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-none px-6 md:px-10 lg:px-16 xl:px-24 py-12">
        <Header />

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:[grid-template-columns:1fr_1.15fr]">
          <aside className="space-y-8">
            <SectionTitle n="01">CONTACT</SectionTitle>
            <div className="text-sm leading-6">
              <a className="block font-semibold leading-6" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <a className="block font-semibold leading-6" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
            </div>

            <SectionTitle n="02">SKILLS</SectionTitle>
            <ul className="-m-1 flex flex-wrap">
              {PROFILE.skills.map((s) => (
                <li key={s} className="m-1 border-2 border-black px-2 py-0.5 text-[11px] font-mono dark:border-white">[{s.toUpperCase()}]</li>
              ))}
            </ul>

            <SectionTitle n="03">EDUCATION</SectionTitle>
            <ul className="border-2 border-black dark:border-white divide-y-2 divide-black dark:divide-white">
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
            <SectionTitle n="04">EXPERIENCE</SectionTitle>
            <ExperienceList />

            <SectionTitle n="05">PROJECTS</SectionTitle>
            <ProjectsList />
          </section>
        </div>

        <footer className="mt-16 border-t-4 border-black pt-4 text-xs opacity-80 dark:border-white">
          © {new Date().getFullYear()} {PROFILE.name} / Updated {new Date().toLocaleDateString()}
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
