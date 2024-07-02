"use client";
import Image from "next/image";
import { useState } from "react";
//TODO: Разбить на компоненты, добавить анимацию на нопку поикса, 
export const AdminHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="grid grid-flow-col items-center justify-between pl-5">
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
        <input
          type="text"
          className={`${openSearch ? "visible h-8 w-48 pl-3 rounded-2xl border-2 border-black" : "hidden"}`}
        />
        <Image
          src="/icons/search.png"
          width={40}
          height={40}
          alt="Picture of the author"
          onClick={() => setOpenSearch(!openSearch)}
        />
      </div>
    </div>
  );
};
