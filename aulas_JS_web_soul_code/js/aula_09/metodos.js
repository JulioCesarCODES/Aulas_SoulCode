// Métodos = ação de um objeto

let pet = {
    // Atributos
    nome: "Floky",
    idade: 5,
    peso : 5.5,
    // Métodos
    dormir() { // função
        console.log("Estou dormindo. zzzZZZ");
    },
    comer(comida) {
        console.log(`estou comendo ${comida}`);
    },
    brincar(diversao) {
        console.log(`estou brincando de ${diversao}`);
    }
};

// . Lista as propeiedades e métodos de um objeto
//pet.dormir(); // Invocação da função 
//pet.comer("peixe");

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log

//pet.brincar("Arranhando seu sofá");
    // Atributos
let pessoa = {
    nome: "Jun",
    idade: 20,
    sexo: "masculino",
    // Metodos
    dizerOi() {
    //console.log(this);
    // this representa o objeto, ele é o proprio objeto
    // Tip: Melhore o método de dizerOi
    // Adicione a mensagem neste formato:
    // "Oi, meu nome é João, tenho 25 anos e sou brasileiro"
    console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos, sou do sexo ${this.sexo}`);
    },
    envelhecer () {
    this.idade++;
    },
    cuidarPet(animal) {
        console.log(`estou cuidando do ${animal.nome}`);
        animal.comer("batata");
        animal.peso += 1;
    }
};

pessoa.cuidarPet(pet);

// pessoa.dizerOi();
// pessoa.envelhecer();
// pessoa.nome = "julio";
// pessoa.dizerOi(); // Chama o método com o nome alterado