import Entrada from "../io/entrada";
import { Item, Produto, Servico } from "../modelo/item";
import Excluir from "./excluir";

export default class ExcluirProdutoServico extends Excluir<Item> {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public excluir(): Item | null {
        let nome = this.entrada.receberTexto("Digite o nome do produto/serviço que deseja excluir: ");
        let indexProduto = this.produtos.findIndex(produto => produto.getNome === nome);
        let indexServico = this.servicos.findIndex(servico => servico.getNome === nome);

        if (indexProduto !== -1) {
            let removed = this.produtos.splice(indexProduto, 1);
            return removed[0];
        } else if (indexServico !== -1) {
            let removed = this.servicos.splice(indexServico, 1);
            return removed[0];
        } else {
            console.log("Produto/Serviço não encontrado. Digite o nome CORRETO.");
            return null;
        }
    }
}