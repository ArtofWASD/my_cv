"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  Login: string;
  Password: string;
};
export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setLogin(true);
    setRegister(true)
    reset();
    router.push("/admin");
  };
  const setLogin = useAdminStore((state: any) => state.login);
  const setRegister = useAdminStore((state: any) => state.register);
  return (
    <div>
      <h1 className="pb-4 text-center text-2xl font-bold">Вход в админ панель</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-flow-row gap-2"
      >
        <p className="pl-1 text-sm">Логин</p>
        <input
          type="text"
          placeholder="some_email@example.com"
          {...register("Login", { required: true })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        {errors.Login?.type === "required" && (
          <p role="alert" className="text-xs text-red-500">
            *Обязательное поле
          </p>
        )}
        <p className="pl-1 text-sm">Пароль</p>
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true, min: -1, maxLength: 30 })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        {errors.Password?.type === "required" && (
          <p role="alert" className="text-xs text-red-500">
            *Обязательное поле
          </p>
        )}
        <input
          type="submit"
          value="Вход"
          className="mt-4 rounded-xl border-2 bg-green-200 px-4 py-2 hover:bg-green-400"
        />
      </form>
      <div>
        <p className="pt-4 text-center text-sm ">
          Нет учётной записи?{" "}
          <span
            onClick={() => {
              setRegister(true), setLogin(false);
            }}
          >
            Зарегистрируйтесь!
          </span>
        </p>
      </div>
    </div>
  );
};
