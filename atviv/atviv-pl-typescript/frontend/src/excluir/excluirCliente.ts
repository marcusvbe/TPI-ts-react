import { URL } from "../apiEndpoints/url";
import ExcluirServerSide from "./excluirServerSide";

export default class ExcluirCliente implements ExcluirServerSide {
    public excluir(objeto: Object): void {
        let clientData = { id: objeto['id'] }
        fetch(URL.EXCLUIRCLIENTE, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientData)
        })
    }
}