"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { AdminAbout } from "@/src/widgets/admin/adminAbout";
import { AdminBlogList } from "@/src/widgets/admin/adminBlogList";
import { AdminHeader } from "@/src/widgets/admin/adminHeader";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";
import { HorizontalAdminMenu } from "@/src/widgets/admin/adminMenu/horizontal";

const AdminPage = () => {
  const status = useAdminStore((state: any) => state.adminStatus);
  // Дизайн админки полное говно, надо переделать. под светлую и тёмную тему

  return (
    <>
      <div className="admin-page ">
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
