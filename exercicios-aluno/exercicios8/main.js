// let peso;
// let numeroMaior = 0;
// let contador = 0;

// do { peso = prompt('digite o peso'); 
//     peso = Number(peso);
//     contador = contador + 1
//     if(peso > numeroMaior ){
//         numeroMaior = peso;
//     }

// } while (contador < 10);
// console.log(numeroMaior);



let somapesos = 0;
let pesoAtual;

for (let contador = 0; contador < 10; contador = contador + 1 ) {
    pesoAtual = prompt("digite seu peso");
    pesoAtual = Number (pesoAtual);
    somapesos = somapesos + pesoAtual;

} console.log('a media dos pesos é ', (somapesos / 10));
