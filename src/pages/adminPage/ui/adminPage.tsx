"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { AdminAbout } from "@/src/widgets/admin/adminAbout";
import { AdminBlogList } from "@/src/widgets/admin/adminBlogList";
import { AdminHeader } from "@/src/widgets/admin/adminHeader";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";

import { VerticalAdminMenu } from "@/src/widgets/admin/adminMenu/vertical";
// Дизайн админки полное говно, надо переделать. под светлую и тёмную тему
// А где блять цвет поменять ?!
const AdminPage = () => {
  const status = useAdminStore((state: any) => state.adminStatus);
  return (
    <div className="grid grid-cols-auto grid-rows-[7%_auto]">
      <div className="row-span-3">
        <VerticalAdminMenu />
      </div>
      <div className="">
        <AdminHeader />
      </div>
      <div className="col-start-2 row-start-2 row-span-2 w-full">
        {status === "Projects" ||
          (status === "Проекты" && <AdminProjectsList />)}
        {status === "About" || (status === "Профиль" && <AdminAbout />)}
        {status === "Blog" || (status === "Блог" && <AdminBlogList />)}
      </div>
    </div>
  );
};

export default AdminPage;
