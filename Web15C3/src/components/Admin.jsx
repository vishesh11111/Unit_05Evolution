import { useState } from "react";
export const Admin = () => {
  const [text1 ,setText1] = useState("");
  const [text2 ,setText2] = useState("");
  const [text3 ,setText3] = useState("");
  const [text4 ,setText4] = useState(0);
  const [text5 ,setText5] = useState("");
  const [text6 ,setText6] = useState("");
  const [text7 ,setText7] = useState("");
  const [text8 ,setText8] = useState("");
  const [text9 ,setText9] = useState("");
  const [text10 ,setText10] = useState("");


  function fun(){
    let a = document.getElementsByClassName("s1").value;
    setText3(a);
  }
  function fun1(){
    let a = document.getElementsByClassName("s2").value;
    setText9(a);
  }
  function fun2(){
    let a = document.getElementsByClassName("s3").value;
    setText10(a);
  }

  return (
    <form className="createEmployee">
      <input type="text" placeholder="Employee Name" name="employee_name" onChange={(e) => {
            setText1(e.target.value);

        }}/>
      <input type="text" placeholder="Employee id" name="employee_id" onChange={(e) => {
            setText2(e.target.value);

        }}/>
      <select name="title" className="s1" onClick={fun}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number"  placeholder="Salary" name="salary" onChange={(e) => {
            setText4(e.target.value);

        }}/>
      <input type="text" placeholder="Image" name="image" onChange={(e) => {
            setText5(e.target.value);

        }}/>
      <input type="text" placeholder="User Name" name="username" onChange={(e) => {
            setText6(e.target.value);

        }}/>
      <input type="password" placeholder="Password" name="password" onChange={(e) => {
            setText7(e.target.value);

        }}/>
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={(e) => {
          setText8(e.target.value);

      }}
      />
      <select name="status" className="s2" id="status" onClick={fun1}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" className="s3" id="team" onClick={fun2}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"}
      onClick={()=>{
        const payload = {
          "id": 1,
    employee_name: text1,
    employee_id: text2,
    title: text3,
    salary: text4,
    image: text5,
    username: text6,
    password: text7,
    tasks: [
      text8
    ],
    status: text9,
    team: text10
      };
      fetch("http://localhost:8080/employee",{
          method : "POST",
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(payload)
      })
      }}
      />
    </form>
  );
};
