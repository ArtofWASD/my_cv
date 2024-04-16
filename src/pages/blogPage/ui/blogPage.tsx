import { createClient } from "@/src/shared/api/store/supabaseClient"


const BlogPage = async () => {
  const supabase = createClient()
  const { data: posts } = await supabase.from("blog").select("*")
  return (
    <div>
      {posts &&
        posts.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <p>{item.created_at.toLocaleString("ru-RU")}</p>
          </div>
        ))}
    </div>
  )
}
export default BlogPage
