import BlogPage from "@/src/pages/blogPage/ui/blogPage";
import { TypeData } from "@/src/shared/api/model/types";
import { supabase } from "@/src/shared/api/supabase/handlerClient";
import { Suspense } from "react";

const Blog = async () => {
  const { data: posts } = await supabase.from("blog").select("*");
  return (
    <main className="bg-gradient-to-b from-orange-200 to-blue-500">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPage data={posts as TypeData[]} />
      </Suspense>
    </main>
  );
};

export default Blog;
