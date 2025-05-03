{
  //Function with generics

  //with Array
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const res2 = createArrayWithGenerics<string>("BAngladesh");

  const resGenericObj = createArrayWithGenerics<{ id: number; name: string }>({
    id: 222,
    name: "Mr. X",
  });

  //with tuple
  const createTupleWithGenerics = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res22 = createTupleWithGenerics<string, number>("Bangladesh", 54);

  const resGenericObj2 = createTupleWithGenerics<
    { id: number; name: string },
    boolean
  >(
    {
      id: 222,
      name: "Mr. X",
    },
    true
  );

  //with encapsulation course
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x.@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "Mr X",
    hasWatch: "AppleWatch",
  });
  //
}
