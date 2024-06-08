import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import { Item } from "../modelo/item";
import Pet from "../modelo/pet";

export default class ListagemPorTipoRacaProdServMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos produtos e serviços mais consumidos por tipo e raça de pet:`);
    
        const frequencyMapProdServ = new Map();
    
        this.clientes.forEach(cliente => {
            cliente.getPetsWithProducts.forEach(petComProdutos => {
                const KeyTipoRacaPet = `${petComProdutos.pet.getTipo} - Raça: ${petComProdutos.pet.getRaca}`;
    
                if (!frequencyMapProdServ.has(KeyTipoRacaPet)) {
                    frequencyMapProdServ.set(KeyTipoRacaPet, { produtos: new Map(), servicos: new Map() });
                }
    
                petComProdutos.produtosConsumidos.forEach(produto => {
                    const count = frequencyMapProdServ.get(KeyTipoRacaPet).produtos.get(produto.getNome) || 0;
                    frequencyMapProdServ.get(KeyTipoRacaPet).produtos.set(produto.getNome, count + 1);
                });
    
                petComProdutos.servicosConsumidos.forEach(servico => {
                    const count = frequencyMapProdServ.get(KeyTipoRacaPet).servicos.get(servico.getNome) || 0;
                    frequencyMapProdServ.get(KeyTipoRacaPet).servicos.set(servico.getNome, count + 1);
                });
            });
        });
    
        frequencyMapProdServ.forEach((value: { produtos: Map<any, any>, servicos: Map<any, any> }, key) => {
            let produtosArray = Array.from(value.produtos, ([item, count]) => ({item, count}));
            let servicosArray = Array.from(value.servicos, ([item, count]) => ({item, count}));
        
            produtosArray.sort((a, b) => b.count - a.count);
            servicosArray.sort((a, b) => b.count - a.count);
        
            console.log(`\n${key}: Produtos e Serviços Consumidos:`);
        
            produtosArray.forEach(({item, count}) => {
                console.log(`Produto: ${item}  --  Quantidade: ${count}`);
            });
        
            console.log();

            servicosArray.forEach(({item, count}) => {
                console.log(`Serviço: ${item}  --  Quantidade: ${count}`);
            });

            console.log();
        });
    }
}