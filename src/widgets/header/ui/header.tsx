"use client";
import { usePathname } from "next/navigation";
import { NavMenu } from "../../navMenu/ui/navMenu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IconButton } from "@/src/shared/ui/buttons/iconButton";
import {
  useAdminStore,
  useModalForm,
} from "@/src/shared/api/store/adminStatusStore";
import { Modal } from "@/src/shared/ui/modal/modal";
import { Suspense } from "react";
import { LoginForm } from "../../loginForm";
import { animations } from "@/src/shared/ui/buttons/animations/animations";
import { RegisterForm } from "../../registerForm";
import ThemeSwitcher from "../../testThemeSwitcher/themeSwitcher";
//TODO: добавить на кнопку настроек модальное окно если не авторизван пользователь и если авторизован то редиректить сразу в админку
export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = [
    { name: "О себе", img: "/icons/profile.png", url: "/about" },
    { name: "Блог", img: "/icons/blog.png", url: "/blog" },
    { name: "Контакты", img: "/icons/contact.png", url: "/contacts" },
  ];
  const openLoginForm = useModalForm((state: any) => state.isLoginFormOpen);
  const openRegisterForm = useModalForm(
    (state: any) => state.isRegisterFormOpen,
  );
  const isLogin = useAdminStore((state: any) => state.isLogin);
  return (
    <header className="grid grid-cols-[90%_10%] bg-main-blue">
      <div className="grid grid-flow-row-dense items-center justify-center">
        <div className="grid grid-flow-col items-end justify-center gap-2">
          <Image src="/icons/Logo.png" width={50} height={50} alt="menu" />
          <p className="text-2xl font-bold text-white">Skills Showcase</p>
        </div>
        <div className="">
          <NavMenu menuItems={menuItems} />
        </div>
      </div>
      <div className="flex items-center gap-2 self-start justify-self-end pr-2 pt-2">
        <IconButton
          buttonProps={{
            route: `${isLogin ? "/admin" : "?modal=true"}`,
            icon: "/icons/settings.png",
            name: "Настройки",
            size: 40,
            variant: { animation: animations.rotate },
          }}
        />
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
        <ThemeSwitcher/>
      </div>
      <Suspense>
        <Modal>
          {openLoginForm && <LoginForm />}
          {openRegisterForm && <RegisterForm />}
        </Modal>
      </Suspense>
    </header>
  );
};
