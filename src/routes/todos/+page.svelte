<script>
  import TodoForm from "../../components/TodoForm.svelte";
import { todos } from "../../store/todoStore";
import TodoDisplay from "../../components/TodoDisplay.svelte";
	import { supabase } from "../../supabase/supabase";
// import { todos } from "../../store/todoStore";
 export let data;
 const handleLogout = async () => {
   data.session = null;
  const {error } = await supabase.auth.signOut();
  console.log("Error: " , error)
  // window.location.href = "/"
  console.log(data.session)
 }
 $:{
  if(!data.session) {
    window.location.href = "/auth"
  }
  console.log($todos)
 }

</script>

<div class='flex flex-col justify-center items-center w-full'>
    <h1 class='text-3xl font-bold text-center'>Todos</h1>
    <div class="absolute right-1 top-3 ">
      <div class='flex justify-center items-center'>
        <a href="/dashboard" class=" bg-green-400  px-4 py-2" on:click={handleLogout}>Dashboard</a>
        <button class=" bg-red-900 px-4 py-2 text-white" on:click={handleLogout}>Logout</button>
        
      </div>

    </div>
    <div class="border-1 my-1  w-20 h-1 bg-slate-800 border-none"></div>
    <TodoForm sessionData = {data.session}/>

    <h1 class="text-xl font-bold text-center">Explore Words.</h1>
    {#if todos}
    {#each $todos as td}
     
    <TodoDisplay data={td} />
        
    {/each}
        
    {/if}
    <!--The todo lists goes here i guess-->

</div>