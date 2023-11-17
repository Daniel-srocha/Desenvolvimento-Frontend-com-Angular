// Funções

function quadrado (valor) {
    return valor * valor
}

console.log(quadrado(3))

// acréscimo de juros

function acrescimo(valor, taxa) {
    const total = (taxa / 100) * valor
    return valor + total
}

console.log(acrescimo(100, 10))
console.log(acrescimo(100, 15))
console.log(acrescimo(100, 20))