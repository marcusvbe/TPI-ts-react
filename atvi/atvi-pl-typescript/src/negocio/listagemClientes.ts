import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import { Produto, Servico } from "../modelo/item";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`ID do cliente: ` + cliente.getID)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genero: ` + cliente.getGenero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Telefone(s): ` + cliente.getTelefones.map(telefone => `(${telefone.getDdd}) ${telefone.getNumero}`).join(', '));
            let clienteRgs = cliente.getRgs;
            // console.log(`RG(s) do cliente ${cliente.nome}:`);
            clienteRgs.forEach((rg, index) => {
                // console.log(`RG ${index + 1}:`);
                console.log(`RG(s): ${rg.getValor}`);
                // console.log(`Data de Emissão: ${rg.getDataEmissao.toLocaleDateString('pt-BR')}`);
            });
            console.log();
            let clientePetsWithProducts = cliente.getPetsWithProducts;
            let clientePets = cliente.getPets;

            if (clientePetsWithProducts.length > 0) {
                console.log(`Pet(s) com produtos/serviços:`);
                clientePetsWithProducts.forEach(petWithProducts => {
                    let pet = petWithProducts.pet;
                    console.log(`Nome: ${pet.getNome}`);
                    console.log(`Tipo: ${pet.getTipo}`);
                    console.log(`Raça: ${pet.getRaca}`);
                    console.log(`Gênero: ${pet.getGenero}`);
                    console.log(`Produtos consumidos: ${petWithProducts.produtosConsumidos.map(produto => produto.getNome + '  --  Valor: ' + produto.getPreco).join(', ')}`);
                    console.log(`Serviços consumidos: ${petWithProducts.servicosConsumidos.map(servico => servico.getNome + '  --  Valor: ' + servico.getPreco).join(', ')}`);
                    console.log();
                });
            } else if (clientePets.length > 0) {
                console.log(`Pet(s) sem consumo de produtos/serviços:`);
                clientePets.forEach(pet => {
                    console.log(`Nome: ${pet.getNome}`);
                    console.log(`Tipo: ${pet.getTipo}`);
                    console.log(`Raça: ${pet.getRaca}`);
                    console.log(`Gênero: ${pet.getGenero}`);
                    console.log();
                });
            } else {
                console.log(`O cliente não possui pets cadastrados.`);
                console.log();
                console.log();
            }
        });
    }
}