
import { TypeData } from "@/src/shared/api/model/types"

const BlogPage = ({data} : { data: TypeData[] }) => {  
  return (
    <main className="grid justify-center items-center ">
      {data &&
        data.map((item) => (
          <div key={item.id} className="my-2 py-4 border-2 rounded-2xl w-full lg:w-128 bg-white">
            <h1 className="font-bold text-center">{item.title}</h1>
            <p className="px-4">{item.body}</p>
          </div>
        ))}
    </main>
  )
}
export default BlogPage
