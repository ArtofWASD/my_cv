import { Avatar } from "@/src/widgets/avatar"
export const AboutPagePrewiev = () => {
  return (
    <div className="grid grid-flow-row md:grid-flow-col xl:grid-cols-[50%_30%] md:grid-cols-[60%_40%] items-center justify-center md:px-10 gap-12 mt-10 lg:gap-2 ">
      <p className="text-balance text-center text-sm lg:text-base">
        Привет, я Леонид, мне 37 лет и я фронтенд разработчик. Живу в Санкт-Петербурге. В
        работе изспользую React, Next.js, Typescript и другие библиотеки. На этом сайте
        собраны все значимые проекты с которыми я работал или работаю в данным момент. Так
        же вы можете использовать данное портфолио как пример для своих проектов. Всё что
        вам надо это перейти в репозиторий проекта на GitHub, скачать проект к себе на
        GitHub и заполнить его своими проектами и выложить на любой хостинг.
      </p>
      <div className="row-start-1 row-end-2">
        <Avatar />
      </div>
    </div>
  )
}
