import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// TODO уйти от статусов isRegister добавить статусы отображения форм
interface IStore {
  adminStatus: string;
  isLoggin: boolean;
  isRegister: boolean;
}

export const useAdminStore = create(
  devtools((set, get) => ({
    adminStatus: "Projects",
    isLoggin: false,
    isRegister: false,
    register: (item:boolean) => set((state: IStore) => ({ isRegister: (state.isRegister = item)})),
    login: (item: boolean) => set((state: IStore) => ({ isLoggin: (state.isLoggin = item) })),
    addStatus: (item: string) =>
      set((state: IStore) => ({
        adminStatus: (state.adminStatus = item),
      })),
  })),
);

export const useUserStore = create(devtools((set) => ({
  user: null,

})))
