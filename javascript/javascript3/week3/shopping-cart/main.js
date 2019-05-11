class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency === "dollars") {
      console.log(this.price);
      return this.price * 0.15;
    }
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    let removeProduct = this.products.filter(
      product => product.name === productName
    );
    console.log(removeProduct);
    return removeProduct;
  }

  searchProduct(productName) {
    this.products.filter(
      //write something
      product => product.name === productName
    );
  }

  getTotal() {
    let totalPrice = this.products.reduce(
      (acc, product) => acc + product.price,
      0
    );
    console.log(totalPrice);
    return totalPrice;
  }

  renderProducts() {
    let app = document.getElementById("app");
    let user = document.createElement("h2");
    let heading = document.createElement("h2");
    let total = document.createElement("p");
    total.className = "totalPrice";

    heading.innerHTML = "Hey your Products";
    total.innerHTML = "Total:" + " " + "DKK" + " " + this.getTotal();
    app.appendChild(user);
    app.appendChild(heading);

    for (let product of this.products) {
      let productDiv = document.createElement("div");
      productDiv.className = "flex";
      let name = document.createElement("h3");
      let price = document.createElement("p");

      name.innerHTML = product.name;
      price.innerHTML = product.price;

      app.appendChild(productDiv);
      productDiv.appendChild(name);
      productDiv.appendChild(price);
    }
    app.appendChild(total);
  }

  getUser() {
    fetch(" https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(user => {
        console.log(user);
        console.log(user.username);
        this.renderProducts();
      });
  }
}

const flatscreen = new Product("Flat-screen", 5000);
const refrizirator = new Product("Refrizirator", 6000);
const ps4 = new Product("ps4", 2000);

const shoppingCart = new ShoppingCart([]);

//adding products
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(refrizirator);
shoppingCart.addProduct(ps4);
console.log(shoppingCart);

//remove products
shoppingCart.removeProduct(ps4.name);
console.log(shoppingCart);

//get total price for products
console.log(shoppingCart.getTotal());

//render products
//shoppingCart.renderProducts();

//calling getuser , after fetch call renderproducts method
shoppingCart.getUser();

//currency converter

console.log(flatscreen.convertToCurrency("dollars"));
