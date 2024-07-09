"use client";
import { useAdminMenuTogglerStore } from "@/src/shared/api/store/adminStatusStore";
import { AdminAbout } from "@/src/widgets/admin/adminAbout";
import { AdminBlogList } from "@/src/widgets/admin/adminBlogList";
import { AdminHeader } from "@/src/widgets/admin/adminHeader";
import { AdminMenu } from "@/src/widgets/admin/adminMenu";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";
import { HorizontalAdminMenu } from "@/src/widgets/experemental/horizontalAdminMenu";

const AdminPage = () => {
  const status = useAdminMenuTogglerStore((state: any) => state.adminStatus);
  return (
    <>
      <div className="admin-page grid grid-cols-[15%_80%]">
        <div className="left-side_menu h-screen py-6">
          <AdminMenu />
        </div>
        <div>
          <AdminHeader />
          <HorizontalAdminMenu />
          {status === "Projects" && <AdminProjectsList />}
          {status === "About" && <AdminAbout />}
          {status === "Blog" && <AdminBlogList />}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
