"use strict";
{
    //destructuring
    //object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastname: "Persian",
        },
        contactNo: "0217777777",
        address: "Uganda",
    };
    const { contactNo, name: { middleName }, } = user;
    //array destructuring
    const myFriends = ["chander", "jony", "Ross", "Russy"];
    const [a, b, bestFriend, ...rest] = myFriends; //skip index 0, 1 and target index 2[Ross] next elements keep in rest
}
