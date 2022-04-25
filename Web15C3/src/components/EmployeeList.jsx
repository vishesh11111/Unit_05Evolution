import axios from "axios";
// import e from "express";
import { Link } from "react-router-dom";
import "../App.css"
import { useEffect,useState } from "react";
// import {Link} from "react-router-dom";

export const EmployeeList = () => {
const [employe, setEmployee] = useState([]);
console.log(employe.length);
useEffect(()=>{
  axios.get(`http://localhost:8080/employee`).then((e)=>{
    setEmployee(e.data)
  });
},[]);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employe.map((e)=>
      (<Link to={`/user/${e.id}`}><div className="employee_card">
        <img className="employee_image" src={e.image}/>
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div></Link>)
      )};
    </div>
  );
};
