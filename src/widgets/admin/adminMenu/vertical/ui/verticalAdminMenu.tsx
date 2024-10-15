"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const VerticalAdminMenu = () => {
  const [switchMenu, setSwintchMenu] = useState(true);
  const toggleMenu = useAdminStore((state: any) => state.addStatus);
  const status = useAdminStore((state: any) => state.adminStatus);
  const mockStatus = [
    { status: "Проекты", id: 1, url: "/icons/projects.png" },
    { status: "Блог", id: 2, url: "/icons/blog.png" },
    { status: "Профиль", id: 3, url: "/icons/profile.png" },
  ];

  const menu = {
    open: {
      width: 180,
      transition: { duration: 0.5 },
    },
    closed: {
      width: 70,
      transition: { duration: 0.5 },
    },
  };
  const menuItem = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      className="shadow-b-2 shadow-r-[3px] -shadow-spread-2 grid h-screen grid-flow-row auto-rows-min gap-2 pl-6 pt-4 shadow-lg shadow-slate-900/20"
      variants={menu}
      animate={switchMenu ? "open" : "closed"}
    >
      <div className="grid grid-flow-row items-center">
        <div className="grid grid-flow-col items-center justify-start gap-2 pb-2">
          <Image src="/icons/Logo.png" width={50} height={50} alt="menu" />
          <motion.p
            variants={menuItem}
            animate={switchMenu ? "open" : "closed"}
            className="text-sm font-bold text-main-red"
          >
            Skills Showcase
          </motion.p>
        </div>
        <div className="grid grid-flow-row gap-2">
          <motion.p
            variants={menuItem}
            animate={switchMenu ? "open" : "closed"}
            className="text-md pl-2 font-bold"
          >
            Привет $UserName
          </motion.p>
        </div>
      </div>
      <button
        className="justify-self-end px-2 text-main-red"
        onClick={() => setSwintchMenu(!switchMenu)}
      >
        {switchMenu ? "<<" : ">>"}
      </button>
      {mockStatus.map((item) => (
        <div
          key={item.id}
          className="mr-2 flex cursor-pointer  items-center gap-2 rounded-md py-1 pl-2 hover:bg-gray-200"
          onClick={() => {
            toggleMenu(item.status);
          }}
        >
          <Image
            src={item.url}
            width={20}
            height={20}
            alt="Picture of the author"
            className="cursor-pointe object-contain hover:scale-110"
          />
          <motion.p
            className="text-md text-center"
            variants={menuItem}
            animate={switchMenu ? "open" : "closed"}
          >
            {item.status}
          </motion.p>
        </div>
      ))}
    </motion.div>
  );
};
