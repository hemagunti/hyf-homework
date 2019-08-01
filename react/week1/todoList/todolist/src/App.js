import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";
import TodoList from "./components/todoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
