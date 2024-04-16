import BlogPage from '@/src/pages/blogPage/ui/blogPage'
import { TypeData } from '@/src/shared/api/model/types'
import { createClient } from "@/src/shared/api/store/supabaseClient"
import { createNextServerClient } from '@/src/shared/api/store/supabaseServerClient'

const Blog = async () => {
  const supabase = createNextServerClient()
  const { data: posts } = await supabase.from("blog").select("*")
  return (
    <>
      <BlogPage data={posts as TypeData[]}/>
    </>
  )
}

export default Blog
