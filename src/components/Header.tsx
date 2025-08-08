// src/components/Header.tsx
import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function Header() {
  return (
    <motion.header initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:.35 }}
      className="border-b-4 border-black pb-6 dark:border-white">
      <div className="flex flex-col gap-2">
        <h1 className="title text-4xl font-black leading-tight md:text-5xl">{PROFILE.name}</h1>
        <p className="allcaps text-xs font-extrabold">{PROFILE.role}</p>
        <p className="text-sm opacity-70">{PROFILE.location}</p>
      </div>
      <p className="mt-5 max-w-3xl text-[15px] leading-relaxed">{PROFILE.summary}</p>
    </motion.header>
  );
}
