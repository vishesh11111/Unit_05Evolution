import { useState } from "react";

export const Login = () => {
  //  use reqres to log user in.

  function toggleAuth() {
const [d1,setd1]= useState("")
const [d2,setd2]= useState("")

    if (isAuth==false) {
      axios
    .post("https://reqres.in/api/login", {
      email: d1,
      password: d2,
    })
    .then(function (response) {
        console.log(response.data.token);
        setIsAuth(response.data.token)
    })
    .catch(function (error) {
      console.log(error);
    });
    } else {
      setIsAuth(() => {
          return false
      })
  }
}
// return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>;


  return (
    <form className="loginform">
      <input
        name="username"
        value={"eve.holt@reqres.in"}
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={(e)=>{
          setd1(e.target.value)

        }}
      />
      <input
        name="password"
        type="text"
        value={"cityslicka"}
        placeholder="Enter password"
        className="login_password"
        onChange={(e)=>{
          setd2(e.target.value)
        }}
      />
      <input type="submit" value="SIGN IN" className="login_submit" onClick={toggleAuth}/>
    </form>
  );
};
