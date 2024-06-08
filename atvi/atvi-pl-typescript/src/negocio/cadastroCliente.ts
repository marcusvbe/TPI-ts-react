import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente (e seus PETS!)`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let generoInput = this.entrada.receberTexto(`Por favor, informe o genero do cliente (f/m): `);
        let genero = generoInput.toLowerCase() === 'm' ? 'Masculino' : 'Feminino';
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        let adicionarOutroTelefone = "s";
        while (adicionarOutroTelefone.toLowerCase() === "s") {
            let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone do cliente: `)
            let numero = this.entrada.receberTexto(`Por favor informe o número do telefone do cliente: `)
            let telefone = new Telefone(ddd, numero);
            cliente.adicionarTelefone(telefone);
    
            adicionarOutroTelefone = this.entrada.receberTexto(`Deseja adicionar outro telefone? (s/n): `)
        }

        let adicionarOutroRG = "s";
        while (adicionarOutroRG.toLowerCase() === "s") {
            let valor = this.entrada.receberTexto(`Por favor informe o número do RG do cliente: `)
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            let rg = new RG(valor, dataEmissao);
            cliente.adicionarRG(rg);
    
            adicionarOutroRG = this.entrada.receberTexto(`Deseja adicionar outro RG? (s/n): `)
        }

        let adicionarOutroPet = "s";
        while (adicionarOutroPet.toLowerCase() === "s") {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
            let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
            let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
            let genero = this.entrada.receberTexto(`Por favor informe o gênero do pet: `)
            let pet = new Pet(nome, tipo, raca, genero);
            cliente.adicionarPet(pet);
            
            adicionarOutroPet = this.entrada.receberTexto(`Deseja adicionar outro pet? (s/n): `)
        }

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}