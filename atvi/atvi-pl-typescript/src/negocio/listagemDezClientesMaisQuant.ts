import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemDezClientesMaisQuant extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram:`);
    
        const consumptionMap = new Map();
    
        this.clientes.forEach(cliente => {
            let totalConsumption = 0;
            cliente.getPetsWithProducts.forEach(petWithProducts => {
                totalConsumption += petWithProducts.produtosConsumidos.length;
                totalConsumption += petWithProducts.servicosConsumidos.length;
            });
            consumptionMap.set(cliente.getNome, totalConsumption);
        });
    
        const sortedClientes = Array.from(consumptionMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);
        sortedClientes.forEach(([cliente, consumption]) => {
            console.log(`Cliente: ${cliente}  --  Quant. de produtos/serviços consumidos: ${consumption}`);
        });
    };
}