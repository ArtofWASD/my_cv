import { AdminHeader } from "@/src/widgets/admin/adminHeader";
import { AdminMenu } from "@/src/widgets/admin/adminMenu";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";

const AdminPage = () => {
  return (
    <>
      <div className="admin-page grid grid-cols-[15%_80%]">
        <div className="left-side_menu h-screen">
          <AdminMenu />
        </div>
        <div>
          <AdminHeader/>
          <AdminProjectsList />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
