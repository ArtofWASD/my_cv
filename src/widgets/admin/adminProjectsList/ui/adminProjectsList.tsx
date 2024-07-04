"use client";
import { mockBD } from "@/src/shared/api/mockBD";
import Image from "next/image";
//TODO: необходимы компонент списка проектов, кнопка редактировать, модальное окно с добавлением поста, кнопка удалить
export const AdminProjectsList = () => {
  const testDB = mockBD;
  return (
    <>
      <div className="pl-10 text-3xl font-bold text-main-red">Ваши проекты</div>
      <div className="mt-5 grid pl-10">
        {testDB.map((item) => (
          <section
            key={item.id}
            className="my-2 grid grid-cols-[60%_20%] items-center justify-between gap-4 rounded-xl border-2 border-main-green py-2"
          >
            <div className="flex gap-2">
              <div className="ml-5">{item.id}</div>
              <div>{item.title}</div>
            </div>
            <div className="mr-5 flex items-center gap-2 justify-self-end">
              <Image
                src="/icons/edit.png"
                width={30}
                height={30}
                alt="Delete post"
                onClick={() => console.log("Delete")}
                className="hover:scale-110"
              />
              <Image
                src="/icons/delete.png"
                width={30}
                height={30}
                alt="Delete post"
                onClick={() => console.log("Delete")}
                className="hover:scale-110"
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
