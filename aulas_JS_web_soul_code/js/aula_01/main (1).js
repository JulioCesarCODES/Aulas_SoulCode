// dia 14.02
// variáveis e operações
// let palavra reservada

let nome = "julio"; //atribuição

nome = "jun"; //re-atribuição
// console.log(nome);

let idade = 19;
idade = 20;
// console.log(idade);

// console.log("meu nome é " + nome + " tenho " + idade + " anos");

// const = define uma constante = impede a re-atriuição
const cpf = "000.000.000-00";

let golsSofridos = 3; // numero = number
let chanceDerrota = 0.55; // numero decimal
let posseBola = 33.55; // 33,57
let nomeTime = "real Madri"; // string
let patrocinio; // indefinido
patrocinio = "SoulCode";
// boolean = 2 valores possiveis (true or false)
let timeGanhou = true;
let timePerdeu = false;

//operadores aritméticos
let soma = 200 + 100;
let sub = 100 - 50;
let mult = 5 * 5;
let div = 400 / 4;
let resto = 8 % 3;
let expressao = soma + sub * div;

// console.log(`A soma é ${soma}!`);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(resto);
// console.log(expressao);

let i = 0;
i++;
// i = i + 1; // novo valor de i é 0 mais 1 // incremento
// console.log(i);
// i--;
// console.log(i);

// Operadores relacionais (>, <, >=, <=, ==, !=)
let a = 3;
let b = 5;

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a != b);

// EX 1 :
let peso = 55;
let altura = 1.67;
console.log (`Meu IMC é ${peso / altura * altura}`);
// Ou
let Peso =55;
let Altura = 1.67;
let calculo = peso / Altura * Altura
console.log (`Meu IMC é ${calculo.toFixed(2)}`)

// EX2:
let R = 2;
const PI = 3.14;
console.log(`A área do circulo é ${PI * R * R}`)
// Ou
let r = 2;
const pi = 3.14;
let Calculo = pi * r * r
console.log(`A área do circulo é ${calculo.toFixed(2)}`)

// EX3:
let raio = 3;
const Pi = 3.14;
let calc = 2 * pi * raio;
console.log(`A circunferência é ${calc.toFixed(2)}`);
// Ou
let Raio = 3;
const pI = 3.14;
console.log(`A circunferência é ${2 * pI * Raio}`);

//EX4:
let C = 33;
console.log(`${C}C° convertido para fahrenheit é ${C * 1.8 + 32}Fh`);
//Ou
let c = 33;
let f = 1.8;
let f2 = 32;
console.log(`${c}C° convertido para fahrenheit é ${c * f + f2}Fh`);