"use client";
export const AdminMenu = () => {
  return (
    <div className="menu ml-6 pt-2 h-screen border-r-2">
      <p className="pb-5 text-2xl self-start text-main-title">UserName</p>
      <p className="text-black hover:ml-4 hover:scale-110 hover:text-blue-600 cursor-pointer text-xl py-1">
        Проекты
      </p>
      <p className="text-black hover:ml-4 hover:scale-110 hover:text-blue-600 cursor-pointer text-xl py-1">
        Блог
      </p>
      <p className="text-black hover:ml-4 hover:scale-110 hover:text-blue-600 cursor-pointer text-xl py-1">
        О себе
      </p>
    </div>
  );
};
