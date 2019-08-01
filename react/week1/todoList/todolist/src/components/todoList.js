import React, { Component } from "react";
import Todoitem from "./todoItem";

class TodoList extends Component {
  render() {
    const todos = [
      {
        desc: "Get out of bed, ",
        deadLine: "Wed Sep 13 2017"
      },
      {
        desc: "Brush teeth, ",
        deadLine: "Thu Sep 14 2017"
      },
      {
        desc: "Eat breakfast, ",
        deadLine: "Fri Sep 15 2017"
      }
    ];
    return todos.map(todoItem => (
      <Todoitem desc={todoItem.desc} deadLine={todoItem.deadLine} />
    ));
  }
}
export default TodoList;
