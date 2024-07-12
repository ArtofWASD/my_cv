"use client";
import { usePathname } from "next/navigation";
import { NavMenu } from "../../navMenu/ui/navMenu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IconButton } from "@/src/shared/ui/buttons/iconButton";
import { rotate } from "@/src/shared/ui/buttons/animations/rotate";
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
      <div className="flex gap-2 justify-self-end items-center pr-2 pt-2">
        <IconButton buttonProps={{ route: "/admin", animation: {}, icon: "/icons/settings.png", name: "Настройки", size: 40, variant: {rotate} }} />
        {pathname == "/" ? (
          <></>
        ) : (
          <div className="none lg:block">
            <Image
              src="/icons/previous.png"
              width={40}
              height={40}
              alt="Picture of the author"
              onClick={() => router.push("/")}
              className="cursor-pointer hover:scale-110"
            />
          </div>
        )}
      </div>
      <div className="grid items-end justify-items-center lg:grid-cols-[95%_5%]">
        <div className="py-4 lg:ml-20">
          <NavMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};
