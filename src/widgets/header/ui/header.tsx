"use client";
import { usePathname } from "next/navigation";
import Button from "@/src/shared/ui/button";
import Toggler from "@/src/shared/ui/toggler";
import { NavMenu } from "../../navMenu/ui/navMenu";

export const Header = () => {
  const pathname = usePathname();
  const menuItems = [
    { name: "О себе", img: "/icons/profile.png", url: "/about" },
    { name: "Блог", img: "/icons/blog.png", url: "/blog" },
    { name: "Контакты", img: "/icons/contact.png", url: "/contacts" },
  ];
  return (
    <header className="grid bg-orange-200">
      <div className="justify-self-end pr-2 pt-2">
        <Toggler />
      </div>
      <div className="grid items-end justify-items-center lg:grid-cols-[95%_5%]">
        <div className="py-4 lg:ml-20">
          <NavMenu menuItems={menuItems} />
        </div>
        {pathname == "/" ? (
          <></>
        ) : (
          <div className="self-center pt-4">
            <Button />
          </div>
        )}
      </div>
    </header>
  );
};
