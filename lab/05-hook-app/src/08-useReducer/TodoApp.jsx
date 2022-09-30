import { useTodos } from '../hooks';
import { TodoList, TodoAdd } from './components';



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, hendleNewTodo } = useTodos();    

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodosCount } </small></h1>
            <hr />
            <div className='row'>
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        //onDeleteTodo={ id => handleDeleteTodo( id) } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        //onNewTodo={ todo => hendleNewTodo( todo ) } 
                        onNewTodo={ hendleNewTodo }
                    />
                </div>
            </div>
        </>
    )
}
