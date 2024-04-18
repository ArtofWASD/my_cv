import BlogPage from "@/src/pages/blogPage/ui/blogPage";
import { TypeData } from "@/src/shared/api/model/types";
import { Suspense } from "react";
import { createClient } from "@/src/shared/api/supabase/supabaseServerClient";
import { cookies } from "next/headers";
const Blog = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: posts } = await supabase.from("blog").select("*");
  return (
    <main className="">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPage data={posts as TypeData[]} />
      </Suspense>
    </main>
  );
};

export default Blog;
