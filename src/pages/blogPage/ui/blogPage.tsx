import { createClient } from "@/src/shared/api/store/supabaseClient"


const BlogPage = async () => {
  const supabase = createClient()
  const { data: posts } = await supabase.from("blog").select("*")
  return (
    <div className="grid justify-center items-center">
      {posts &&
        posts.map((item) => (
          <div key={item.id} className="my-2 py-4 border-2 rounded-2xl w-128">
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <p>{item.created_at.toLocaleString("ru-RU")}</p>
          </div>
        ))}
    </div>
  )
}
export default BlogPage
