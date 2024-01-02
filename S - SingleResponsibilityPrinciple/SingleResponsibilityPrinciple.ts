// Uma classe deve ter apenas um motivo para mudar
// Ela deve ter apenas uma responsabilidade

//Implementação errada!
// Onde a classe usuário tem duas responsabilidades

class User {
  constructor(public name: string, public email: string) {}

  public sendEmail(): void {
    // send email
  }

  public saveInDb(): void {
    // save user
  }
}

//Maneira correta de implementar
//Cada classe tem apenas uma responsabilidade

class UserCorrect {
  constructor(public name: string, public email: string) {}
}

class UserDAO {
  public saveInDb(user: UserCorrect): void {
    // save user
  }
}

class EmailService {
  public sendEmail(user: UserCorrect): void {
    // send email
  }
}
