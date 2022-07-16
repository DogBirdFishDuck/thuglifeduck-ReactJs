import React, { useEffect, useState } from 'react';
import { ApiServices } from '../services/ApiServices';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  let [state, setState] = useState<{ loading: boolean, todos: { id: number, attributes : {todo:string}}[],errMessage:string}>(
    {
      loading: false,
      todos: [],
      errMessage: ""
    }
  );
  useEffect(() => {
    try {
      setState({ ...state, loading: true });
      let fetchData = async () => {
        const res = await ApiServices.getAllTodo();
        const data = res.data.data;
        setState({ ...state, todos:data, loading: false });
      };
      fetchData();
    } catch (error) {
      setState({ ...state, loading: false, errMessage:'failed ' });
    }
  }, []);
  let {todos} = state;
  return (
    <div className='my-4'>
      <h2 className='text-2xl my-4'>
        Todo List
      </h2>
      <AddTodoForm />
      <ul className='my-4'>
        {
          todos.map((todo) => (
            <li className='' key={todo.id}>- {todo.attributes.todo} </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;