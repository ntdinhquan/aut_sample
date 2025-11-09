"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ButtonBasicDemo() {
    const [clicked, setClicked] = useState(false);
    const t = useTranslations("ButtonBasic");


    const handleClick = () => setClicked(prev => !prev);

    return (
        <div className="flex gap-4 items-center">
            <Button onClick={handleClick}>
                Click me
            </Button>

            <div
                className={`px-4 py-2 rounded ${clicked ? "bg-green-500 text-white" : "bg-gray-200"
                    }`}
            >
                {clicked ? t("button_clicked") : t("button_not_clicked")}
            </div>
        </div>
    );
}
