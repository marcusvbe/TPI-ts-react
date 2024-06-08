import { Produto, Servico } from "../modelo/item";
import Listagem from "./listagem";

export default class ListagemProdutosServicos extends Listagem {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`ID: ` + produto.getId);
            console.log(`Nome: ` + produto.getNome);
            console.log(`Preço: ` + produto.getPreco);
            console.log(`--------------------------------------`);
        });

        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servico => {
            console.log(`ID: ` + servico.getId);
            console.log(`Nome: ` + servico.getNome);
            console.log(`Preço: ` + servico.getPreco);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }
}