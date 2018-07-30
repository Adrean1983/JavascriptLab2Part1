"use strict";
class AddressBook {
    constructor() {
        this.contacts = []; 
    }
    add() {
        const inputs = document.querySelectorAll("input[type='text']");
        this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value));
        this.display();
    }
    delete(index) {
        this.contacts.splice(index, 1);
        this.display();
    }
    display() {
        this.clear();
        let index = 0;
        for (let contact of this.contacts) {
            const contactbox = document.createElement("section");
            contactbox.className = "contactbox";
            document.querySelector(".container2").appendChild(contactbox);
            const name = document.createElement("p");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const relation = document.createElement("p");
            const trash = document.createElement("section");
            trash.className = "trashcontainer";
            name.textContent = `Name: ${contact.name}`;
            email.textContent = `Email: ${contact.email}`;
            phone.textContent = `Phone: ${contact.phone}`;
            relation.textContent = `Relation: ${contact.relation}`;
            contactbox.appendChild(name);
            contactbox.appendChild(email);
            contactbox.appendChild(phone);
            contactbox.appendChild(relation);
            contactbox.appendChild(trash);
            trash.innerHTML = `<img onclick="book.delete(${index});" src="images/bin1.png"></img>`;
            index++;
        }
    }
    clearList() {
        this.contacts = [];
    }
    clear() {
        var container2 = document.querySelector(".container2")
        while (container2.firstChild) {
            container2.removeChild(container2.firstChild);
        }
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


