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
    /* ex: this.products = this.products.filter(product => product.name !== productName); */

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

/*------------------------------------- */
/* Solution from Mentorrs */

/*class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Part 3
  convertToCurrency(currency) {
    switch (currency.toLowerCase()) {
      case "usd":
        this.price = this.price / 6.6;
        break;
      case "gbp":
        this.price = this.price / 8.72;
        break;
      case "sek":
        this.price = this.price / 0.71;
        break;
      default:
        break;
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

  removeProduct(product) {
    this.products = this.products.filter(
      currentProduct => currentProduct.name !== product.name
    );
  }

  searchProduct(productName) {
    // Implement functionality here
  }

  getTotal() {
    return Math.round(
      this.products.reduce((acc, cur) => (acc += cur.price), 0)
    );
  }

  renderProducts(username) {
    let productsDiv = document.getElementById("products");
    let heading = document.createElement("h1");
    heading.innerHTML = `${username}'s shopping cart`;
    productsDiv.appendChild(heading);
    let list = document.createElement("ul");

    for (let product of this.products) {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${product.name} - ${product.price} DKK`;
      list.appendChild(listItem);
    }

    productsDiv.appendChild(list);
    let total = document.createElement("p");
    total.innerHTML = `Total: ${this.getTotal()} DKK`;
    productsDiv.appendChild(total);
  }

  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(
      response => response.json()
    );
  }
}

const flatscreen = new Product("flat-screen", 5000);
flatscreen.convertToCurrency("usd");
const shoppingCart = new ShoppingCart([flatscreen]);

// Part 2
const table = new Product("Table", 2000);
table.convertToCurrency("usd");
const chair = new Product("Chair", 3000);
chair.convertToCurrency("usd");
shoppingCart.addProduct(table);
shoppingCart.addProduct(chair);
shoppingCart.removeProduct(table);
shoppingCart.getUser().then(result => {
  shoppingCart.renderProducts(result.name);
});*/
