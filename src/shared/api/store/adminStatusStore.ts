import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IStore {
  adminStatus: string;
}

export const useAdminMenuTogglerStore = create(
  devtools((set, get) => ({
    adminStatus: "Projects",
    addStatus: (item: string) =>
      set((state: IStore) => ({
        adminStatus: (state.adminStatus = item),
      })),
  })),
);
