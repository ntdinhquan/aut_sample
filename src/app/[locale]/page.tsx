"use client";

import { useTranslations } from "next-intl";
import { Selector } from "@/components/selector/Selector";
import LocaleSwitcher from "@/components/locale-switcher/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");

   return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-black py-10 gap-10">
      {/* Header: Title + Locale Switcher */}
      <header className="flex w-full max-w-5xl items-center justify-between px-4 md:px-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
          {t("title")}
        </h1>
        <div className="w-32 md:w-36">
          <LocaleSwitcher />
        </div>
      </header>

      {/* Main content */}
      <main className="flex w-full max-w-5xl justify-center bg-white dark:bg-gray-900 py-16 px-8 md:px-16 rounded-2xl shadow-lg transition hover:shadow-xl">
        <Selector />
      </main>
    </div>
  );
}
