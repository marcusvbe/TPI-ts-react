import Cliente from "./cliente"
import { Produto, Servico } from "../modelo/item";

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
// quando um objeto Empresa é criado, são criados arrays vazios de clientes, produtos e servicos
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

    public set setClientes(cliente: Cliente) {
        this.clientes.push(cliente);
    }
    public set setProdutos(produto: Produto) {
        this.produtos.push(produto);
    }
    public set setServicos(servico: Servico) {
        this.servicos.push(servico);
    }
    
}