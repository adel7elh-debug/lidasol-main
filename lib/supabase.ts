import { createClient, SupabaseClient } from "@supabase/supabase-js";
let client: SupabaseClient | null | undefined;
export function createSupabaseBrowserClient(){if(client!==undefined)return client;const url=process.env.NEXT_PUBLIC_SUPABASE_URL??process.env.VITE_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY??process.env.VITE_SUPABASE_ANON_KEY;client=url&&key?createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;return client}
