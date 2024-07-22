"use client";
import { useAdminStore, useModalForm } from "@/src/shared/api/store/adminStatusStore";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
    setLogin(true);
    reset();
    router.push("/admin");
  };
  const openRegisterForm = useModalForm((state: any) => state.openRegisterForm);
  const setLogin = useAdminStore((state: any) => state.login);
  return (
    <div>
      <h1 className="pb-4 text-center text-2xl font-bold">
        Вход
      </h1>
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
          className="rounded-xl border-2 border-slate-400 px-2 py-2"
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
          placeholder="Password"
          {...register("Password", {
            required: "Обязательное поле для заполнения",
            min: -1,
            maxLength: 30,
          })}
          className="rounded-xl border-2 border-slate-400 px-2 py-2"
        />
        <ErrorMessage
          errors={errors}
          name="Password"
          render={({ message }) => (
            <p className="flex self-start text-xs text-red-400">{message}</p>
          )}
        />
        <input
          type="submit"
          value="Вход"
          className="mt-4 rounded-xl border-2 bg-green-200 px-4 py-2 hover:bg-green-400"
        />
      </form>
      <div>
        <p className="pt-4 text-center text-sm">
          Нет учётной записи?{" "}
          <span
            className="cursor-pointer hover:text-green-400"
            onClick={() => {
              openRegisterForm()
            }}
          >
            Зарегистрируйтесь!
          </span>
        </p>
      </div>
    </div>
  );
};
