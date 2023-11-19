

const notas = [10, 10, 5, 8, 7, 6];

notas.push(8);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length

console.log(media)