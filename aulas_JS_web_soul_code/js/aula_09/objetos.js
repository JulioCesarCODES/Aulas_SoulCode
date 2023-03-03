// Aula 01.03
// Tópicos: Objetos

// Objetos - servem para estruturar dados
// - propriedades (caracteristicas)
// - métodos (ações)

let pet = {
    nome: "Floky", // propriedade-valor
    idade: 5, // propriedade-valor
    peso: 3.5, // propriedade-valor
    especie: "gato"
}; // indica que estou declarando um objeto

let pet2 = {
    nome: "Aryel",
    idade: 5,
    peso: 2.2,
    especie: "gato"
}

// Tip: crie um objeto "pet3" com seu pet e coloque uma 
// nova propriedade: comida favorita

let pet3 = {
    nome: "floky",
    idade: 5,
    peso: 4.4,
    especie: "gato",
    comidaFavorita: "ração de carne"
}

// Acesso de propredades
console.log(`O pet ${pet.nome} tem ${pet.idade} anos de idade, seu peso é de ${pet.peso}kg da espécie ${pet.especie}`);
console.log(pet["nome"]); // equivale a pet.nome
console.log(pet.idade);
console.log(pet.peso);
console.log(pet.especie);

// Alterar valores das propriedades
pet.nome = "floky2"; // alteração do nome do pet
pet.idade++;
pet.peso = pet.peso + 3;
pet["nome"] = "batata"; //peso.nome = "batata"
console.log(pet)

// Adicionando nova propriedade
pet.cor = "Cinza";
console.log(pet);

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

pet3.cor = "Cinza";
pet3.sexo = "macho";
console.log(pet3);
