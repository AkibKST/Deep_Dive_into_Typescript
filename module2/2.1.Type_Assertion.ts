{
  //Type assertion

  let anything: any;

  anything = "Next Level";
  anything = 222;

  // (anything as string). as i say
  // (anything as number). if i know that is number

  const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(100) as number;
  const result2 = kgToGm("100") as string;

  //when i sure the return type
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
