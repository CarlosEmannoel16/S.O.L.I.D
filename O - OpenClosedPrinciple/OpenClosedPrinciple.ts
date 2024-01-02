// Uma classe deve ser aberta para exetenção e fechada para modificação
// Isso significa que você pode estender o comportamento da classe
// Sem modificar seu código fonte.

// Implementação errada!
// Neste exemplo, a classe Forma precisa ser modificada
// Sempre que uma nova forma é adicionada, violando o OCP.

class Forma {
  constructor(public type: string) {}
  calculateArea() {
    if (this.type === "square") {
      // calculate square area
    } else if (this.type === "circle") {
      // calculate circle area
    }
  }
}

// Maneira correta de implementar
//Agora, podemos adicionar novas formas estendendo a classe Forma sem modificar seu código fonte.
// Isso mantém a classe aberta para extensão, mas fechada para modificação.

class FormaCorreta {
  constructor() {}

  calculateArea() {
    // calculate area
  }
}

class square extends FormaCorreta {
  calculateArea(): void {}
}

class circle extends FormaCorreta {
  calculateArea(): void {}
}
