import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Atualizar from "./atualizar";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";

export default class AtualizarCliente extends Atualizar<Cliente>{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do cliente que deseja atualizar: ");
        let indexCliente = this.clientes.findIndex(cliente => cliente.getNome === nome);

        if (indexCliente !== -1) {
            let opcaoAtualizacao: number;           
            console.log("\nDigite a opção do dado cadastral que deseja atualizar:");
            console.log("1) Nome");
            console.log("2) Nome social");
            console.log("3) CPF");
            console.log("4) RG");
            console.log("5) Telefone");
            console.log("6) Pet");
            console.log("0) Voltar");
            opcaoAtualizacao = this.entrada.receberNumero("Sua opção: ");
            
            switch (opcaoAtualizacao) {
                case 1:
                    let novoNome = this.entrada.receberTexto("Digite o novo nome do cliente: ");
                    this.clientes[indexCliente].setNome = novoNome;
                    break;
                case 2:
                    let novoNomeSocial = this.entrada.receberTexto("Digite o novo nome social do cliente: ");
                    this.clientes[indexCliente].setNomeSocial = novoNomeSocial;
                    break;
                case 3:
                    let valor = this.entrada.receberTexto(`Por favor informe o número do novo CPF do cliente: `);
                    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do novo CPF, no padrão dd/mm/yyyy: `);
                    let partesData = data.split('/')
                    let ano = new Number(partesData[2].valueOf()).valueOf()
                    let mes = new Number(partesData[1].valueOf()).valueOf()
                    let dia = new Number(partesData[0].valueOf()).valueOf()
                    let dataEmissao = new Date(ano, mes, dia)
                    let cpf = new CPF(valor, dataEmissao);
                    this.clientes[indexCliente].setCpf = cpf;
                    break;
                case 4:
                    this.clientes[indexCliente].setRgs = [];
                    let adicionarOutroRG = "s";
                    while (adicionarOutroRG.toLowerCase() === "s") {
                        let valor = this.entrada.receberTexto(`Por favor informe o número do novo RG do cliente: `)
                        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do novo RG, no padrão dd/mm/yyyy: `);
                        let partesData = data.split('/')
                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()
                        let dataEmissao = new Date(ano, mes, dia)
                        let rg = new RG(valor, dataEmissao);
                        this.clientes[indexCliente].adicionarRG(rg);
            
                        adicionarOutroRG = this.entrada.receberTexto(`Deseja adicionar outro RG? (s/n): `)
                    }
                    break;
                case 5:
                    this.clientes[indexCliente].setTelefones = [];
                    let adicionarOutroTelefone = "s";
                    while (adicionarOutroTelefone.toLowerCase() === "s") {
                        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do novo telefone do cliente: `)
                        let numero = this.entrada.receberTexto(`Por favor informe o número do novo telefone do cliente: `)
                        let telefone = new Telefone(ddd, numero);
                        this.clientes[indexCliente].adicionarTelefone(telefone);
            
                        adicionarOutroTelefone = this.entrada.receberTexto(`Deseja adicionar outro telefone? (s/n): `)
                    }
                    break;
                case 6:
                    this.clientes[indexCliente].setPets = [];
                    this.clientes[indexCliente].setPetsWithProducts = [];
                    let adicionarOutroPet = "s";
                    while (adicionarOutroPet.toLowerCase() === "s") {
                        let nome = this.entrada.receberTexto(`Por favor informe o nome do novo pet: `)
                        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do novo pet: `)
                        let raca = this.entrada.receberTexto(`Por favor informe a raça do novo pet: `)
                        let genero = this.entrada.receberTexto(`Por favor informe o gênero do novo pet: `)
                        let pet = new Pet(nome, tipo, raca, genero);
                        this.clientes[indexCliente].adicionarPet(pet);

                        adicionarOutroPet = this.entrada.receberTexto(`Deseja adicionar outro pet? (s/n): `)
                    }
                    break;
                case 0:
                    return;
                default:
                    console.log("Opção inválida. Tente novamente.");

            }
            console.log(`\nCliente '${nome}' foi atualizado com sucesso.\n`);
        } else {
            console.log("Cliente não encontrado. Digite o nome CORRETO.");
        }
    }
}