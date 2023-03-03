// Aula 02.03
// Tópicos: objetos - aninhados e arrays de objetos

// Objetos aninhados = onjetos dentro de outro

let pessoa = {
    nome: "jun",
    cpf: "999.999.999-99",
    contato: {
        email: "jun@gamil.com",
        telefone: "9999-9999",
    },
    endereco: { // objeto agrupar propriedades
        ciade: "SP",
        estado: "SP - Capital",
        cep: "123456-000",
        rua: "rua x",
        numero: 215,
    },
    // array de objetos
    objetivoProfissionais: ["home office", "clt", "Desenvolvedor senior"],
    formacao: [
        {nome: "ensino medio", periodo: "2006 - 2008"},
        {nome: "tecnico em batata", periodo: "2006 - 2005"},
        {nome: "vapo em batata", periodo: "2222 - 2224"},
],
};

console.log(pessoa.endereco.estado);
console.log(pessoa.objetivoProfissionais[2]);
console.log(pessoa.formacao[2].periodo);