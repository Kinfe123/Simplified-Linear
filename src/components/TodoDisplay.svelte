<script>
   import { deleteTodo, todos, toogleCompleted } from "../store/todoStore";
//    /**
// 	 * @type {{ todo: string; email: string; completed: any; id: any; }}
// 	 */
    export let data
//    console.log('From rpops: ' , data)

   const handleComplete = (id) => {
    toogleCompleted(id)
    // console.log("THe event is : " , id )
   }
   const handleDelete = (id) => {
    deleteTodo(id)
   }

</script>

<div class='flex flex-col justify-center items-center my-2 w-full'>
    <div class="w-2/4 h-24 border-2 border-slate-900  p-2 ">
        <h3>{data.todo}</h3>
        <!-- <a href="/lists">check</a> -->
        <p class="text-sm font-bold my-1 ">{data.email.slice(0 , data.email.indexOf("@"))}</p>
        <div class="flex justify-between items-cnter">
            <div>
                {#if data.completed}
                <button class="border-2 border-slate-900 bg-slate-300 px-1" disabled>completed</button>
                {:else}    
                <button class="border-2 border-slate-900 bg-green-300 px-1" on:click={() => handleComplete(data.id)}>complete</button>
                    
                {/if}

            </div>
            <div class="mx-1">
                <button class="border-2 border-slate-900 bg-red-800 px-1 text-white" on:click={() => handleDelete(data.id)}>Delete</button>
            </div>


        </div>

    </div>
    

</div>