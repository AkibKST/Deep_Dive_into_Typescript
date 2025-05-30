"use strict";
{
    // Learning function
    //two type of function
    //1. Normal Function
    //2. Arrow Function (this keyword could not work in arrow function)
    // function add(num1, num2) {
    //   return num1 + num2;
    // }; //implicit function type with all any
    //Normal Function with default value of num2
    function add1(num1, num2 = 10) {
        return num1 + num2;
    } //explicit type of number
    // add1(2, '2'); // we cant call add without exact argument type
    //Arrow Function
    const addArrow = (num1, num2) => num1 + num2;
    //method = when a object have a function
    //object --> normal function --> method
    const poorUser = {
        name: "Mezba",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        },
    };
    //callback function
    const arr = [1, 4, 10];
    //increase 5 for all element of arr
    const newArr = arr.map((element) => element + 5);
}
