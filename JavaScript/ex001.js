let nota1 = 6.5
let nota2 = 7
let nota3 = 8


const media = (nota1 + nota2 + nota3) / 3

if (media > 7) {
    console.log("Sua nota final é: " + media.toFixed(2) + " Você Passou!")
} else if(media >= 5 && media <= 7) {
    console.log("Sua nota final é: " + media.toFixed(2) + " Você está em Recuperação")
} else {
    console.log("Sua nota final é: " + media.toFixed(2) + ' Reprovado!')
}