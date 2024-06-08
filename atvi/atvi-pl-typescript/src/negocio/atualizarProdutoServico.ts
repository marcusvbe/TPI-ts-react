import Entrada from "../io/entrada";
import { Produto, Servico } from "../modelo/item";
import Atualizar from "./atualizar";

export default class AtualizarProdutoServico extends Atualizar<Produto | Servico> {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }


    public atualizar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do produto/serviço que deseja atualizar: ");
        let indexProduto = this.produtos.findIndex(produto => produto.getNome === nome);
        let indexServico = this.servicos.findIndex(servico => servico.getNome === nome);

        if (indexProduto !== -1) {
            let updated = false;
            if (this.entrada.receberTexto("Deseja atualizar o nome do produto? (s/n): ").toLowerCase() === 's') {
                let novoNome = this.entrada.receberTexto("Digite o novo nome do produto: ");
                this.produtos[indexProduto].setNome = novoNome;
                updated = true;
            }
            if (this.entrada.receberTexto("Deseja atualizar o preço do produto? (s/n): ").toLowerCase() === 's') {
                let novoPreco = this.entrada.receberNumero("Digite o novo preço do produto: ");
                this.produtos[indexProduto].setPreco = novoPreco;
                updated = true;
            }
            if (updated) {
            console.log(`\nProduto '${nome}' foi atualizado com sucesso.\n`);
        } else {
            console.log(`\nNenhuma propriedade do produto '${nome}' foi atualizada.\n`);
        }
        } else if (indexServico !== -1) {
            let updated = false;
            if (this.entrada.receberTexto("Deseja atualizar o nome do serviço? (s/n): ").toLowerCase() === 's') {
                let novoNome = this.entrada.receberTexto("Digite o novo nome do serviço: ");
                this.servicos[indexServico].setNome = novoNome;
                updated = true;
            }
            if (this.entrada.receberTexto("Deseja atualizar o preço do serviço? (s/n): ").toLowerCase() === 's') {
                let novoPreco = this.entrada.receberNumero("Digite o novo preço do serviço: ");
                this.servicos[indexServico].setPreco = novoPreco;
                updated = true;
            }
            if (updated) {
            console.log(`\nServiço '${nome}' foi atualizado com sucesso.\n`);
        } else {
            console.log(`\nNenhuma propriedade do serviço '${nome}' foi atualizada.\n`);
        }
        } else {
            console.log("Produto/Serviço não encontrado. Digite o nome CORRETO.");
        }
    }
}