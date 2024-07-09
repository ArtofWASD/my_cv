"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
//  TODO Настройки пользователя, имя, о себе, контакты.
interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  phone: number;
  telegram: String;
}
export const AdminAbout = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const registerWithMask = useHookFormMask(register);
  return (
    <div className="mx-6 mb-5 h-screen rounded-lg bg-white py-5 pr-6">
      <div className="pl-4 text-3xl font-bold text-main-red">
        Профиль и настройки
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-flow-row px-4"
      >
        <label className="py-1 text-xl font-semibold text-main-red">Имя</label>
        <input
          {...register("firstName")}
          className="rounded-lg border-2 border-main-blue py-2 pl-2"
        />
        <label className="py-1 text-xl font-semibold text-main-red">
          О себе
        </label>
        <textarea
          {...register("lastName")}
          className="rounded-lg border-2 border-main-blue py-2 pl-2"
        />
        <label className="py-1 text-xl font-semibold text-main-red">
          Почта
        </label>
        <input
          {...register("email")}
          className="rounded-lg border-2 border-main-blue py-2 pl-2"
          placeholder="mail@mail.com"
        />
        <label className="py-1 text-xl font-semibold text-main-red">
          Телефон
        </label>
        <input
          {...registerWithMask("phone", ["+9 (999) 999-99-99"])}
          placeholder="+9 (999) 999-99-99"
          className="rounded-lg border-2 border-main-blue py-2 pl-2"
        />
        <label className="py-1 text-xl font-semibold text-main-red">
          Телеграм
        </label>
        <input
          {...register("telegram")}
          className="rounded-lg border-2 border-main-blue py-2 pl-2"
          placeholder="@yourname"
        />
        <input
          type="submit"
          className="my-4 w-36 rounded-xl border-green-400 bg-main-red py-2 hover:border-2"
          onClick={() => reset()}
        />
      </form>
    </div>
  );
};
