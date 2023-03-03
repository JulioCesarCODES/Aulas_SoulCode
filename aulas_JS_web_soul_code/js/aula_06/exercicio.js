// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.


function calculadora(a, b, operador) {
    if (operador === "+"){
        console.log(`${a} + ${b} = ${a + b}`);
    }else if (operador === "-") {
        console.log(`${a} - ${b} = ${a - b}`);
    }else if (operador === "*") {
        console.log(`${a} * ${b} = ${a * b}`);
    }else if (operador === "/") {
        console.log(`${a} / ${b} = ${a / b}`);
    }else {
        console.log("Operador não definido");
    }
}

calculadora(10,20, "/");


// Exercício II: Crie uma função que converte celsius em fahrenheit
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"

function toCelsius(tempF) {
    let temC = ((tempF - 32) / 1.8);
}

let tempCidade = toCelsius(75);