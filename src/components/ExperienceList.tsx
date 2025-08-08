// src/components/ExperienceList.tsx
import { PROFILE } from "../data/profile";

export default function ExperienceList() {
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
