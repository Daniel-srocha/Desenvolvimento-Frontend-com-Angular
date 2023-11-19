class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(peso, altura) {
        return this.peso / Math.pow(this.altura, 2)
        
    }

    tipoImc() {
        const valueImc = this.imc();
        if (valueImc < 18.5) {
            return 'Abaixo do peso'
        } else if (valueImc >= 18.5 && valueImc < 25) {
            return 'Peso normal'
        } else if (valueImc >= 25 && valueImc < 30) {
            return 'Acima do peso'
        } else if (valueImc >= 30 && valueImc < 40) {
            return 'Obeso'
        } else {
            console.log('Obesidade Grave!')
        }
    }
}

const daniel = new Pessoa ('Daniel', 87, 1.81)
const vitor = new Pessoa ('Vitor', 63, 1.75)

console.log(daniel.imc())
console.log(daniel.tipoImc())