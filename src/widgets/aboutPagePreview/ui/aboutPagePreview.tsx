import { Avatar } from "@/src/widgets/avatar";
export const AboutPagePrewiev = () => {
  return (
    <div className="mt-10 grid grid-flow-row items-center justify-center gap-12 md:grid-flow-col md:grid-cols-[60%_40%] md:px-10 lg:gap-2 xl:grid-cols-[50%_30%] ">
      <p className="text-balance text-center text-sm lg:text-base">
        Привет, я Леонид, мне 37 лет и я фронтенд разработчик. Живу в
        Санкт-Петербурге. В работе изспользую React, Next.js, Typescript и
        другие библиотеки. На этом сайте собраны все значимые проекты с которыми
        я работал или работаю в данным момент. Так же вы можете использовать
        данное портфолио как пример для своих проектов. Всё что вам надо это
        перейти в репозиторий проекта на GitHub, скачать проект к себе на GitHub
        и заполнить его своими проектами и выложить на любой хостинг.
      </p>
      <div className="row-start-1 row-end-2">
        <Avatar />
      </div>
    </div>
  );
};
