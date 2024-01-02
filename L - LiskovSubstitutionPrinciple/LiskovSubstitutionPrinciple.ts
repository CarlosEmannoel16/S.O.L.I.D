// Esse princípio afirma que os objetos de uma classe base devem ser substituíveis por
// Objetos de suas classes derivadas sem afetar a corretude do programa.
// Em outras palavras, se uma classe base é esperada em um determinado contexto,
// Suas subclasses devem poder substituir a classe base sem causar problemas.

interface Movie {
  play(): void;
}

interface AudioControl {
  
  increaseVolume(): void;
}

class CaptainAmerican implements Movie, AudioControl {

  name: string;
  category: string;

  constructor() {}

  public increaseVolume(): void {
    throw new Error("Method not implemented.");
  }

  play(): void {}
}

class ModernsTimes implements Movie {

  name: string;
  category: string;

  play(): void {
    throw new Error("Method not implemented.");
  }
}
