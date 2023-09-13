import { writable } from 'svelte/store';
import { supabase } from '../supabase/supabase';
export const name = writable('Svelte');

interface todosType {
	text: string;
	completed: boolean;
	id: string;
}
export const todos = writable<todosType[]>([]);
interface todolists {
	lists: todosType[];
}

export const loadDbs = async () => {
	const { data, error } = await supabase.from('todos').select('*');
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	todos.set(data!);
	// console.log('THe data from load: ' , data)
};

export const addTodo = async (userid: string, email: string , todo: string) => {
  
	// This is the implementation for pure store

	// todos.update((prevTodo:any)=> {
	//   const toBeAdded = {todo , completed: false , id:Date.now()}
	//   const newTodo =[...prevTodo , toBeAdded]
	//   return newTodo;
	// })
	const {data, error } = await supabase.from('todos').insert({
		user_id: userid,
		todo: todo,
    email: email,
		completed: false
	}).select('*');
 
  todos.update((prevTodo: any)=> {
    const newTodo = [...prevTodo , data]
    return newTodo
  })
};

export const deleteTodo = (id: string) => {
	todos.update((prevTodo) => {
		const newTodo = prevTodo.filter((todo) => todo.id != id);
		return newTodo;
	});
};

export const toogleCompleted = (id: string) => {
	todos.update((prevTodo) => {
		let indx = -1;
		for (let i = 0; i < prevTodo.length; i++) {
			if (id === prevTodo[i].id) {
				indx = i;
				break;
			}
		}
		if (indx !== -1) {
			prevTodo[indx].completed = !prevTodo[indx].completed;
		}
		return prevTodo;
	});
};
