import { createClient } from "@/src/shared/api/supabase/supabaseServerClient";
import { cookies } from "next/headers";

const cookieStore = cookies();
export const supabase = createClient(cookieStore);