import { useContext } from 'react';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import {types} from '../store/storeReducer';
import {StoreContext} from '../store/StoreProvider'

export default function TodoList() {
  console.log(useContext(StoreContext))
  const [store, dispatch] = useContext(StoreContext)
  const {todos} = store
  const handleReset = () => {
    dispatch({type: types.todoReset})
  }
    return (
        <div>
          <h2> TODO LIST</h2>
            { todos.map((todo) => ( 
                  <Todo todo={todo} key={todo.id} /> 
          )) }
          <button onClick={handleReset}>Reset All</button>
          <TodoForm />
        </div>
    )
}