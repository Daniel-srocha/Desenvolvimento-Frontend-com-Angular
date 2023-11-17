// prática funções

function calcImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function resultTab(imc) {
    if (imc < 18.5) {
        return ' Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        return ' Peso normal'
    } else if (imc >= 25 && imc < 30) {
        return ' Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return ' Obeso'
    } else {
        return ' Obesidade Grave!'
    }
}

function main() {
    const altura = 2
    const peso = 87
    const imc = calcImc(peso, altura)

    console.log('Seu IMC é: ' + imc + resultTab(imc.toFixed(2)))
}

main()


// prática funções imediatas

function calcImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function resultTab(imc) {
    if (imc < 18.5) {
        return ' Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        return ' Peso normal'
    } else if (imc >= 25 && imc < 30) {
        return ' Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return ' Obeso'
    } else {
        return ' Obesidade Grave!'
    }
}

(function () {
    const altura = 2
    const peso = 87
    const imc = calcImc(peso, altura)

    console.log('Seu IMC é: ' + imc + resultTab(imc.toFixed(2)))
})()

