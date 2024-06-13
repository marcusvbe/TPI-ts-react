import { URL } from "../apiEndpoints/url"
import Obter from "./obter"

export default class obterClienteID implements Obter {
    private url: string;

    constructor(id: string) {
        this.url = URL.CLIENTEID.replace(':id', id);
    }

    public async obter() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`Cliente não econtrado: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}