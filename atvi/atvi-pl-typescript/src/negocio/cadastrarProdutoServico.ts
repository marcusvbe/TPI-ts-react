import Entrada from "../io/entrada";
import { Produto, Servico } from "../modelo/item";
import Cadastro from "./cadastro";

export default class CadastroProdutoServico extends Cadastro {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do item`);

        let isProduto = this.entrada.receberTexto(`O item é um produto ou um serviço? (p/s): `).toLowerCase() === 'p';
        let id = this.entrada.receberNumero(`Por favor informe o ID do item: `);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do item: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do item: `);

        if (isProduto) {
            let produto = new Produto(id, nome, preco);
            this.produtos.push(produto);
        } else {
            let servico = new Servico(id, nome, preco);
            this.servicos.push(servico);
        }

        console.log(`\nCadastro concluído :)\n`);
    }
}