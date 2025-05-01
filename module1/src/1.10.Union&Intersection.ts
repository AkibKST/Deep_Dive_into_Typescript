{
  //union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; //string literal union type
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper"; //string literal union type

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "fakibazDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+" | "B+" | "A-" | "AB-";
  };

  const user1: User = {
    name: "Persian",
    email: "mezba@ph.com",
    gender: "male",
    bloodGroup: "O+",
  };

  //intersection types

  type Frontend_Developer = {
    skills: string[];
    designation2: "Frontend Developer";
  };

  type Backend_Developer = {
    skills: string[];
    designation1: "Backend Developer";
  };

  type Full_Stack_Developer = Frontend_Developer & Backend_Developer;

  const fullstackDeveloper: Full_Stack_Developer = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Backend Developer",
    designation2: "Frontend Developer",
  };
}
