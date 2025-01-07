"use strict";
class Estabelecimento {
    endereco;
    setor;
    produtos;
    constructor(endereco, setor, produtos) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    NomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
}
const padaria = new Estabelecimento("Rua das Laranjeiras, 1234, Centro", "alimenticia", [
    { nome: "pão", valor: 0.5 },
    { nome: "arroz", valor: 5 },
    { nome: "leite", valor: 4 },
    { nome: "trigo", valor: 5 },
    { nome: "brigadeiro", valor: 1.5 },
]);
const frutaria = new Estabelecimento("Rua das Melancias, 141, Centro", "alimentício", [
    { nome: "maçã", valor: 2 },
    { nome: "uva", valor: 5 },
    { nome: "pêra", valor: 3 },
    { nome: "abacate", valor: 8 }
]);
console.log(padaria);
console.log(frutaria);
// console.log(padaria.NomeDosProdutos());