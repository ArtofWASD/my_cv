"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"
//TODO: Разбить на компоненты, добавить анимацию на нопку поикса,
export const AdminHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter();
  return (
    <section className="grid grid-flow-col items-center justify-between py-5 px-5">
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
            className="hover:scale-110 cursor-pointer"
          />
        </div>
        <div>
        <Image
            src="/icons/previous.png"
            width={40}
            height={40}
            alt="Picture of the author"
            onClick={() => router.push("/")}
            className="hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
