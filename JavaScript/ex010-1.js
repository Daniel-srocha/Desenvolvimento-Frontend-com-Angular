const { gets, print } = require('./ex010');

const total = gets();

let maior = 0;

for (let i = 0; i < total; i++) {
    const sorteios = gets();
    if (sorteios > maior) {
        maior = sorteios
    }

}







print(maior)