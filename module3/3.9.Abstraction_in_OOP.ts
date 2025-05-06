{
  // Abstraction in OOP

  //interface class
  //idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car implements Vehicle {
    startEngine(): void {
      console.log("Car engine started.");
    }

    stopEngine(): void {
      console.log("Car engine stopped.");
    }

    move(): void {
      console.log("Car is moving.");
    }

    test(): void {
      console.log("Car test method.");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine(); // Car engine started.

  // abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  // real implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }

  //   const hondaCar = new Car2();
  //   hondaCar.startEngine(); // Vehicle engine started.
  //
}
