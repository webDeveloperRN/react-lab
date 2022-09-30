import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

//recuperamos de local storage los todos
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [ todos, dispatch] = useReducer( todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos])
    

    //Envia el todo al reducer usando el dispatch
    const hendleNewTodo = ( todo  ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
    

    return {
        todos,
        hendleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
    }
}
