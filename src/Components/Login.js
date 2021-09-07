import React, {useState} from "react";
import "./Login.css"
import {login} from "../features/userSlice"
import { useDispatch } from "react-redux";
import axios from "axios"
import { Redirect,useHistory  } from "react-router-dom";
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch =useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(login({
            email:email,
            password:password,
            loggedIn: true,
        })
        );
    };

    const PostData = async (e) => {
        e.preventDefault();
       
        // const {email, password } = userdata;    
        try {
          await axios
            .post(
              "https://reqres.in/api/login",
              {
                email,
                password
              }
            )
            .then((res) => {
              console.log(res);
              console.log(res.data);
              window.alert(" Successful Login ");
              history.push("/");
              
             
            })
            .catch((err) => {
              window.alert("Oops! something went wrong please retry ");
            });
        } catch (err) {
          window.alert(err);
        }
      };
    
    return (
        <div className ="login">
        <form className="login__form" onSubmit={(e) => handleSubmit(e)}   >
        <h1> Login Here 🚪</h1>
        <input type = "email" name ="email" placeholder ="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
        <input type = "password" name  = "password" placeholder ="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
        <button type = "submit" className ="submit__btn" onClick = {PostData}  >Submit</button>   
        
        </form>
        </div>
    );


};
export default Login;