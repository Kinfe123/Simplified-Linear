import { writable } from "svelte/store";

export const name = writable("Svelte")

interface todosType {
  text: string,
  completed:boolean,
  id:string
  

}


export const todos = writable<todosType[]>([]) 
interface todolists {
  lists : todosType[]
} 
export const addTodo = (todo:string) => {

  todos.update((prevTodo:any)=> {
    const toBeAdded = {todo , completed: false , id:Date.now()}
    const newTodo =[...prevTodo , toBeAdded]
    return newTodo;
  })

}

export const deleteTodo = (id:string) => {
  todos.update((prevTodo)=> {
    const newTodo = prevTodo.filter(todo => todo.id != id)
    return newTodo
  })
}

export const toogleCompleted = (id:string) => {
  todos.update((prevTodo) => {
    let indx = -1
    for(let i=0; i<prevTodo.length; i++) {
      if(id === prevTodo[i].id){
        indx = i
        break
      }
    }
  if(indx !== -1) {
      prevTodo[indx].completed = !prevTodo[indx].completed;
    }
  return prevTodo

  })
  

}
