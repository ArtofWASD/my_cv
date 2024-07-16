"use client";
import { useAdminStore } from "@/src/shared/api/store/adminStatusStore";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  Login: string;
  Password: string;
};
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    login(true);
  };
  const login = useAdminStore((state: any) => state.login);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-flow-row gap-2"
      >
        <input
          type="text"
          placeholder="Login"
          {...register("Login", { required: true })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        {errors.Login?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Обязательное поле
          </p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true, min: -1, maxLength: 30 })}
          className="rounded-xl border-2 border-slate-400 px-4 py-2"
        />
        {errors.Password?.type === "required" && (
          <p role="alert" className="text-red-500">
            *Обязательное поле
          </p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};