import AppPage from "@/src/pages/appPage/ui/appPage";
import { TypeData } from "@/src/shared/api/model/types";
import { createClient } from "@/src/shared/api/supabase/supabaseServerClient";
import { cookies } from "next/headers";

const Home = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  let { data: projectsList, error } = await supabase
    .from("projectsList")
    .select("*");
  return (
    <main className="main">
      <AppPage data={projectsList as TypeData[]} />
    </main>
  );
};
export default Home;
