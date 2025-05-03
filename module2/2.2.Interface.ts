{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  //extend a part of object    (role)    with type
  type UserWithRole1 = User1 & { role: string };

  //extend a part of object    (role)    with interface
  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Persian",
    age: 100,
    role: "manager",
  };

  type rollNumber = number;

  // js --> object , array-> object function -> object

  type Roll1 = number[];

  //declear a array of number interface
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];
  // 0 1 2 --> number type

  type Add1 = (num1: number, num2: number) => number;

  //function with interface

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
