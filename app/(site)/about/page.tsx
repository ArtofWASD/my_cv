"use client";
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject";
import { Avatar } from "@/src/widgets/avatar";
import React from "react";
const mock = [
  { title: "javascript ", imgUrl: "icons/JavaScript.svg" },
  { title: "typescript ", imgUrl: "icons/TypeScript.svg" },
  { title: "react ", imgUrl: "/icons/React.svg" },
  { title: "redux ", imgUrl: "icons/Redux.svg" },
  { title: "tailwind ", imgUrl: "icons/Tailwind.svg" },
  { title: "supabase ", imgUrl: "icons/Supabase.svg" },
];
const About = () => {
  return (
    // TODO: Более подробное описание о себе, раздел Стек технологий, хобби, ссылка на гитхаб, фотогалерею (можно какую нибудь библиотеку)
    <main className="grid flex-wrap items-center justify-center px-36">
      <div className="grid grid-cols-2  items-center">
        <div className="body py-10 text-center">
          Привет, я Леонид, мне 37 лет и я фронтенд разработчик. Живу в
          Санкт-Петербурге. В работе изспользую React, Next.js, Typescript и
          другие библиотеки. На этом сайте собраны все значимые проекты с
          которыми я работал или работаю в данным момент. Так же вы можете
          использовать данное портфолио как пример для своих проектов. Всё что
          вам надо это перейти в репозиторий проекта на GitHub, скачать проект к
          себе на GitHub и заполнить его своими проектами и выложить на любой
          хостинг.
        </div>
        <Avatar />
      </div>
      <div className="stack flex items-center gap-6">
        <p>Мои стек технологий:</p>
        {mock.map((item) => (
          <UsedTechInPorject item={item} key={item.title} />
        ))}
      </div>
      <div className="hobbies">
        <p>
          Я люблю: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis, quod. Fugiat eligendi, provident quidem accusamus odit aut
          placeat reprehenderit natus expedita magnam facere cum aliquam ipsum
          tempora, laudantium veritatis quibusdam.
        </p>
      </div>
    </main>
  );
};

export default About;
