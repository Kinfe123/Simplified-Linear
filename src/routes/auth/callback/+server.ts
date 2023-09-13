import { redirect } from "@sveltejs/kit";

export const GET = async (context) => {
    // console.log(context.lo)
    const {url , locals: {supabase}} = context
    const code = url.searchParams.get('code')
    if(code){
        await supabase.auth.exchangeCodeForSession(code)

    }
    throw redirect(303 , '/success')

}  