import BlogPage from '@/src/pages/blogPage/ui/blogPage'
import { createClient } from "@/src/shared/api/store/supabaseClient"

const Blog = async () => {
  const supabase = createClient()
  const { data: posts } = await supabase.from("blog").select("*")
  return (
    <>
      <BlogPage data={posts}/>
    </>
  )
}

export default Blog
