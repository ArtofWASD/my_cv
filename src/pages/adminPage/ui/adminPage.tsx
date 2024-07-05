'use client';
import { useAdminMenuTogglerStore } from "@/src/shared/store/store";
import { AdminHeader } from "@/src/widgets/admin/adminHeader";
import { AdminMenu } from "@/src/widgets/admin/adminMenu";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";

const AdminPage = () => {
  const status = useAdminMenuTogglerStore((state: any) => state.adminStatus);
  return (
    <>
      <div className="admin-page grid grid-cols-[15%_80%]">
        <div className="left-side_menu h-screen">
          <AdminMenu />
        </div>
        <div>
          <AdminHeader />
          {status === "Projects" && <AdminProjectsList />}
          
        </div>
      </div>
    </>
  );
};

export default AdminPage;
