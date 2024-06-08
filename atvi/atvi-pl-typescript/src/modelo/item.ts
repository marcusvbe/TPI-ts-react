export class Item {
    protected id: number;
    protected nome: string;
    protected preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    // Getters
    public get getId(): number {
        return this.id;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getPreco(): number {
        return this.preco;
    }

    // Setters
    public set setNome(nome: string) {
        this.nome = nome;
    }

    public set setPreco(preco: number) {
        this.preco = preco;
    }
}

export class Produto extends Item {
    // propriedades e métodos específicos de Produto
}

export class Servico extends Item {
    // propriedades e métodos específicos de Servico
}