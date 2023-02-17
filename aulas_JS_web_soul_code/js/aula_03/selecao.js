// Estruturas de seleção

// let Lang = "es"; // pt, es, en

// // if(Lang === "pt") {
// //     console.log("Olá, Mundo!");
// // }else if (Lang === "es") {
// //     console.log("Hola, Mundo!");
// // }else if (Lang === "en") {
// //     console.log("Hello, World");
// // }else {
// //     console.log("sem linguagem"+Lang);
// // }

// // switch - case =  escolha caso
// switch(Lang) {
//     case "pt":
//         console.log("olá mundo");
//         break
//     case "es":
//         console.log("Holla mundo");
//         break
//     case "en":
//         console.log("Hellow, World");
//         break
//     default:
//         console.log("não ha suporte para o idioma" + Lang)
// }

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

// let num = 2;

// switch (num) {
//     case 1:
//         console.log("dia 1 domingo");
//         break;
//     case 2:
//         console.log("dia 2 segunda");
//         break;
//     case 3:
//         console.log("dia 3 terça");
//         break;
//     case 4:
//         console.log("dia 4");
//         break
//     case 5:
//         console.log("dia 5");
//         break;
//     default:
//         console.log("nada");
// }

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.
// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let comida = "batata";

switch(comida){
    case "batata" || "carne" || "chocolate":
        console.log("hum, adoro");
        break;
}

let num = 5;

if (num %2 == 0){
    console.log("par")
}else {
    console.log("impar")
}

