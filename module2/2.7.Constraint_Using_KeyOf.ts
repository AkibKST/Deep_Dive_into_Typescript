{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type OWner2 = keyof Vehicle; // using key of

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr person",
    age: 23,
    address: "ctg",
  };

  const result = getPropertyValue(user, "name");

  //   const user = {
  //     name: "Mr person",
  //     age: 23,
  //     address: "ctg",
  //   };

  //   user["name"];
  //
}
