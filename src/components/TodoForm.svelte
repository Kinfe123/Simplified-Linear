<script>

  import { addTodo } from "../store/todoStore";
  import { todos } from "../store/todoStore";
  let textvalue = ""
 


  const handleClick = () => {
    
     addTodo(textvalue)
     textvalue = ""
    
    
  }


</script>

<div class="flex gap-1 flex-col justify-content items-center my-2">
    <h1>Add your todo</h1>

    <input type="text" bind:value={textvalue} class="border-2 rounded-none border-slate-900 px-4 py-2"/>
    <button class=' border-2 border-slate-900 rounded-sm px-3 py-1 bg-purple-800 text-white my-3' on:click={handleClick}>Add todo</button>
    


</div>
