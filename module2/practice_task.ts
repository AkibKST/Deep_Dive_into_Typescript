// Tasks

/**Task 1: Basic Data Types and First Program
 * Objective: Write a TypeScript program that outputs a welcome message
 *
 * Instructions:
 * Create a TypeScript program.
 * Print the following message to the console:
 * Hello World, I will complete this course successfully and become a Next level Web Developer!
 **/

const message: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log(message);

//========================================

/**
 * Task 2: Functions, Optional, and Literal Types
Objective: Create a function with parameters and an optional literal type.

Instructions:

a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
 * 
 */
type User = {
  name: string;
  age: number;
  role?: "admin" | "user" | "guest";
};

const fn = (user: User): void => {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);

  if (user.role) {
    console.log(`role : ${user.role}`);
  } else {
    console.log("Role is not provided");
  }

  console.log("finish the program");
};
const data: User = {
  name: "Akib",
  age: 20,
  role: "admin",
};
// fn(data);

//========================================

/**
 * Task 3: Object Types, Type Alias, & Literal Types
Objective: a structured Person object using Type Aliases.

Instructions:

a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
*/

// marital status as a literal type
type MaritalStatus = "single" | "married" | "divorced";

// address as a separate type for better organization
type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

// family member type
type FamilyMember = {
  relation: string;
  name: string;
  age?: number;
};

// job information type
type Job = {
  title: string;
  company: string;
  yearsOfExperience: number;
  skillsRequired: string[];
};

type Person = {
  Name: string;
  Address: Address;
  Hair_Eye_Color: [hair: string, eye: string];
  Income_Expense: [income: number, expense: number];
  Hobbies: string[];
  Family_Members: FamilyMember[];
  Job: Job;
  Skills: Array<string>;
  Marital_Status: MaritalStatus;
  Friends: string[];
};

const student: Person = {
  Name: "John Doe",
  Address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "USA",
  },
  Hair_Eye_Color: ["blue", "brown"],
  Income_Expense: [95000, 75000],
  Hobbies: ["reading", "hiking", "photography"],
  Family_Members: [
    { relation: "spouse", name: "Jane Doe" },
    { relation: "child", name: "Baby Doe", age: 2 },
  ],
  Job: {
    title: "Software Developer",
    company: "Tech Corp",
    yearsOfExperience: 5,
    skillsRequired: ["JavaScript", "TypeScript", "React"],
  },
  Skills: ["Programming", "Problem Solving", "Teamwork"],
  Marital_Status: "married",
  Friends: ["Mike Smith", "Sarah Johnson", "David Wilson"],
};

// console.log(student);
//=================================

/**
 * Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine.
*/
