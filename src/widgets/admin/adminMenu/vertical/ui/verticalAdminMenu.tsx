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
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      className="shadow-b-2 shadow-r-[3px] -shadow-spread-2 grid h-screen grid-flow-row auto-rows-min gap-2 pl-6 pt-4 shadow-lg shadow-slate-900/20"
      variants={menu}
      initial="open"
      animate={switchMenu ? "open" : "closed"}
    >
      <div
        className="flex cursor-pointer items-center justify-start gap-2 pb-2"
        onClick={() => setSwintchMenu(!switchMenu)}
      >
        <Image
          src="/icons/Logo.png"
          width={40}
          height={40}
          alt="admin_logo"
          className="cursor-pointer object-contain"
        />
        <motion.p
          variants={menuItem}
          animate={switchMenu ? "open" : "closed"}
          className="text-sm font-bold text-main-red"
        >
          Skills Showcase
        </motion.p>
      </div>
      {mockStatus.map((item) => (
        <motion.div
          animate={{
            width: switchMenu ? 150 : 35,
          }}
          key={item.id}
          className="mr-2 flex cursor-pointer items-center gap-2 rounded-md py-1 pl-2 hover:bg-gray-200"
          onClick={() => {
            toggleMenu(item.status);
          }}
        >
          <Image
            src={item.url}
            width={20}
            height={20}
            alt="Picture of the author"
            className="cursor-pointer object-contain hover:scale-110"
          />
          <motion.p
            className="text-md text-center"
            variants={menuItem}
            animate={switchMenu ? "open" : "closed"}
          >
            {item.status}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};
