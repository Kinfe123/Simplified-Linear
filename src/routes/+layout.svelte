<script>
    import '../app.css'
    import {invalidate} from '$app/navigation'
    import { onMount } from 'svelte';
    export let data;
    let {supabase , session } = data;
    $:({supabase , session} = data)

    onMount(() => {
        const response = supabase.auth.onAuthStateChange((event , _sesion) => {
            if(session?.expires_at !== _sesion?.expires_at) {
                // should be excuted whenever the session updates to keep the page in sync
                invalidate('supabase:auth')
            }
        })
    // clean up
    return () => response.data.subscription.unsubscribe() ;
    });
</script>


<div class="container mx-auto my-6">

    
    <slot></slot>
</div>