"use client";
import { useAdminMenuTogglerStore } from "@/src/shared/api/store/adminStatusStore";
export const AdminMenu = () => {
  const toggleMenu = useAdminMenuTogglerStore((state: any) => state.addStatus);
  const mockStatus = [
    { status: "Projects", id: 1 },
    { status: "Blog", id: 2 },
    { status: "About", id: 3 },
  ];
  return (
    <div className="menu ml-6 h-screen border-r-2 pt-2">
      {mockStatus.map((item) => (
        <p
          className="cursor-pointer py-1 text-xl text-black hover:ml-4 hover:scale-110 hover:text-blue-600"
          onClick={() => {
            toggleMenu(item.status);
          }}
          key={item.id}
        >
          {item.status}
        </p>
      ))}
    </div>
  );
};
