const entradas = [5, 50, 103, 98, 23, 101, 95, 104];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}