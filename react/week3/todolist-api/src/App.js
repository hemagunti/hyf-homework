import React from "react";
import "./index.css";
import Header from "./Header";
import ItemList from "./ItemList";

function getTodos() {
  return fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
    .then(response => response.json())
}
/*getTodos().then((res) => {
  console.log(res);
});*/

class App extends React.Component {
  state = {
    items: []
  };
  idCounter = this.state.items.length + 1;

  addItem = newitemText => {
    // const lastItemid = this.state.items[this.state.items.length - 1].id; //this.state.items[2-1].id = this.state.items[1].id =2
    const newItem = { id: this.idCounter, text: newitemText };
    this.idCounter += 1;
    const newItems = this.state.items.concat(newItem);
    console.log(newItems);
    this.setState({ items: newItems });
  };
  deleteItem = id => {
    const newList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newList });
  };
  editItem = id => {

  }
  toggleDone = id => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else return item;
    });
    this.setState({ items: newItems });
  };
  componentDidMount() {
    console.log("compoennt did mount");
    getTodos().then((data) =>
      this.setState({ items: data }));
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    console.log("render");
    const { items } = this.state;
    return (
      <div className="appContainer">
        To do List
        <Header addItem={this.addItem} />
        <ItemList
          items={items}
          deleteItem={this.deleteItem}
          toggleDone={this.toggleDone}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

export default App;

