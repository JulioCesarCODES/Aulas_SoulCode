// Declare uma função que recebe 3 notas e mostra a média entre elas.

function media(a, b, c) {
    // console.log(`média entre ${a}, ${b} e ${c} é = ${(a + b + c)/3}`);
    let resultado = (a + b + c) / 3;
    console.log(`a média é ${resultado}`);
    return resultado; //indica que o valor da variavel será "externalizado"
}

// let mediamate = media(7.5, 8.0,9.0);
// let mediabio = media(5, 5, 5);

// console.log(`matematica = ${mediamate}`);
// console.log(`biologia = ${mediabio}`);

// Função ENTRADA(parâmetro) - PROCESSAMENTO(lógica) - SAÍDA(retorno)
// Y = F(x)
// F = função
// x = parâmetro
// y = resiltado / retorno

// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc (peso, altura) {
    let calc = peso / (altura * altura);
    console.log(`o imc é ${calc}`);
    //console.log(`o calculo do seu IMC é ${peso / (altura * altura)}`);
}
// imc(70, 1.69);

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function num(numero) {
    let v = numero * 100;
    return `${v.toFixed(1)}%`;
}

// let valor = num(0.456); // 75.0%
// console.log(valor);

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function negativo(a) {
    if (a < 0) {
        return true;
    }else{
        return false;
    }
}

// console.log(negativo(-2));

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat


function n(s) {
    const reais = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL",
}).format(s);

    return reais;
}

//console.log(n(500));

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

function contar(max) {
    for(let i = 1; i <= max; i++) {
        console.log(i);
    }
}
// função sem retur devolve undefined
//contar(5);

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

function nomecompleto(names, sobrenome) {
    return names + " " + sobrenome;
}

//console.log(nomecompleto("julio", "cesar"))

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function areaCirculo(raio){
    return Math.PI * (raio * raio)
}

function nivelCirculo(area){
    if(area >= 1 && area <= 20){
        return 'Nível I'
    }else if(area >= 21 && area <= 40){
        return 'Nivel II'
    }else{
        return 'Nivel Inválido'
    }
}

console.log(nivelCirculo(areaCirculo(3)))