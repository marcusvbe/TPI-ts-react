import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemCincoClientesMaisConsumoValor extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista dos 5 clientes que mais gastaram:`);

        const expenditureMap = new Map();

        this.clientes.forEach(cliente => {
            let totalExpenditure = 0;
            cliente.getPetsWithProducts.forEach(petWithProducts => {
                petWithProducts.produtosConsumidos.forEach(produto => {
                    totalExpenditure += produto.getPreco;
                });
                petWithProducts.servicosConsumidos.forEach(servico => {
                    totalExpenditure += servico.getPreco;
                });
            });
            expenditureMap.set(cliente.getNome, totalExpenditure);
        });

        const sortedClientes = Array.from(expenditureMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
        sortedClientes.forEach(([cliente, expenditure]) => {
            console.log(`Cliente: ${cliente}  --  Total Gasto: ${expenditure}`);
        });
    };
}