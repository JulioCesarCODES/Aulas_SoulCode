
// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let idade = 19;
let dinheiro = 20;

if(idade >=18 && dinheiro >= 20){
    console.log("você pode comprar sua bebida ");
    dinheiro = dinheiro - 20;
}else if (dinheiro < 20){
    console.log("voçê está sem dinheiro");
}else {
    idade < 18
    console.log ("vc não tem idade");
}

console.log("__________________________________")


let salario = 400;

if(salario < 500) {
    console.log(`seu salario atual é ${salario += 50}`)
}else if (salario >= 500 && salario <=1000 ) {
    console.log(`Seu salario atual é ${salario += 25}`)
}else {
    console.log("não houve mudança em sua salario")
}