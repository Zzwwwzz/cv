// src/components/SectionTitle.tsx
export default function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-2 grid grid-cols-[auto_1fr] items-center gap-3">
      <span className="inline-flex h-7 min-w-[2.7rem] items-center justify-center border-4 border-black px-2 text-[11px] font-black tracking-widest dark:border-white">{n}</span>
      <h2 className="text-[20px] font-extrabold leading-none tracking-tight">{children}</h2>
      <div className="col-span-2 mt-2 h-2 w-full border-y-4 border-black dark:border-white" />
    </div>
  );
}
