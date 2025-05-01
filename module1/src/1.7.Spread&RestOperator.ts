{
  //spread operator
  //rest operator
  //destructuring

  //learn spread operator
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];

  //here we can not direct push a Array into bros1
  //but when we use spread, we can push
  bros1.push(...bros2);

  const mentor1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentor2 = {
    prisma: "Fahim",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  //we can use spread operator for create all mentor list
  const mentorList = {
    ...mentor1,
    ...mentor2,
  };

  //--------------------------------------

  //learn rest operator
  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  };

  //handle with rest operator
  const greetFriends1 = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
}
