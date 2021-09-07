import Login from "./Components/Login"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

import Album from "./Components/Album";
import Post from "./Components/Post";
import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";



function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/album" exact component={Album} />
          <Route path="/post" exact component={Post} />
          <Route path="/addtodo" exact component={AddTodo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
