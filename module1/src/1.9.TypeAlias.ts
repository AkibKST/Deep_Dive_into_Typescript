{
  //Type Alias

  //define exact type of student
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string; //optional property
    address: string;
  };

  //create student object with own type
  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "01433333",
    address: "ctg",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "kst",
  };

  //we can define which type of data we need
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  //Type alias for function
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
