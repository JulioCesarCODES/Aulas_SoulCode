// Operadores Lógicos: not(!), and(&&), or(||)

// Operador NOT(!) = Inverte o valor lógico
let ligado = true;
let desligado = !ligado;

/* 
    tabela NOT
    !true = false
    !false = true
*/

/*
    Tabela Verdade (AND)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

// Operador AND(&&) = todas as expressões deve ser true
let gasolina = 1;
let nareserva = gasolina < 5;
let abasteça = desligado && nareserva;
let podeviajar = ligado && !nareserva;
let ficaemcasa = !podeviajar;

/*
    Tabela Verdade (OU)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

// Operador OR(||) = Basta uma expressão ser treu
let tapodendo = podeviajar || abasteça;

let idade = 100;
let podebeber = idade >= 18 && idade <= 59; //de 18 até 59 anos
let podedirijir = idade >= 18 || idade <=59;
console.log(podebeber);
console.log(podedirijir);

let media = 8.5;
let saberingles = true;
let aprovado = media >= 7;
let contratado = aprovado && saberingles;

console.log(contratado && saberingles) // O candidato será contratado caso estejá aprovado e saiba ingles

let x = 5;
let y = 10;

let expressao = (x > 3) && (y < 20); // true
let expressao2 = (y != 20) || (x >=5); //true
let expressao3 = (y == 100) || (x < 10); //true
let expressao4 = !(x == 5); //false

// Estrutura condicionais (IF - ELSE)

/*
    if(condicao) {
        // Faz algo se a condição for verdadeira
    }
*/

let idadeusuario = 18;

if(idadeusuario >= 18) {
    console.log("Vá imediatamente para o Exercito!");
}   else {
    console.log("Volte imediatamente para sua mamae!");
}

let nota = 8;

if(nota >=7) {
    console.log("Você está aprovado");
}else {
    console.log("Você está reprovado. Tente de novo");
}

console.log("_______________________")

let numero = 10;

if(numero > 0) {
    console.log("numero positivo");
}else if(numero < 0){
    console.log("o numero é negativo");
}else {
    console.log("o numero é zero")
}