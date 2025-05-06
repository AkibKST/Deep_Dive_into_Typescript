{
  //Polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  // Inheritance
  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  // Inheritance
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  // Polymorphism
  // Function that takes a Person type and calls the getSleep method
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  // Creating instances of each class
  // and passing them to the getSleepingHours function
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  // Calling the function with different types of objects
  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  //Another example of polymorphism with method overloading
  // shape class
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // circle class
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // rectangle class
  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.width * this.height;
    }
  }

  const getShapeArea = (shape: Shape) => {
    console.log(`The area of the shape is: ${shape.getArea()}`);
  };

  // Creating instances of each class
  const shape1 = new Shape();
  const shape2 = new Circle(5);
  const shape3 = new Rectangle(10, 20);

  // Calling the function with different types of objects
  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
  //
}
