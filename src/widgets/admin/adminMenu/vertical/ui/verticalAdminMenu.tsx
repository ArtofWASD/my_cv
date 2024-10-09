import Image from "next/image";

export const VerticalAdminMenu = () => {
  const mockStatus = [
    { status: "Проекты", id: 1, url: "/icons/projects.png" },
    { status: "Блог", id: 2, url: "/icons/blog.png" },
    { status: "Профиль", id: 3, url: "/icons/profile.png" },
  ];
  return (
    <div className="grid h-screen w-48 grid-flow-row auto-rows-min gap-2 pl-6 shadow-lg shadow-slate-900/20 shadow-b-2 shadow-r-[3px] -shadow-spread-2 pt-4 ">
      {mockStatus.map((item) => (
        <div key={item.id} className="flex cursor-pointer items-center  gap-2 hover:bg-gray-200 rounded-md pl-2 py-1 mr-2">
          <Image
            src={item.url}
            width={20}
            height={20}
            alt="Picture of the author"
            className="cursor-pointe object-contain hover:scale-110"
          />
          <p className="text-center text-md">{item.status}</p>
        </div>
      ))}
    </div>
  );
};
