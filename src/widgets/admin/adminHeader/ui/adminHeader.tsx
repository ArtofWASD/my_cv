"use client";
import Image from "next/image";
import { useState } from "react";
import { IconButton } from "@/src/shared/ui/buttons/iconButton";
import { animations } from "@/src/shared/ui/buttons/animations/animations";
import ThemeSwitcher from "@/src/widgets/testThemeSwitcher/themeSwitcher";
//TODO: Разбить на компоненты, добавить анимацию на нопку поикса,
export const AdminHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <section className="grid grid-flow-col items-center justify-end px-6 py-5">
      <div className="ml-10 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className={`${openSearch ? "visible h-8 w-48 rounded-2xl border-2 border-black pl-3" : "hidden"}`}
          />
          <Image
            src="/icons/search.png"
            width={40}
            height={40}
            alt="Picture of the author"
            onClick={() => setOpenSearch(!openSearch)}
            className="cursor-pointer hover:scale-110"
          />
        </div>
        <div>
          <IconButton
            buttonProps={{
              route: "/",
              icon: "/icons/previous.png",
              name: "Назад",
              size: 40,
              variant: { animation: animations.bounce },
            }}
          />
        </div>
        <ThemeSwitcher />
      </div>
    </section>
  );
};
