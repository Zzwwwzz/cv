import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  highlight: string;
}
interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
}
interface EducationItem {
  school: string;
  degree: string;
  period: string;
}
interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  skills: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}

// -----------------------------
// DATA
// -----------------------------

const PROFILE: Profile = {
  name: "JANI HARTIKAINEN",
  role: "SOFTWARE DEVELOPER",
  location: "Tampere, FI",
  email: "hartjani@hotmail.com",
  phone: "[REDACTED]",
  linkedin: "https://linkedin.com/in/hartjani",
  summary:
    "Versatile M.Sc. in Civil Engineering with a background in Computer Science, eager to quickly learn new languages and frameworks.",
  skills: [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "Bash",
    ".NET",
    "PostgreSQL",
    "CAN",
    "CODESYS",
    "YOCTO",
    "QT",
    "Linux",
    "Jenkins",
    "Docker",
    "AWS",
    "GIT",
    "Terraform",
    "REST API",
    "CI/CD",
    "Accessibility",
    "ADOBE CC",
    "MS365",
  ],
  experience: [
    {
      title: "SOFTWARE DEVELOPER",
      company: "Technion Oy",
      period: "2022 -> ",
      highlight:
        "Embedded software developer, with focus on functional safety, testing, and CI/CD. Some Full Stack projects",
    },
    {
      title: "JUNIOR STRUCTURAL ENGINEER",
      company: "Ramboll Finalnd Oy",
      period: "2018 - 2022",
      highlight:
        "Building surveys and building refurbishment design. Automation tools for survey data.",
    },
    {
      title: "COURSE ASSISTANT",
      company: "Tampere University",
      period: "2018 - 2019",
      highlight:
        "Course assistant for C++, and C++ data structures and algorithms courses. Course assistant for statics course.",
    },
    {
      title: "CONSTRUCTION WORKER",
      company: "Varies",
      period: "2013 - 2017",
      highlight:
        "Course assistant for C++, and C++ data structures and algorithms courses. Course assistant for statics course.",
    },    
  ],
  projects: [
    {
      name: "forklift",
      description:
        "Developing safety critial code in C, testing with MATCH, Creating pipeline w/ CI/CD, Jenkins, Terraform",
      tags: ["C", "safety critial", "CI/CD", "Jenkins", "Terraform", "MATCH", "CAN"],
    },
    {
      name: "trains, FS",
      description: "Developing full stack, stress testing, and developing in C",
      tags: ["REACT", "POSTGRESQL", "TS", "C", "REST API", "Testing", "CAN"],
    },
    {
      name: "trains, legacy",
      description: "Debugging and maintenance of legacy",
      tags: ["C", "Java", "Testing", "RS485", "CAN", "Debugging"],
    },
  ],
  education: [
    {
      school: "Tampere University",
      degree: "M.Sc., Civil engineering",
      period: "2013 - 2021",
    },
  ],
};

// -----------------------------
// APP 
// -----------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-none px-6 md:px-10 lg:px-16 xl:px-24 py-12">
        <Header />

        {/* Layout: aside + main content */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:[grid-template-columns:1fr_1.15fr]">
          <aside className="space-y-8">
            <SectionTitle n="01">CONTECT</SectionTitle>
            <div className="text-sm leading-6">
              <LinkRow href={`mailto:${PROFILE.email}`}>{PROFILE.email}</LinkRow>
              <LinkRow href={PROFILE.linkedin}>LINKEDIN</LinkRow>
            </div>

            <SectionTitle n="02">SKILLS</SectionTitle>
            <ul className="-m-1 flex flex-wrap">
              {PROFILE.skills.map((s) => (
                <li
                  key={s}
                  className="m-1 border-2 border-black px-2 py-0.5 text-[11px] font-mono dark:border-white"
                >
                  [{s.toUpperCase()}]
                </li>
              ))}
            </ul>

            <SectionTitle n="03">EDUCATION</SectionTitle>
            <ul className="border-2 border-black dark:border-white divide-y-2 divide-black dark:divide-white">
              {PROFILE.education.map((e) => (
                <li
                  key={e.school}
                  className="flex items-baseline justify-between gap-3 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold tracking-tight">{e.school}</p>
                    <p className="text-sm opacity-70">{e.degree}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm opacity-70">
                    {e.period}
                  </span>
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

      {/* Small helpers */}
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
        <p className="allcaps text-xs font-extrabold">{PROFILE.role}</p>
        <p className="text-sm opacity-70">{PROFILE.location}</p>
      </div>

      <p className="mt-5 max-w-3xl text-[15px] leading-relaxed">{PROFILE.summary}</p>
    </motion.header>
  );
}

function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-2 grid grid-cols-[auto_1fr] items-center gap-3">
      <span className="inline-flex h-7 min-w-[2.7rem] items-center justify-center border-4 border-black px-2 text-[11px] font-black tracking-widest dark:border-white">
        {n}
      </span>
      <h2 className="text-[20px] font-extrabold leading-none tracking-tight">{children}</h2>
      <div className="col-span-2 mt-2 h-2 w-full border-y-4 border-black dark:border-white" />
    </div>
  );
}

function LinkRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block font-semibold leading-6">
      {children}
    </a>
  );
}

function ExperienceList() {
  return (
    <div className="border-4 border-black dark:border-white divide-y-4 divide-black dark:divide-white">
      {PROFILE.experience.map((exp) => (
        <article key={`${exp.title}-${exp.company}`} className="grid grid-cols-1 gap-3 p-5 md:grid-cols-[9rem_1fr]">
          <div className="md:border-r-4 md:border-black md:pr-4 dark:md:border-white">
            <p className="text-sm font-bold">{exp.period}</p>
            <p className="text-xs opacity-70">{exp.company}</p>
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight">{exp.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{exp.highlight}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectsList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROFILE.projects.map((p) => (
        <a
          key={p.name}
          className="group block border-4 border-black p-5 transition dark:border-white"
        >
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-black leading-tight group-hover:underline">
              {p.name}
            </h3>
            <span className="text-xs font-bold opacity-70">→</span>
          </div>
          <p className="mt-2 text-sm">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2"> 
            {p.tags.map((t) => (
              <span
                key={t}
                className="border-2 border-black px-2 py-0.5 text-[11px] font-mono dark:border-white"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
