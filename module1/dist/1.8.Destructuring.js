"use strict";
{
    //destructuring
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
    const { contactNo } = user;
    console.log(contactNo);
}
