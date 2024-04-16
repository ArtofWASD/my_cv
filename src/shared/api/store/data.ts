import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { createClient } from "../supabase/supabaseClient"

export const useProjectsData = create(
  devtools(
    persist(
      (set) => ({
        data: [],
        blogPosts:[],
        getData: async () => {
          const supabase = createClient()
          const { data } = await supabase.from("projects").select("*")
          set({ data })
        },
        getPosts:async ()=>{
          const supabase = createClient()
          const { data } = await supabase.from("blog").select("*")
          set({blogPosts:data})
        }
      }),
      { name: "data" },
    ),
  ),
)
