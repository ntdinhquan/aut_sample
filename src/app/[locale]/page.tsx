"use client";

import { useTranslations } from "next-intl";
import { Selector } from "@/components/selector/Selector";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-black py-10 gap-10">
      <h1 className="text-2xl font-bold">{t("title")}</h1>

      <main className="flex w-full max-w-5xl justify-center bg-white dark:bg-black py-20 px-16 rounded shadow">
        <Selector />
      </main>
    </div>
  );
}
