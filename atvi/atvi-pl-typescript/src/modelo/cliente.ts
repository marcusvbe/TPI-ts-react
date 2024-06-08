import CPF from "./cpf"
import RG from "./rg"
import Telefone from "./telefone"
import { Produto, Servico } from "./item"
import Pet from "./pet"

interface PetComProdutosServicos {
    pet: Pet;
    produtosConsumidos: Array<Produto>;
    servicosConsumidos: Array<Servico>;
}

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private genero: string
    public static idCounter = 0;
    private id: number;
    private pets: Array<Pet> = [];
    private petsWithProducts: Array<PetComProdutosServicos> = [];

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        Cliente.idCounter += 1;
        this.id = Cliente.idCounter;
    }

    public adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone);
    }

    public adicionarRG(rg: RG): void {
        this.rgs.push(rg);
    }

    public set setPets(pets: Array<Pet>) {
        this.pets = pets;
    }

    public adicionarPet(pet: Pet): void {
        this.pets.push(pet);
    }

    public get getPets(): Array<Pet> {
        return this.pets;
    }

    public get getPetsWithProducts(): Array<PetComProdutosServicos> {
        return this.petsWithProducts;
    }

    public set setPetsWithProducts(petsWithProducts: Array<PetComProdutosServicos>) {
        this.petsWithProducts = petsWithProducts;
    }

    public adicionarProdutoServicoAoPet(pet: Pet, produto?: Produto, servico?: Servico): void {
        let petComProdutosServicos = this.petsWithProducts.find(p => p.pet === pet);
    
        if (!petComProdutosServicos) {
            petComProdutosServicos = { pet, produtosConsumidos: [], servicosConsumidos: [] };
            this.petsWithProducts.push(petComProdutosServicos);
        }
    
        if (produto) {
            petComProdutosServicos.produtosConsumidos.push(produto);
        }
    
        if (servico) {
            petComProdutosServicos.servicosConsumidos.push(servico);
        }
    }

    public get getNome(): string {
        return this.nome
    }

    public set setNome(nome: string) {
        this.nome = nome;
    }

    public get getNomeSocial(): string {
        return this.nomeSocial
    }

    public set setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial;
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public set setCpf(cpf: CPF) {
        this.cpf = cpf;
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones;
    }

    public get getID(): number {
        return this.id
    }

    public get getGenero(): string {
        return this.genero
    }
}