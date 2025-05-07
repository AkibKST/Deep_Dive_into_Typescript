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

//Book interface
interface Book {
  title: string;
  author: string;
  pages: number;
  isbn: string;
  publisher?: string;
}

//Magazine interface
interface Magazine {
  title: string;
  issue: number;
  publicationDate: Date;
  publisher?: string;
}

// Create a union type (can be either Book or Magazine)
type Publication = Book | Magazine;

// Create an intersection type (must have properties of both Book and Magazine)
// Note: This would only make sense for objects that are both books and magazines
type BookMagazineCombo = Book & Magazine;

// Example usage:

// A publication that is a Book
const myBook: Publication = {
  title: "TypeScript Deep Dive",
  author: "Basarat Ali Syed",
  pages: 200,
  isbn: "1234567890",
};

// A publication that is a Magazine
const myMagazine: Publication = {
  title: "Tech Today",
  issue: 42,
  publicationDate: new Date("2023-05-01"),
};

// An object that is both Book and Magazine
//(unlikely in real world, but demonstrates the intersection)
const rareCombo: BookMagazineCombo = {
  title: "Hybrid Publication",
  author: "Jane Doe",
  pages: 100,
  isbn: "0987654321",
  issue: 1,
  publicationDate: new Date("2023-01-01"),
};

/**
 * Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh"
*/

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

//str.split("")
reverseString("hello"); // ["h", "e", "l", "l", "o"]

//str.split("").reverse()
//console.log(reverseString("hello")); ["o", "l", "l", "e", "h"]

//str.split("").reverse().join("")
//console.log(reverseString("hello")); // "olleh"

//=================================

/**
 * Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

*/
// Using the rest operator to accept multiple arguments
// The function takes a variable number of arguments and returns their sum
const sumOfNumber = (...number: number[]): number => {
  return number.reduce((total, numb) => total + numb, 0); // 0 is the initial value of total
};

const numOfArray = [1, 7, 8, 2, 3, 5];

// Using the spread operator to pass the array elements as individual arguments
const sum = sumOfNumber(...numOfArray);
// console.log(sum);
//=================================

/**
 *Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number.
 */

const findInputType = (input: string | number): number => {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input * input;
  }
};

// Example usage:
const stringInput = "TypeScript";
const numberInput = 12;

// console.log(findInputType(stringInput)); // Output: 18 (length of the string)
// console.log(findInputType(numberInput)); // Output: 25 (square of the number)

//=================================

/**
 *
 *Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
 */
{
  //
  interface User {
    name: string;
    email: string;
  }

  interface Admin {
    adminLevel: number;
  }

  // Intersection type
  type AdminUser = User & Admin;

  // Function to describe the admin user
  const describeAdmin = (user: AdminUser): string => {
    return `Admin Name: ${user.name}, Email: ${user.email}, Admin Level: ${user.adminLevel}`;
  };

  // Example usage
  const adminUser: AdminUser = {
    name: "Alice",
    email: "admin@gmail.com",
    adminLevel: 1,
  };

  // console.log(describeAdmin(adminUser));
  //
}

/**
 * Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
 * */
{
  //

  interface Employee {
    name: string;
    address?: {
      city?: string;
      state?: string;
    };
  }

  const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee.address?.city; // Using optional chaining to safely access the city property
  };

  // Example usage
  const employee1: Employee = {
    name: "John",
    address: {
      city: "New York",
      state: "NY",
    },
  };

  const employee2: Employee = {
    name: "Jane",
  };

  // console.log(getEmployeeCity(employee1)); // Output: "New York"
  // console.log(getEmployeeCity(employee2)); // Output: undefined (no address property)
  //
}

/**
 * Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
*/

{
  //
  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous"; // Using nullish coalescing to provide a default value
  };

  // Example usage
  const name1: string | null = "Alice";
  const name2: string | null = null;
  const name3: string | null | undefined = undefined;

  // console.log(getDisplayName(name1)); // Output: "Alice"
  // console.log(getDisplayName(name2)); // Output: "Anonymous"
  // console.log(getDisplayName(name3)); // Output: "Anonymous"

  //
}

/**
 * Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercase version.
If data is a number, returns the square of it.
*/

const processData = (data: unknown): string | number => {
  if (typeof data === "string") {
    return data.toUpperCase(); // Convert string to uppercase
  } else if (typeof data === "number") {
    return data * data; // Return the square of the number
  } else {
    return "Unsupported data type! "; // Handle other types
  }
};

// Example usage
const stringData: unknown = "hello";
const numberData: unknown = 5;
const booleanData: unknown = true;
const arrayData: unknown = [1, 2, 3];
const objectData: unknown = { name: "John" };

// console.log(processData(arrayData));

//==================================

/**
 * Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns.
*/

const handleError = (message: string): never => {
  throw new Error(message); // Throw an error with the given message
};

// Example usage:
const processUserInput = (input: string) => {
  if (input.trim() === "") {
    handleError("Input cannot be empty");
  }
  //if input is not empty
  return `input: ${input}`;
};

// console.log(processUserInput("Hello"));
// console.log(handleError("Not Found")); // This will throw an error and stop execution
//==================================

/**
 * Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed.
*/

const removeDuplicateData = <T>(array: T[]): T[] => {
  return [...new Set(array)]; // Using Set to remove duplicates and converting it back to an array
};

// Example usage:
const numberArray = [1, 2, 3, 4, 5, 1, 2, 3];
const stringArray = ["apple", "banana", "apple", "orange"];
const mixedArray = [1, "apple", 2, "banana", 1, "apple"];
const booleanArray = [true, false, true, false, true];

// console.log(removeDuplicateData(booleanArray));
//===================================

/**
 * Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay.

*/

// Define type alias for User data
type UserData = {
  name: string;
  age: number;
};

// Simulate fetching user data asynchronously
async function fetchUserData(): Promise<UserData> {
  // Simulate network delay with setTimeout
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return mock user data
  return {
    name: "John Doe",
    age: 30,
  };
}

// Example usage with proper error handling
async function displayUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log(`User Name: ${userData.name}`);
    console.log(`User Age: ${userData.age}`);
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
}

// Execute the example
// displayUserData();
//===================================

/**
 * Task 15: Type Guards
Objective: Create custom type guards for more accurate type checking.

Instructions:

Write a function isString(value: unknown): value is string that checks if a value is a string.
Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
 * */

const isString = (input: unknown): input is string => {
  return typeof input === "string"; // Check if the input is a string
};

const printUpperCase = (input: unknown): void => {
  if (isString(input)) {
    console.log(input.toUpperCase()); // Print the string in uppercase
  } else {
    console.log("Not a string!"); // Handle non-string input
  }
};

// Example usage
// printUpperCase("akib welcome to your income life");
//===========================

/**
 * 
 * Task 16: Utility Types and Keyof Constraints
Objective: Access object properties dynamically using keyof.

Instructions:

Create a function that:
Takes an object and a key.
Returns the property value from the object based on the provided key.
Use keyof to constrain the key to valid properties of the object.
*/

type PersonInfo = {
  name: string;
  age: number;
  email: string;
};

const getPropertyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]; // Access the property value using the key
};

// Example usage
const person: PersonInfo = {
  name: "John Doe",
  age: 30,
  email: "person@gmail.com",
};

// console.log(getPropertyValue(person, "name"));

//=========================

//                       HAPPY CODING
//===================================
