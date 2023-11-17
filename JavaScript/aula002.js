// condicionais
// boleanos

const num = 10
const numPar = (num % 2) === 0

console.log(numPar)

// if / else if / else

if (num === 0) {
    console.log("Núnero inválido")

} else if (numPar) {
    console.log("É par")

} else {
    console.log("É impar")
}


// Exercício

const valueEtanol = 4
const valueGas = 5
const mediaKm = 10
const distancia = 100
let tipoCombus = 'etanol'
const consumido = distancia / mediaKm
let custoTotal

if (tipoCombus === 'gasolina') {
    custoTotal = consumido * valueGas
} else {
    custoTotal = consumido * valueEtanol
}



console.log(custoTotal.toFixed(2))