import { URL } from "../apiEndpoints/url";
import Obter from "./obter";

export default class ObterClientes implements Obter {
    public async obter() {
        let clientData = await fetch(URL.CLIENTES).then(response => response.json())
        return clientData
    }
}