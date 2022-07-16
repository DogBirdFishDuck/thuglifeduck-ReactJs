import React, { useEffect, useState } from 'react';
import { ApiServices } from '../services/ApiServices';

const TodoList = () => {
  let [state, setState] = useState({
    loading: false,
    todo: "",
    errMessage: "",
  })

  let todoHandle = (event) => {
    setState({
      ...state,
      todo: event.target.value,
    })
  };

  let submitHandle = async (event) => {
    // event.preventDefault();
    try {
      const pay = {
        data: {
          todo: state.todo
        }
      }
      const res = await ApiServices.createTodo(pay);
      console.log(res?.data?.error?.message)
      console.log("res")
    } catch (error) {
      console.log(error)
      console.log("error")

    }
  };

  let { todo } = state;

  return (
    <div>
      <form onSubmit={submitHandle}>
        <label htmlFor="todoInput">Todo : </label>
        <input type="text" className='border p-1' onChange={todoHandle} name='todoInput' value={todo} />
        <button type='submit' className='border p-1 bg-slate-600 text-white rounded-lg'>Submit</button>
      </form>
    </div>
  );
}

export default TodoList;