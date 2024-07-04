"use client";
import { usePathname } from "next/navigation";
import Button from "@/src/shared/ui/button";
import Toggler from "@/src/shared/ui/toggler";
import { NavMenu } from "../../navMenu/ui/navMenu";
import { useRouter } from "next/navigation"
import Image from "next/image";
//TODO: добавить на кнопку настроек модальное окно если не авторизван пользователь и если авторизован то редиректить сразу в админку
export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = [
    { name: "О себе", img: "/icons/profile.png", url: "/about" },
    { name: "Блог", img: "/icons/blog.png", url: "/blog" },
    { name: "Контакты", img: "/icons/contact.png", url: "/contacts" },
  ];
  return (
    <header className="grid bg-main-blue">
      <div className="flex gap-2 justify-self-end pr-2 pt-2">
        <Toggler />
        <Image
            src="/icons/settings.png"
            width={40}
            height={40}
            alt="Picture of the author"
            onClick={() => router.push("/admin")}
            className="hover:scale-110"
          />
      </div>
      <div className="grid items-end justify-items-center lg:grid-cols-[95%_5%]">
        <div className="py-4 lg:ml-20">
          <NavMenu menuItems={menuItems} />
        </div>
        {pathname == "/" ? (
          <></>
        ) : (
          <div className="none self-center pt-4 lg:block">
            <Button />
          </div>
        )}
      </div>
    </header>
  );
};
