function escreverNome(nome) {
    return 'Meu nome é ' + nome
}

//escreverNome('Daniel')

function verIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Daniel') + ' Eu sou Maior de idade')
    }else {
        console.log(escreverNome('Daniel') + ' Eu sou Menor de idade')
    }
}

verIdade(17)