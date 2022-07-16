import axios from "axios";

export class ApiServices {
  static url = `http://localhost:1337`;

  static getAllTodo(){
    // interface Todo 

    let todoUrl = this.url+"/api/test-todos";

    return axios.get(todoUrl);
  }
  static createTodo(todo: String){
    // interface Todo 

    const pay = {
      data: {
        todo: todo
      }
    }
    let todoUrl = this.url+"/api/test-todos";

    return axios.post(todoUrl, pay);
  }
}