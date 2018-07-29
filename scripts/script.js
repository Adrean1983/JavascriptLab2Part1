"use strict";
class AddressBook {
    constructor() {
        this.contacts = []; 
    }
    add() {
        const inputs = document.querySelectorAll("input[type='text']");
        this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, inputs[2].value));
        this.display();
    }
    delete(index) {
        this.contacts.splice(index, 1);
        this.display();
    }
    total() {
        // creates a variable to be used for keeping a running total
        let total = 0;
        // loop through the array of products
        for (let contact of this.contacts) {
          // increments total for each product's total price (qty * price). 
          total += (contact.price * contact.qty);
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
        for (let contact of this.contacts) {
          // creates a paragraph element for the product's name, price, and qty


          const name = document.createElement("p");
          const email = document.createElement("p");
          const phone = document.createElement("p");
          const relation = document.createElement("p");

          
          // sets the textContent of each of the newly created elements to be the values of the product's name, price, and qty
          
          
          name.textContent = `Name: ${contact.name}`;
          email.textContent = `Email: ${contact.email}`;
          phone.textContent = `Phone: ${contact.phone}`;
          relation.textContent = `Relation: ${contact.relation}`;
          
          
          // selects the classes for name__column, price__column, and qty__column and appends the paragraphs created on lines 41-43
          document.querySelector("#contactbox").appendChild(name);
          document.querySelector("#contactbox").appendChild(email);
          document.querySelector("#contactbox").appendChild(phone);
          document.querySelector("#contactbox").appendChild(relation);

          
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
        this.contacts = [];
      }
      clear() {
        // selects the following classes: name__column, price__column, qty__column, btn__column, and total and sets the innerHTML of all of them to empty strings
        document.querySelector(".name").innerHTML = "";
        document.querySelector(".email").innerHTML = "";
        document.querySelector(".phone").innerHTML = "";
        document.querySelector(".relation").innerHTML = "";
      }
    }

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone; 
        this.relation = relation;
    }
}
const book = new AddressBook();


