import BlogPage from "@/src/pages/blogPage/ui/blogPage";
import { TypeData } from "@/src/shared/api/model/types";
import { createClient } from "@/src/shared/api/supabase/supabaseServerClient";
import { BlogPreviewItem } from "@/src/widgets/blogPreviewItem";
import { cookies } from "next/headers";
const Blog = async () => {
  //TODO: вывод постов, которые были добавлены в блог
  //TODO: добавить возможность добавления, удаления и редактирования постов если ты пользователь
  //TODO: добавить пагинацию
  //TODO: добавить счётчик просмотров и реакций на посты, SEO постов.
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: posts } = await supabase.from("blog").select("*");
  return (
    <main className="">
      <BlogPage data={posts as TypeData[]} />
      <div className="grid justify-center gap-4 pt-4">
      <BlogPreviewItem />
      <BlogPreviewItem/>
      <BlogPreviewItem/>
      <BlogPreviewItem/>
      <BlogPreviewItem/>
      <BlogPreviewItem/>
      </div>
      
    </main>
  );
};

export default Blog;
