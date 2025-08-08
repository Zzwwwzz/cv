// src/components/ProjectsList.tsx
import { PROFILE } from "../data/profile";

export default function ProjectsList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROFILE.projects.map((p) => (
        <div key={p.name} className="group block border-4 border-black p-5 dark:border-white">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-black leading-tight">{p.name}</h3>
            <span className="text-xs font-bold opacity-70">→</span>
          </div>
          <p className="mt-2 text-sm">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="border-2 border-black px-2 py-0.5 text-[11px] font-mono dark:border-white">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
