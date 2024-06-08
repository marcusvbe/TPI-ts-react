import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Excluir from "./excluir";

export default class ExcluirCliente extends Excluir<Cliente> {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public excluir(): Cliente | null {
        let nome = this.entrada.receberTexto("Digite o nome do cliente que deseja excluir: ");
        let index = this.clientes.findIndex(cliente => cliente.nome === nome);
        if (index !== -1) {
            let removed = this.clientes.splice(index, 1);
            return removed[0];
        } else {
            console.log("Cliente não encontrado. Digite o nome CORRETO.");
            return null;
        }
    }
}