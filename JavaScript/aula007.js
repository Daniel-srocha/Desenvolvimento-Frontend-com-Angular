// Classes

// Objetos

class pessoa {
    nome;
    idade;
    altura;
    nascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.nascimento = 2023 - idade
    }

     descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`)
    }
}

const daniel = new pessoa('Daniel', 44, 1.81);
const rocha = new pessoa('Rocha', 44, 1.81)
daniel.descrever()
rocha.descrever()
console.log(daniel)


