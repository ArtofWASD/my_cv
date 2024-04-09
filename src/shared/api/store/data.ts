import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { createClient } from "./supabaseClient"

export const useProjectsData = create(
  devtools(
    persist(
      (set) => ({
        data: [],
        getData: async () => {
          const supabase = createClient()
          const { data } = await supabase.from("projects").select("*")
          set({ data })
        },
      }),
      { name: "data" },
    ),
  ),
)
