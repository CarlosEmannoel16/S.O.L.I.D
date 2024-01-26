// Esse princípio afirma que os objetos de uma classe base devem ser substituíveis por
// Objetos de suas classes derivadas sem afetar a corretude do programa.
// Em outras palavras, se uma classe base é esperada em um determinado contexto,
// Suas subclasses devem poder substituir a classe base sem causar problemas.

class Movie {
  play(): void {
    console.log("Playing movie");
  }

  increaseVolume(): void {
    console.log("Increasing volume");
  }
}

class TheLionKing extends Movie {
  name: string;
  category: string;
}

class ModernsTimes extends Movie {
  name: string;
  category: string;

  constructor() {
    super();
    //Errado
    this.increaseVolume();
  }
}

///////////////////////////////////////////////

///Correto
let movie: Movie = new TheLionKing();
movie.play();
movie.increaseVolume();

class MovieWithoutIncreaseVolume {
  play(): void {
    console.log("Playing movie");
  }
}

class ModernsTimes2 extends MovieWithoutIncreaseVolume {}

class TheLionKing2 extends Movie {
  constructor() {
    super();
  }
}
