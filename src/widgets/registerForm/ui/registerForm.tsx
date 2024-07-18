"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormValues = {
  Login: string;
  Password: string;
  re_password: string;
};
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    login(true);
    reset();
  };
  const login = useAdminStore((state: any) => state.login);
  const setLogin = useAdminStore((state: any) => state.login);
  const setRegister = useAdminStore((state: any) => state.register);
  return (
    <div>
      <h1 className="pb-4 text-center text-2xl font-bold">Регистрация</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-flow-row gap-2"
      >
        <p className="pl-1 text-sm">Логин</p>
        <input
          type="text"
          placeholder="some_email@example.com"
          {...register("Login", {
            required: "Обязательное поле для заполнения",
          })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        <ErrorMessage
          errors={errors}
          name="Login"
          render={({ message }) => (
            <p className="flex self-start text-xs text-red-400">{message}</p>
          )}
        />
        <p className="pl-1 text-sm">Пароль</p>
        <input
          type="password"
          placeholder="пароль"
          {...register("Password", {
            required: "Обязательное поле для заполнения",
            min: -1,
            maxLength: 30,
          })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        <ErrorMessage
          errors={errors}
          name="Password"
          render={({ message }) => (
            <p className="flex self-start text-xs text-red-400">{message}</p>
          )}
        />
        <p className="pl-1 text-sm">Повторите пароль</p>
        <input
          type="password"
          placeholder="повторите пароль"
          {...register("re_password", {
            required: true,
            min: -1,
            maxLength: 30,
            validate: () =>
              String(getValues("Password")) ===
                String(getValues("re_password")) || "Пароли не совпадают",
          })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        <ErrorMessage
          errors={errors}
          name="re_password"
          render={({ message }) => (
            <p className="flex self-start text-xs text-red-400">{message}</p>
          )}
        />
        <input
          type="submit"
          value='Зарегистрироваться'
          className="mt-4 rounded-xl border-2 bg-green-200 px-4 py-2 hover:bg-green-400"
        />
      </form>
      <div>
        <p className="pt-4 text-center text-sm ">
          Есть учётная запись?{" "}
          <span
            className="cursor-pointer hover:text-green-400"
            onClick={() => {
              setRegister(false), setLogin(false);
            }}
          >
            Залогинься!
          </span>
        </p>
      </div>
    </div>
  );
};
