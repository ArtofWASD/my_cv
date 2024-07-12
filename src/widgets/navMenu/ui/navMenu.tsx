"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface INavItems {
  name: string;
  img: string;
  url: string;
}

export const NavMenu = ({ menuItems }: { menuItems: Array<INavItems> }) => {
  return (
    <div className="grid grid-flow-col gap-5">
      {menuItems.map((item) => (
        <div key={item.name}>
          <Link href={item.url} className="">
            <p className="text-2xl font-semibold text-white">{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
