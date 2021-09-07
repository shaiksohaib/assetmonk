import React, { useState } from 'react'
import "./AddTodo.css"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();



  const handleSubmit = (e) => {
    e.preventDefault();



  };
  const PostData = async (e) => {
    e.preventDefault();

    // const {email, password } = userdata;    
    try {
      await axios
        .post(
          "https://jsonplaceholder.typicode.com/todos",
          {
            title,
            "userId": 1,
            "id": 1,
            "completed": false
          }
        )
        .then((res) => {
          console.log(res);
          // setIsingnup(true);
          console.log(res.data);
          window.alert(" Successfully added ");
          setTodo([...todo, res.data]);
          history.push("/todo");
          //   <Redirect to="/" />;
        })
        .catch((err) => {
          console.log(err);
          window.alert("Oops! something went wrong please retry ");
        });
    } catch (err) {
      window.alert(err);
    }
  };
  return (
    <div className="addtodo">
      <form className="addtodo__form" onSubmit={(e) => handleSubmit(e)} >
        <h1> Add Task Here</h1>
        <input type="hidden" name="id" placeholder="Id" />
        <input type="hidden" name="userId" placeholder="Userid" />
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit" className="addtodo__btn" onClick={PostData} >Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
