"use client";
import Image from "next/image";
import { useState } from "react";
import { IconButton } from "@/src/shared/ui/buttons/iconButton";
import { animation } from "@/src/shared/ui/buttons/animations/pulse";
//TODO: Разбить на компоненты, добавить анимацию на нопку поикса,
export const AdminHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <section className="grid grid-flow-col items-center justify-between px-5 py-5">
      <div className="grid grid-flow-col items-center">
        <Image
          src="/icons/avatar.png"
          width={75}
          height={75}
          alt="Picture of the author"
        />
        <div className="grid grid-flow-row gap-2">
          <p className="text-3xl font-bold">Hello $UserName</p>
          <p className="text-sm font-light">welcome to your admin panel</p>
        </div>
      </div>
      <div className="grid grid-flow-col items-end justify-start gap-2 pb-5">
        <Image src="/icons/Logo.png" width={50} height={50} alt="menu" />
        <p className="text-xl font-bold text-main-red">Skills Showcase</p>
      </div>
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
              variant: { animation },
            }}
          />
        </div>
      </div>
    </section>
  );
};
