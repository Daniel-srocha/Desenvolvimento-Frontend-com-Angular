// Calcula preço

function desconto(valor, taxa) {
    return (valor - (valor * (taxa / 100)))

}

function juros(valor, taxa) {
    return ((valor + (valor * (taxa / 100))) / parcela)
}


const valueProduct = 100
const credit2x = valueProduct / 2
const parcela = 3
let formaPag = 4



if (formaPag === 1) {
    console.log('Valor a pagar: R$ ' + desconto(valueProduct, 10))
} else if (formaPag === 2) {
    console.log('Valor a pagar: R$ ' + desconto(valueProduct, 15))
} else if (formaPag === 3) {
    console.log('Valor a pagar: 2 Parcelas de R$ ' + credit2x)
}  else {
    console.log('Valor a pagar: ' + parcela +  ' Parcelas de R$ ' + juros(valueProduct, 10).toFixed(2))
}     
 
