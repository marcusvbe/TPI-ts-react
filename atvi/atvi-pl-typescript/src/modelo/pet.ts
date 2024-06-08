export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, tipo: string, raca: string, genero: string) {
        this.nome = nome
        this.tipo = tipo
        this.raca = raca
        this.genero = genero
    }

    public get getNome(){return this.nome}
    public get getTipo(){return this.tipo}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
}