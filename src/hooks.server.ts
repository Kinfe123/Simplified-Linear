import { VITE_SUPABASE_ANON_KEY } from "$env/static/private";
import { VITE_SUPABASE_URL } from "$env/static/private";
import { redirect, type Handle } from "@sveltejs/kit";
import {createSupabaseServerClient} from '@supabase/auth-helpers-sveltekit'


export const handle: Handle = async ({event , resolve}) => {

   
   event.locals.supabase = createSupabaseServerClient({
    supabaseKey:VITE_SUPABASE_ANON_KEY,
    supabaseUrl: VITE_SUPABASE_URL,
    event
   })
   event.locals.getSession = async () => {
    const {data : {session}} = await event.locals.supabase.auth.getSession()
    return session
   }
   if(event.url.pathname.startsWith('/todos')) {
    const sessions = await event.locals.getSession()
    if(!sessions) {
        throw redirect(303 , "/auth")
    }
}
   
   return resolve(event , {
    filterSerializedResponseHeaders(name){
        return name == "content-range"
    }
   })

}
