"use client";

import { Selector } from "@/components/selector/Selector";
import Header from "@/components/layout/Header";

export default function Home() {
   return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      <Header />

      <main className="flex flex-1 flex-col items-center gap-10 py-16">
        <div className="flex w-full max-w-5xl justify-center bg-white dark:bg-gray-900 py-16 px-8 md:px-16 rounded-2xl shadow-lg transition hover:shadow-xl">
          <Selector />
        </div>
      </main>
    </div>
  );

}
