import { URL } from "../apiEndpoints/url";
import Cadastrar from "./cadastrar";

export default class CadastrarCliente implements Cadastrar {
    cadastrar(objeto: Object): void {
        fetch(URL.CADASTRARCLIENTE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

}
