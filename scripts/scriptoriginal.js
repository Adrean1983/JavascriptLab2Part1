"use strict";
class AddressBook {
    constructor() {
        this.contacts = []; 
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    printList() {
        for (let i = 0; i < this.contacts.length; i++ ) {
            console.log(this.contacts[i]);
        }
    }
    deleteByName(name) {
        for (let i = 0; i < this.contacts.length ; i++) {
            const currentContact = this.contacts[i];
            if (name.toLowerCase() === currentContact.name.toLowerCase()) {
                this.deleteAt(i);
            }
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
    while(true) {
        let answer = prompt("Add, Remove, Delete, Print or Quit");
        answer = answer.toLowerCase();
        if (answer === "add") {
            book.add(new Contact(this.name = prompt("Name?"), this.email = prompt("Email?"), this.phone = prompt("Phone?"), this.relation = prompt("Relation?")));
        } else if (answer === "remove") {
            book.deleteAt(prompt("Index to Delete?"));
        } else if (answer === "print") { 
            book.printList();
        } else if (answer === "delete") {
            book.deleteByName(prompt("Name?"));
        } else if (answer === "quit")  {
            console.log("Farewell");
            break;
        } else {
            alert("That's not a valid response.");
            continue;
        }    
    }
