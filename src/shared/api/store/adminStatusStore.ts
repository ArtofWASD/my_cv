import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IStore {
  adminStatus: string;
  isLoggin: boolean;
}

export const useAdminStore = create(
  devtools((set, get) => ({
    adminStatus: "Projects",
    isLoggin: false,
    login: (item: boolean) => set((state: IStore) => ({ isLoggin: (state.isLoggin = item) })),
    addStatus: (item: string) =>
      set((state: IStore) => ({
        adminStatus: (state.adminStatus = item),
      })),
  })),
);
