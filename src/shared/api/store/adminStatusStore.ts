import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// TODO уйти от статусов isRegister добавить статусы отображения форм
interface IStore {
  adminStatus: string;
  isLoggin: boolean;
  isRegister: boolean;
}
interface IModoalForm {
  isLoginFormOpen: boolean;
  isRegisterFormOpen: boolean;
}

export const useAdminStore = create(
  devtools((set) => ({
    adminStatus: "Projects",
    isLoggin: false,
    login: () =>
      set((state: IStore) => ({
        isLoggin: (state.isLoggin = !state.isLoggin),
      })),
    addStatus: (item: string) =>
      set((state: IStore) => ({
        adminStatus: (state.adminStatus = item),
      })),
  })),
);

export const useModalForm = create(
  devtools((set) => ({
    user: null,
    isLoginFormOpen: true,
    isRegisterFormOpen: false,
    openLoginForm: () =>
      set((state: IModoalForm) => ({
        isLoginFormOpen: (state.isLoginFormOpen = !state.isLoginFormOpen),
        isRegisterFormOpen: (state.isRegisterFormOpen =
          !state.isRegisterFormOpen),
      })),
    openRegisterForm: () =>
      set((state: IModoalForm) => ({
        isLoginFormOpen: (state.isLoginFormOpen = !state.isLoginFormOpen),
        isRegisterFormOpen: (state.isRegisterFormOpen =
          !state.isRegisterFormOpen),
      })),
  })),
);
