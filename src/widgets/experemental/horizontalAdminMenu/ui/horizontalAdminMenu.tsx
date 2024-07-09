import Image from "next/image";
import { useAdminMenuTogglerStore } from "@/src/shared/api/store/adminStatusStore";

export const HorizontalAdminMenu = () => {
  const toggleMenu = useAdminMenuTogglerStore((state: any) => state.addStatus);
  const status = useAdminMenuTogglerStore((state: any) => state.adminStatus);
  const mockStatus = [
    { status: "Projects", id: 1, url: "/icons/projects.png" },
    { status: "Blog", id: 2, url: "/icons/blog.png" },
    { status: "About", id: 3, url: "/icons/profile.png" },
  ];
  return (
    <div className="grid grid-flow-col justify-start gap-4 pl-6">
      {mockStatus.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            toggleMenu(item.status);
          }}
        >
          <div
            className={`flex items-center cursor-pointer bg-white bg-center ${status === item.status ? "rounded-t-2xl px-4 pb-4 pt-3" : "rounded-full p-3"}`}
          >
            <Image
              src={item.url}
              width={40}
              height={40}
              alt="Picture of the author"
              className="cursor-pointe object-contain hover:scale-110"
            />
            <p
              className={`text-center ${status === item.status ? "block text-main-red text-xl font-semibold mx-3" : "hidden"}`}
            >
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
