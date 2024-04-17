
import { TypeData } from "@/src/shared/api/model/types"

const BlogPage = ({data} : { data: TypeData[] }) => {  
  return (
    <main className="grid justify-center items-center">
      {data &&
        data.map((item) => (
          <div key={item.id} className="my-2 py-4 border-2 rounded-2xl w-full lg:w-128">
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <p>{item.created_at.toLocaleString("ru-RU")}</p>
          </div>
        ))}
    </main>
  )
}
export default BlogPage
