import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ExcluirCliente from "../negocio/excluirCliente";
import Atualizar from "../negocio/atualizar";
import AtualizarCliente from "../negocio/atualizarCliente";
import CadastroProdutoServico from "../negocio/cadastrarProdutoServico";
import ListagemProdutosServicos from "../negocio/listagemProdutoServico";
import ExcluirProdutoServico from "../negocio/excluirProdutoServico";
import { Produto, Servico } from "../modelo/item";
import AtualizarProdutoServico from "../negocio/atualizarProdutoServico";
import { produtos, servicos } from '../mockData/mockDataProdutosServicos';
import Clientes from '../mockData/mockDataClientes';
import Cliente from "../modelo/cliente";
import ListagemDezClientesMaisQuant from "../negocio/listagemDezClientesMaisQuant";
import ListagemGeralProdServMaisConsumidos from "../negocio/listagemServProdMaisConsumidosGeral";
import ListagemCincoClientesMaisConsumoValor from "../negocio/listagemCincoClientesMaisConsumoValor";
import ListagemPorTipoRacaProdServMaisConsumidos from "../negocio/listagemServProdMaisConsumidosTipoERaca";



console.log(`Bem-vindo ao menu geral do Grupo Pet Lovers`)
let execucao = true
let empresa = new Empresa()
// Adicionar o mock data de produtos e serviços à instância de Empresa
produtos.forEach(produto => empresa.setProdutos = produto);
servicos.forEach(servico => empresa.setServicos = servico);
// Adicionar o mock data de clientes à instância de Empresa
Clientes.forEach(cliente => empresa.setClientes = cliente);
let entrada = new Entrada()


const produtosServicos = new CadastroProdutoServico(produtos, servicos);
const clientes = new CadastroCliente(Clientes);


for (let i = 0; i < Clientes.length; i++) {
    const cliente = Clientes[i];
    const pets = cliente.getPets;

    for (let j = 0; j < pets.length; j++) {
        const pet = pets[j];
        const produto = produtos[i % produtos.length]; 
        const servico = servicos[i % servicos.length]; 

        cliente.adicionarProdutoServicoAoPet(pet, produto, servico);

        if (i < 10) {
            const secondProduct = produtos[(i + 1) % produtos.length]; 
            cliente.adicionarProdutoServicoAoPet(pet, secondProduct);
        }
    }
}


while (execucao) {
    console.log();
    console.log(`Opções:`);
    console.log(`1 - CLIENTES`);
    console.log(`2 - PRODUTOS E SERVIÇOS`);
    console.log(`3 - LISTAGENS ESPECÍFICAS`);
    console.log(`0 - Sair`);
    console.log();

    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let execucaoClientes = true;
            while (execucaoClientes) {
                console.log();
                console.log(`Opções de Clientes:`);
                console.log(`1 - Cadastrar Cliente e Pets`);
                console.log(`2 - Listar Clientes e Pets`);
                console.log(`3 - Atualizar Cliente e Pets`);
                console.log(`4 - Excluir Cliente e Pets`);
                console.log(`0 - Voltar`);

                let opcaoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoCliente) {
                    case 1:
                        let cadastro = new CadastroCliente(empresa.getClientes)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                        break;
                    case 3:
                        let atualizacao = new AtualizarCliente(empresa.getClientes);
                        atualizacao.atualizar();
                        break;
                    case 4:
                        let exclusao = new ExcluirCliente(empresa.getClientes)
                        let clienteRemovido = exclusao.excluir()
                        if (clienteRemovido !== null) {
                            console.log(`\nCliente '${clienteRemovido.nome}' foi removido com sucesso.\n`);
                        }
                        break;
                    case 0:
                        execucaoClientes = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break;
        case 2:
            let execucaoProdutosServicos = true;
            while (execucaoProdutosServicos) {
                console.log();
                console.log(`Opções de Produtos e Serviços:`);
                console.log(`1 - Cadastrar Produto/Serviço`);
                console.log(`2 - Listar Produtos/Serviços`);
                console.log(`3 - Atualizar Produto/Serviço`);
                console.log(`4 - Excluir Produto/Serviço`);
                console.log(`5 - Atribuir Produto/Serviço a um Cliente e seu Pet`);
                console.log(`0 - Voltar`);
        
                let opcaoProdutosServicos = entrada.receberNumero(`Por favor, escolha uma opção: `)
        
                switch (opcaoProdutosServicos) {
                    case 1:
                        let cadastroProdutoServico = new CadastroProdutoServico(empresa.getProdutos, empresa.getServicos);
        cadastroProdutoServico.cadastrar();
        break;
                    case 2:
                        let listagem = new ListagemProdutosServicos(empresa.getProdutos, empresa.getServicos)
                        listagem.listar()
                        break;
                    case 3:
                        let atualizacao = new AtualizarProdutoServico(empresa.getProdutos, empresa.getServicos)
                        atualizacao.atualizar()
                        break;
                    case 4:
                        let exclusao = new ExcluirProdutoServico(empresa.getProdutos, empresa.getServicos);
                        let itemRemovido = exclusao.excluir();
                        if (itemRemovido !== null) {
                            let itemType = itemRemovido instanceof Produto ? "Produto" : "Serviço";
                            console.log(`\n${itemType} '${itemRemovido.getNome}' foi removido com sucesso.\n`);
                        }
                        break;
                    case 5:
                        let nomeProduto = entrada.receberTexto("Digite o nome do produto/serviço: ");
                        let nomeCliente = entrada.receberTexto("Digite o nome do cliente: ");
                        let nomePet = entrada.receberTexto("Digite o nome do pet: ");
                    
                        let produtoServicoEncontrado = [...empresa.getProdutos, ...empresa.getServicos].find(item => item.getNome === nomeProduto);
                        let clienteEncontrado = empresa.getClientes.find(cliente => cliente.getNome === nomeCliente);
                        let petEncontrado = clienteEncontrado ? clienteEncontrado.getPets.find(pet => pet.getNome === nomePet) : null;
                    
                        if (produtoServicoEncontrado && clienteEncontrado && petEncontrado) {
                            if (produtoServicoEncontrado instanceof Produto) {
                                clienteEncontrado.adicionarProdutoServicoAoPet(petEncontrado, produtoServicoEncontrado, undefined);
                            } else {
                                clienteEncontrado.adicionarProdutoServicoAoPet(petEncontrado, undefined, produtoServicoEncontrado);
                            }
                            console.log(`Produto/Serviço '${nomeProduto}' foi atribuído ao pet '${nomePet}' do cliente '${nomeCliente}'.`);
                        } else {
                            console.log("Produto/Serviço, Cliente ou Pet não encontrado.");
                        }
                        break;
                    case 0:
                        execucaoProdutosServicos = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break;    
        case 3:
            let execucaoListagensEspecificas = true;
            while (execucaoListagensEspecificas) {
                console.log();
                console.log(`Opções de Listagens Específicas:`);
                console.log(`1 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.`);
                console.log(`2 - Listagem geral dos serviços ou produtos mais consumidos.`);
                console.log(`3 - Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.`);
                console.log(`4 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.`);
                console.log(`0 - Voltar`);
        
                let opcaoListagensEspecificas = entrada.receberNumero(`Por favor, escolha uma opção: `)
        
                switch (opcaoListagensEspecificas) {
                    case 1:
                        let listagemDez = new ListagemDezClientesMaisQuant(empresa.getClientes)
                        listagemDez.listar()

                        break;
                    case 2:
                        let listagemGeralMaisCons = new ListagemGeralProdServMaisConsumidos(empresa.getClientes)
                        listagemGeralMaisCons.listar()
                        
                        break;
                    case 3:
                        let listagemProdServConsTipoRaca = new ListagemPorTipoRacaProdServMaisConsumidos(empresa.getClientes)
                        listagemProdServConsTipoRaca.listar()
                        break;
                    case 4:
                        let listagemCincoClientesMaisConsVal = new ListagemCincoClientesMaisConsumoValor(empresa.getClientes)
                        listagemCincoClientesMaisConsVal.listar()
                        break;
                    case 0:
                        execucaoListagensEspecificas = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
    }
