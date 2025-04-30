//Reference Type --> Object

const user = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
}; //object with implicit type

const user1: {
  //if we want to define readOnly property & the exact type as
  readonly companyName: "Programming Hero"; //type --> literal type
  firstName: string;
  middleName?: string; //optional property it will be string | undefined
  lastName: string;
  isMarried: boolean;
} = {
  companyName: "Programming Hero",
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
  isMarried: false,
}; //object with explicit type

// user1.companyName = " phero";
//error: cannot assign to 'companyName' because it is a read-only property
