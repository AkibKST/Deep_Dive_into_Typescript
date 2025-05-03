{
  // interface - generic

  //create developer interface with 2 generics
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  //type of poor developer smart watch
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  //create poor developer object with developer interface and send into a param like generic type
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Persian",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  // create rich developer smart watch interface
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  //create bike interface for rich developer
  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  //create rich developer object with generics(like AppleWatch, YamahaNike)
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
