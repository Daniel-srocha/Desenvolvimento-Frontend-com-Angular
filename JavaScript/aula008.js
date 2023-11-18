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


function comparar(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }

}

const daniel = new pessoa('Daniel', 44, 1.81)
const rocha = new pessoa('Rocha', 46, 1.81)

comparar(daniel, rocha)