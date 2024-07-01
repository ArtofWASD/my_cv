import { AdminMenu } from "@/src/widgets/admin/adminMenu";
import { AdminProjectsList } from "@/src/widgets/admin/adminProjectsList/ui";

const AdminPage = () => {
  return (
    <>
      <div className="admin-page grid grid-cols-[20%_80%]">
        <div className="left-side_menu h-screen bg-slate-400 opacity-45">
          <AdminMenu />
        </div>
        <div>
          <AdminProjectsList />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
