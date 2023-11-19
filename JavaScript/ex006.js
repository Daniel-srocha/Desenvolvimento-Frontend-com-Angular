class Carro {
    marca;
    cor;
    media;

    constructor(marca, cor, media) {
        this.marca = marca;
        this.cor = cor;
        this.media = media;
    }

    custoViajem(km, valueGas) {
        return (km * this.media) * valueGas;
    }

    
}

const fit = new Carro('Honda', 'Prata', 1 / 12);

console.log(fit)
console.log(fit.custoViajem(202, 5))
