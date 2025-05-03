"use strict";
//Reference Type --> Object
const user = {
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
}; //object with implicit type
const user1 = {
    companyName: "Programming Hero",
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    isMarried: false,
}; //object with explicit type
// user1.companyName = " phero";
//error: cannot assign to 'companyName' because it is a read-only property
