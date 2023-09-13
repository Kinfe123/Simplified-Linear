// import { VITE_SUPABASE_ANON_KEY , VITE_SUPABASE_URL } from "$env/static/public";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
export const load = async (event) => {
    const skey = import.meta.env.VITE_SUPABASE_ANON_KEY
    const surl = import.meta.env.VITE_SUPABASE_URL
    const {data , fetch , depends} = event
    // console.log(VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL)
    depends('supaase:auth')
    // depends("suapabse:auth")
    const supabase = createSupabaseLoadClient({
        supabaseKey: skey,
        supabaseUrl: surl,
        serverSession: data.session,
        event: {fetch}
    })
    const {data :{session}} = await supabase.auth.getSession()
    return {
        supabase,
        session
    }
}