import { useEffect, useState } from "react";
import "../css/order.css"
// import { useDispatch, useSelector } from "react-redux";
// import { getTodos1 } from "../Redux/actions";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
  const [state, setState]= useState([]);

//   let state = useSelector((e)=>e.mytodos.todos);
//   let dispatch = useDispatch;
// console.log(state);
//   useEffect(()=>{
//     dispatch(getTodos1());
//   },[]);

function find(){
  let a = document.querySelector("progress").value;

  if(a=="id"){
    setState("");
    let newdata = [...state].sort(
      (a, b) => parseFloat((b.id)) - parseFloat((a.id))
    );
    setState(newdata);
}
};

useEffect(()=>{
getData();
},[])

const getData = async()=>{
  try {
    let data = await fetch("http://localhost:8080/orders");
    let res = await data.json();
    setState(res);
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress" onClick={find}>
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {state.map((e)=>
            <tr className="orders-row">
              <td className="id">{e.id}</td>
              <td className="problem">{e.problem}</td>
              <td className="owner">{e.owner_name}</td>
              <td className="status">{e.brand}</td>
              <td className="cost">{e.cost}</td>
              <td className="change-status">
              
                 {e.status}
                <select className="changeStatus" name="changeStatus">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                <button>Accept</button>
              </td>
            </tr>
            )};
          </tbody>
        </table>
      </div>
    </div>
  );
};
