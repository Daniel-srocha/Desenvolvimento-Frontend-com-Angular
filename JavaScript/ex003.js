// Calcula preço

const valueProduct = 100
const debito = valueProduct - ((10 * valueProduct) / 100)
const moneyPix = valueProduct - ((15 * valueProduct) / 100)
const credit2x = valueProduct / 2
const parcela = 10
const totalParcela = (valueProduct + ((10 * valueProduct) / 100)) / parcela
let formaPag = 4

if (formaPag === 1) {
    console.log('Valor a pagar: R$ ' + debito)
} else if (formaPag === 2) {
    console.log('Valor a pagar: R$ ' + moneyPix)
} else if (formaPag === 3) {
    console.log('Valor a pagar: 2 Parcelas de R$ ' + credit2x)
}  else {
    console.log('Valor a pagar: ' + parcela +  ' Parcelas de R$ ' + totalParcela.toFixed(2))
}     
 
const numero = 10;
    const numeroEmTexto = '10';
    console.log(numero === numeroEmTexto);

//console.log(totalParcela.toFixed(2))

//console.log(valueProduct + ((10 * valueProduct) / 100))