<script>
	import { redirect } from '@sveltejs/kit';

  const handleSubmit = () => {

  }
  let email = ''
  let password = ''
  export let data;
  let hint = ''
  $: ({supabase} = data)

  const handleSignIn = async () => {
   const response =  await supabase.auth.signInWithPassword({
        email , 
        password
    })
    if(response.data.user) {
        console.log(response.data)
        window.location.href = "/todos"
        // throw redirect(301 , '/todos')
    }
    else {
        hint = "Incorrect Password / Email"

    }
  }

</script>


<div class='flex flex-col gap-2 justify-center items-center '>
    
    <h1 class='text-2xl font-bold my-2'>Sign In</h1>
    <form on:submit={handleSignIn} class='flex flex-col gap-3'>
        <input type="email" bind:value={email}  class="border-2 border-slate-900 px-10 py-2"/>

        <input type="password" bind:value={password}  class="border-2 border-slate-900 px-10 py-2"/>

        <button class="border-2 border-slate-900 bg-green-400 py-1 hover:bg-green-100">Sign Up</button>
    </form>
    <p class='text-red-300'>{hint}</p>
    <p>Forget Password ? <span class="text-green-600"><a href="/auth/recovery">Sign in</a></span></p>

</div>