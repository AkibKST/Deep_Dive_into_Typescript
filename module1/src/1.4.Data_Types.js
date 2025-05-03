"use strict";
//Basic Data Type
//string
let firstName = "mezbaul"; //implicit string type
let lastName = "hasan"; //explicit string type
//number
let roll = 123; //implicit number type
let age = 23; //explicit number type
//boolean
let isActive = true; //implicit boolean type
//undefined
let x = undefined; //explicit undefined type
//null
let y = null; //explicit null type
//any
//implicit any type
//  {
let d;
d = 123;
d = "mezba";
d = true; //any type can be anything
//  }
//explicit any type
let a;
a = 123;
a = 123.45; //number type can be integer or float
a = 123.45e-2; //number type can be exponential
//Array
let friends = ["mezba", "hasan", "khan"]; //explicit array type
let eligibleRoleList = [1, 2, 3]; //explicit array type
friends.push("you cant push without type of string"); //you can push with variable type
eligibleRoleList.push(4); //you can push with variable type
//Tuple --> Tuple is a special type of array that can have different types of elements.
//array --> order --> type of values
let coordinates = [12, 56];
let ageNameMarrageStatus = [23, "mezba", true]; //tuple type
// ageNameMarrageStatus[0]= true;  //you can not push with variable type
ageNameMarrageStatus[0] = 23; //you can push with variable type
