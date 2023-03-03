// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
    // Atributos
    codigo: "batata",
    saldo: 25,
    cpf: "999.999.999-99",
    nome: "Jun",
    // Metodos
    saque (valor) {
        this.saldo -=valor; //this.saldo = saldo - valor;
    },
    deposito (valor) {
        this.saldo += valor;
    }
}
console.log(conta.saldo);
conta.saque(15);
console.log(conta.saldo);
conta.deposito(1000);
console.log(conta.saldo);

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
    nome: "batata",
    descricao: "serve pra comer",
    quantidade: 100,
    precoOroginal: 500,
    desconto: 30,
    // Métodos
    calcularprecosdesconto() {
        let precoCompra = this.precoOroginal - this.desconto;
        return precoCompra;
    },
    apresentacao() {
        console.log(this);
    },
    comprar(total) {
        this.quantidade -= total;
    },
};

produto.apresentacao();
produto.comprar(20);
produto.comprar(20);
console.log(produto.quantidade);
console.log(produto.calcularprecosdesconto());