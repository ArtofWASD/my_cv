"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  Login: string;
  Password: string;
};
export const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    login(true);
    router.push("/admin");
  };
  const login = useAdminStore((state: any) => state.login);
  return (
    <div>
      <h1 className="pb-4 text-center text-2xl font-bold">Вход</h1>
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
          <p role="alert" className="text-red-500 text-xs">
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
          <p role="alert" className="text-red-500 text-xs">
            *Обязательное поле
          </p>
        )}
        <input
          type="submit"
          className="mt-4 rounded-xl border-2 bg-green-200 px-4 py-2 hover:bg-green-400"
        />
      </form>
      <div>
        <p className="pt-4 text-center text-sm ">
          Нет учётной записи? <span>Зарегистрируйтесь!</span>
        </p>
      </div>
    </div>
  );
};
