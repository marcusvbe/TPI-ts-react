import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemGeralProdServMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos produtos e serviços mais consumidos:`);

        const frequencyMapProdutos = new Map();
        const frequencyMapServicos = new Map();

        this.clientes.forEach(cliente => {
            cliente.getPetsWithProducts.forEach(petWithProducts => {
                petWithProducts.produtosConsumidos.forEach(produto => {
                    const count = frequencyMapProdutos.get(produto.getNome) || 0;
                    frequencyMapProdutos.set(produto.getNome, count + 1);
                });
                petWithProducts.servicosConsumidos.forEach(servico => {
                    const count = frequencyMapServicos.get(servico.getNome) || 0;
                    frequencyMapServicos.set(servico.getNome, count + 1);
                });
            });
        });

        const sortedProdutos = Array.from(frequencyMapProdutos.entries()).sort((a, b) => b[1] - a[1]);
        const sortedServicos = Array.from(frequencyMapServicos.entries()).sort((a, b) => b[1] - a[1]);

        console.log("\nProdutos Consumidos:");
        sortedProdutos.forEach(([item, count]) => {
            console.log(`Produto: ${item}  --  Quantidade: ${count}`);
        });

        console.log("\nServiços Consumidos:");
        sortedServicos.forEach(([item, count]) => {
            console.log(`Serviço: ${item}  --  Quantidade: ${count}`);
        });
    }
}