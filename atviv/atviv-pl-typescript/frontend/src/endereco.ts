export default class Endereco {
    private rua: string
    private numero: string
    private bairro: string
    private codigoPostal: string
    private cidade: string
    private estado: string
    private informacoesAdicionais: string

    constructor(rua:string, numero:string, bairro:string, codigoPostal:string, cidade:string, estado:string, informacoesAdicionais: string) {
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.codigoPostal = codigoPostal
        this.cidade = cidade
        this.estado = estado
        this.informacoesAdicionais = informacoesAdicionais
    }
}