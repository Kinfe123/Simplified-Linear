<script>
  import TodoForm from "../../components/TodoForm.svelte";
import { todos } from "../../store/todoStore";
import TodoDisplay from "../../components/TodoDisplay.svelte";
// import { todos } from "../../store/todoStore";
  console.log("THe todos in the details page: " , $todos)
</script>

<div class='flex flex-col justify-center items-center w-full'>
    <h1 class='text-3xl font-bold text-center'>Todos</h1>
    <h1 class="absolute text-red-900 right-3 top-3">Logout</h1>
    <div class="border-1 my-1  w-20 h-1 bg-slate-800 border-none"></div>
    <TodoForm />
    {#if todos}
    {#each $todos as td}

    <TodoDisplay data={td} />
        
    {/each}
        
    {/if}
    <!--The todo lists goes here i guess-->

</div>