import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IStore {
  adminStatus: string;
}

export const useAdminStore = create(
  devtools((set, get) => ({
    adminStatus: "Projects",
    isLoggin: true,
    addStatus: (item: string) =>
      set((state: IStore) => ({
        adminStatus: (state.adminStatus = item),
      })),
  })),
);
