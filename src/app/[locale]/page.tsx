import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');


  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black py-10 gap-10">
      <h1 className="text-2xl font-bold text-center">{t('title')}</h1>
      <main className="flex min-h-screen w-full max-w-5xl flex-row items-start justify-between py-32 px-16 bg-white dark:bg-black gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Choose Framework</div>
          <select className="border rounded px-3 py-2 w-40">
            <option value="">-- Select --</option>
            <option value="nextjs">Next.js</option>
            <option value="angular">Angular</option>
          </select>
        </div>


        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Choose Components</div>
          <select className="border rounded px-3 py-2 w-40">
            <option value="">-- Select --</option>
            <option value="common">Common Controls</option>
            <option value="layout">Layout</option>
            <option value="navigate">Navigate</option>
          </select>
        </div>


        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Choose Control</div>
          <select className="border rounded px-3 py-2 w-40">
            <option value="">-- Select --</option>
            <option value="input">Input</option>
            <option value="button">Button</option>
            <option value="mousemove">Move Mouse</option>
          </select>
        </div>


        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Choose Sample</div>
          <select className="border rounded px-3 py-2 w-40">
            <option value="">-- Select --</option>
            <option value="sample1">Sample 1</option>
            <option value="sample2">Sample 2</option>
          </select>
        </div>
      </main>
    </div>
  );
}
