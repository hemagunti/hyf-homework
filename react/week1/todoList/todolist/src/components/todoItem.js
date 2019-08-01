import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    return (
      <div>
        {this.props.desc}
        {this.props.deadLine}
      </div>
    );
  }
}
export default Todoitem;
