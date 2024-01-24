class Movie {
  public increaseVolume() {}

  public play() {
    // play no video
  }
}


// Correto pois o filme tem som e pode usar o método increaseVolume
class CaptainAmerican extends Movie {
  constructor() {
    super();
  }
}

// Errado pois o filme não tem som e não pode usar o método increaseVolume
// logo não deveria herdar de Movie e fere o princípio de Liskov
class ModernsTimes extends Movie {
  constructor() {
    super();
  }
}

const movie = new CaptainAmerican();
