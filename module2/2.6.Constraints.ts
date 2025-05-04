{
  //Constraints in Typescript

  // T te jei type ta asbe seita te obosshoi id, name & email thaktei hbe... eke amra constraint boli
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  // const student3 = addCourseToStudent({ emni: "emni" });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr X",
    email: "x.@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 323,
    name: "Mr. Y",
    email: "Mr X",
    hasWatch: "AppleWatch",
  });
  //
}
