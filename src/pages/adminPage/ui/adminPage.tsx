"use client";
import { useAdminMenuTogglerStore } from "@/src/shared/api/store/adminStatusStore";
import { AdminAbout } from "@/src/widgets/admin/adminAbout";
import { AdminBlogList } from "@/src/widgets/admin/adminBlogList";
import { AdminHeader } from "@/src/widgets/admin/adminHeader";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";
import { HorizontalAdminMenu } from "@/src/widgets/experemental/horizontalAdminMenu";

const AdminPage = () => {
  const status = useAdminMenuTogglerStore((state: any) => state.adminStatus);
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
