// action types
export const Add_Todo = "ADD_TODO"





// Action Creators
// export const getTodos =()=> async (dispatch)=>{
//     let data =await fetch(`http://localhost:8080/users`);
//     let res = await data.json();
//    dispatch(addTodo(res));
//   }

export const addTodo = (data)=>({
  type : Add_Todo,
  payload : data,
})
  
  export const getTodos1 =()=> async (dispatch)=>{
    let data =await fetch(`http://localhost:8080/orders`);
    let res = await data.json();
    dispatch(addTodo(res));
  }

