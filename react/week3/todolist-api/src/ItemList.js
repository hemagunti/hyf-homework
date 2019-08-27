import React from "react";

import "./styles.css";

class ItemList extends React.Component {
    /*  deleteHandler = e => {
      //console.log(e.currentTarget.tagName);
      this.props.deleteItem(e);
    }; */
    render() {
        const { items, deleteItem, toggleDone, editItem } = this.props;
        //const itemStyleClass = item.done ? "item--checked" : "";
        return (
            <ul className="eachItemContainer">
                {items.length > 0
                    ? items.map(item => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleDone(item.id)}
                            />
                            <span className={item.completed ? "item--checked" : ""}>
                                {item.description}
                            </span>
                            <span className={item.completed ? "item--checked" : ""}>
                                {item.deadline}
                            </span>

                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                            <button onClick={() => editItem(item.id)}>Edit</button>
                        </li>
                    ))
                    : "Empty please add some items"}
            </ul>
        );
    }
}
export default ItemList;
