import ExcluirClientSide from "./excluirClientSide";

export default class ExcluirClienteClientSide implements ExcluirClientSide {
    public excluir(objeto: Object[], id: string): Object[] {
        let clientes = objeto.filter(elemento => elemento['id'] !== id)
        return clientes
    }
}