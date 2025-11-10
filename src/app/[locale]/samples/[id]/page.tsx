import { selectorData } from "@/data/selector-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { DemoWrapper } from "./DemoWrapper";

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

interface SampleInfo {
  framework: string;
  component: string;
  control: string;
  sample: string;
}


export default async function SamplePage({ params }: Props) {
  const t = await getTranslations("SamplePage");
  const { id, locale } = await params;



  let sampleInfo: SampleInfo | null = null;


  for (const fw of selectorData) {
    for (const cg of fw.components) {
      for (const ctrl of cg.controls) {
        for (const s of ctrl.samples) {
          if (s.id === id) {
            sampleInfo = {
              framework: fw.name,
              component: cg.name,
              control: ctrl.name,
              sample: s.name,
            };
            break;
          }
        }
        if (sampleInfo) break;
      }
      if (sampleInfo) break;
    }
    if (sampleInfo) break;
  }

  if (!sampleInfo) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 md:px-20">
      <Link
        href={`/${locale}`}
        className="self-start mb-6 text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        ← {t("back_button")}
      </Link>

      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {sampleInfo.framework} / {sampleInfo.component} / {sampleInfo.control}
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
        {sampleInfo.sample}
      </h1>

      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700 transition hover:shadow-xl">
        <DemoWrapper id={id} />
      </div>
    </div>
  );
}
