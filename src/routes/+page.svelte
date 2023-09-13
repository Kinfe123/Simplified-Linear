<script>

	import TodoDisplay from '../components/TodoDisplay.svelte';
import TodoForm from '../components/TodoForm.svelte' 
	import { todos } from '../store/todoStore';
    import { supabase } from '../supabase/supabase';

    let count = 0
    // console.log("The supabase cleitn: " , supabase)
    export let data;
    console.log("Hello the data is here: " , data.session)

</script>

<svelte:head>
    <title>DOTo - DUMMy</title>
</svelte:head>


<h1 class="text-3xl font-bold text-center text-slate-900">JUst wrote a dummy stuff</h1>
<body class="flex flex-col justify-center items-center gap-2">

    <!-- <TodoForm /> -->
<a href="/todos" class='my-2  bg-green-500 border-2 border-slate-900 px-2 py-1'>Create a todo</a>
    {#if todos}
    {#each $todos as td}

    <TodoDisplay data={td} />
        
    {/each}
        
    {/if}


</body>

