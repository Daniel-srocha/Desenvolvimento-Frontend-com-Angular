// Objetos


const Daniel = {
    nome: 'Daniel Rocha',
    idade: 44,
    altura: 1.81,
    descrever: function () {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`)
    }
}



Daniel.descrever()
