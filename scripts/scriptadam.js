"use strict";
// class constructor
class Cart {
  constructor() {
    // array for all the items we want to buy
    this.products = [];
  }
  add() {
    // select the inputs with a type of text and store the nodelist in inputs
    const inputs = document.querySelectorAll("input[type='text']");
    // create an object from the Product class and push it into the products array
    this.products.push(new Product(inputs[0].value, inputs[1].value, inputs[2].value));
    // calls the display method
    this.display();
  }
  delete(index) {
    // remove the element with matching index from the products array
    this.products.splice(index, 1);
    // calls the display method
    this.display();
  }
  total() {
    // creates a variable to be used for keeping a running total
    let total = 0;
    // loop through the array of products
    for (let product of this.products) {
      // increments total for each product's total price (qty * price). 
      total += (product.price * product.qty);
    }
    // sets the textContent of the class total to be the value of the total variable
    document.querySelector(".total").textContent = `${total}`;
  }
  display() {
    // calls the clear method
    this.clear();
    // this is the counter that is used as the delete button's argument
    let index = 0;
    // loops through the array of products
    for (let product of this.products) {
      // creates a paragraph element for the product's name, price, and qty
      const name = document.createElement("p");
      const price = document.createElement("p");
      const qty = document.createElement("p");
      // sets the textContent of each of the newly created elements to be the values of the product's name, price, and qty
      name.textContent = `${product.name}`;
      price.textContent = `${product.price}`;
      qty.textContent = `${product.qty}`;
      // selects the classes for name__column, price__column, and qty__column and appends the paragraphs created on lines 41-43
      document.querySelector(".name__column").appendChild(name);
      document.querySelector(".price__column").appendChild(price);
      document.querySelector(".qty__column").appendChild(qty);
      // creates a section element to act as our container for our button
      const deleteBtn = document.createElement("section");
      // sets the innerHTML of the section element to contain a button. the button has an onclick attribute that will call the cart's delete method and pass in index as an argument.
      // the argument index was created on line 37 
      deleteBtn.innerHTML = `<button onclick="cart.delete(${index});" class="list__btn" type="button">X</button>`;
      // appends the deleteBtn to the class of "btn__column"
      document.querySelector(".btn__column").appendChild(deleteBtn);
      // increment index by 1
      index++;
    }
    // calls the total method
    this.total();
  }
  clearList() {
    // initializes the products array to an empty array (empties/clears it)
    this.products = [];
  }
  clear() {
    // selects the following classes: name__column, price__column, qty__column, btn__column, and total and sets the innerHTML of all of them to empty strings
    document.querySelector(".name__column").innerHTML = "";
    document.querySelector(".price__column").innerHTML = "";
    document.querySelector(".qty__column").innerHTML = "";
    document.querySelector(".btn__column").innerHTML = "";
    document.querySelector(".total").innerHTML = "";
  }
}

// class constructor
class Product {
  constructor(name, qty, price) {
    this.name = name;
    this.price = Number(price);
    this.qty = Number(qty);
  }
}

// creates a new instance of the Cart class.
const cart = new Cart();