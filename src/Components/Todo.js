import React, { Component } from 'react'
import axios from "axios"
import Dashboard from './Dashboard';
import "./Todo.css"
import { Link } from 'react-router-dom';
// import { Redirect,useHistory  } from "react-router-dom";

class Todo extends Component {

  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({ todos: result.data })
    // console.log(result.data.find(id))
  }


  // const [title, setTitle] = useState("");
  render() {

    const PostData = async (e) => {
      // e.preventDefault();
      console.log(e);
      const id = e;
      try {
        await axios
          .put(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
              "completed": true
            }
          )
          .then((res) => {
            console.log(res);

            console.log(res.data);


          })

          .catch((err) => {
            window.alert("Oops! something went wrong please retry ");
          });
      } catch (err) {
        window.alert(err);
      }
    };

    return (

      <div className="todo">
        <Dashboard />
        <Link to="/addtodo">
          <button className="Addtask__btn"> Add Task here </button>
        </Link>

        {this.state.todos.length > 0 ? (
          <div>
            <ul className="list-group">
              {this.state.todos.map(todo => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">
                  {todo.title}
                  <span className="">
                    <input type="checkbox" checked={todo.completed} onChange={() => onclick = PostData(todo.id)}>
                    </input>

                  </span>
                </li>

              ))}
            </ul>
          </div>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
  }

}

export default Todo;
