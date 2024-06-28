import { AdminMenu } from "@/src/widgets/admin/adminMenu";

const AdminPage = () => {
  return (
    <>
      <p className="text-center">Админка</p>
      <div className="admin-page grid grid-cols-[20%_80%]">
        <div className="left-side_menu bg-slate-400 opacity-45 h-screen">
          <AdminMenu />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
