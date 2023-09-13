<script>
    export let data;
    let {supabase} = data
    $:({supabase} = data)
    let email = ""
    let password = ""
    let password2 = ""

    let hint = ''
    // client side implementation for it,
    const handleSubmit = async () => {
        if(password !==password2) {
            hint = 'Please try to match your passwords'
        }
        else{
            hint = "Email has been successfully sent!"
            await supabase.auth.signUp({
                email , 
                password, 
                // for session exchange
                options: {
                    emailRedirectTo:`${location.origin}/auth/callback`
                }
            })

        }
        

    }
    const handleSignIn = async () => {
        if(password !== password2) {
            hint = 'Please try to match your password'
            console.log('we str hrtr')
        }

        else {
            console.log('hellow')
            hint = "Email Sent To Your Email Account"
            await supabase.auth.signInWithPassword({
             email,
             password
            })
            

        }
    }
    const handleSignOut = async () => {
        await supabase.auth.signOut();
    }




    $: {
        if(password2){
            if(password != password2) {
                hint = 'PLease try to match your password'
            }
        }
    }
</script>


<svelte:head>
    <title>Get Started - Sign in</title>
</svelte:head>


<div class='flex flex-col gap-2 justify-center items-center '>
    
    <h1 class='text-2xl font-bold my-2'>Sign Up</h1>
    <form on:submit={handleSubmit} class='flex flex-col gap-3'>
        <input type="email" bind:value={email} placeholder="Email" class="border-2 border-slate-900 px-10 py-2"/>

        <input type="password" bind:value={password} placeholder="Password"  class="border-2 border-slate-900 px-10 py-2"/>
        <input type="password" bind:value={password2} placeholder="Confirm Password" class="border-2 border-slate-900 px-10 py-2"/>

        <button class="border-2 border-slate-900 bg-green-400 py-1 hover:bg-green-100">Sign Up</button>
    </form>
    <p>Already have an account ? <span class="text-green-600"><a href="/auth/signin">Sign in</a></span></p>

    <div class='my-10'>
        {#if hint }
          <p>{hint}</p>
        {/if}
        
    </div>

</div>