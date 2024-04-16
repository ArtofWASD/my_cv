import { TypeData } from "@/src/shared/api/model/types"

const BlogPage = async ({data}: {data: TypeData[]}) => {
  return (
    <div className="grid justify-center items-center">
      {data &&
        data.map((item) => (
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
