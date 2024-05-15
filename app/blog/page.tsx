import BlogPage from "@/src/pages/blogPage/ui/blogPage";
import { TypeData } from "@/src/shared/api/model/types";
import { createClient } from "@/src/shared/api/supabase/supabaseServerClient";
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
    </main>
  );
};

export default Blog;
