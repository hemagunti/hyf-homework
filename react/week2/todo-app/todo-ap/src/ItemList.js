import React from "react";

import "./styles.css";

class ItemList extends React.Component {
  /*  deleteHandler = e => {
    //console.log(e.currentTarget.tagName);
    this.props.deleteItem(e);
  }; */
  render() {
    const { items, deleteItem, toggleDone } = this.props;
    //const itemStyleClass = item.done ? "item--checked" : "";
    return (
      <ul className="eachItemContainer">
        {items.length > 0
          ? items.map(item => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleDone(item.id)}
                />
                <span className={item.done ? "item--checked" : ""}>
                  {item.text}
                </span>

                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))
          : "Empty please add some items"}
      </ul>
    );
  }
}
export default ItemList;
