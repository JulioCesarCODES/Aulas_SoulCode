// // Aula 23.02
// // Tópicos : funções

// // Fenção = procedimento = método

// // Sintaxe básica
// function dizOla () { // declaração de função
//     console.log("Hello, World");
// }

// // invocação = chamada
// // dizOla();

// function exemplo01(){ // escopo de função
//     let a = 1;
//     let b = 4;
//     console.log(`a soma é ${a + b}`);
// }

// //exemplo01();

// let num1 = 3;
// let num2 = 5;

// function exemplo02() {
//     console.log(`a soma é ${num1 + num2}`);
// }
// // exemplo02();
// // num1 = 10;
// // num2 = 15;
// // exemplo02();

// // Parâmetros = entrada = o que a função precisa para executar
// // = Informação dinâmica

// // a, b são PARÂMETROS
// function soma(a, b) { 
//     console.log(`a soma é ${a + b}`);
// }
// //soma(20, 75);

// function calculadora(a, b, c) {
//     console.log(`${a - (a * b / c)}`)
// }

// //chamada ?
// calculadora(150, 15, 100);
// let nume = 50;
// let nume1 = 25;
// let nume2 = 40;
// calculadora(nume, num1, num2); // argumentos = valores passados para os parâmetros

// // Declare uma função que recebe 3 notas e mostra a média entre elas.

// function media(a, b, c) {
//      // console.log(`média entre ${a}, ${b} e ${c} é = ${(a + b + c)/3}`);
//     let resultado = (a + b + c) / 3;
//     console.log(`a média é ${resultado}`);
//      return resultado; //indica que o valor da variavel será "externalizado"
//      console.log("vapo") // dead-code = códico que nunca vai ser executado
// }

//let mediamate = media(7.5, 8.0,9.0);
//let mediabio = media(5, 5, 5);

// console.log(`matematica = ${mediamate}`);
// console.log(`biologia = ${mediabio}`);

// Função ENTRADA(parâmetro) - PROCESSAMENTO(lógica) - SAÍDA(retorno)
// Y = F(x)
// F = função
// x = parâmetro
// y = resiltado / retorno

function media(a, b, c) {
    // console.log(`média entre ${a}, ${b} e ${c} é = ${(a + b + c)/3}`);
    let resultado = (a + b + c) / 3;
    console.log(`a média é ${resultado}`);
    return resultado; //indica que o valor da variavel será "externalizado"
    console.log("vapo") // dead-code = códico que nunca vai ser executado
}

function aprovado(a, b, c) {
    let med = media(a, b, c);
    if(med >= 7) {
        return true;
    }else {
        return false;
    }
}
let aluno = aprovado(6, 7, 8);
console.log(aluno);