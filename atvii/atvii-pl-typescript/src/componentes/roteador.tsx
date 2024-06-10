import React, { Component } from 'react';
import Menu from './menu';
import ListaCliente from './listaDeClientes';
import FormularioCadastroCliente from './formularioCadastroCliente';
import FormularioCadastroProdutoServico from './formularioCadastroProdutoServico';
import FormularioCadastroPet from './formularioCadastroPet';
import ListaProdutoServico from './listaDeProdutosServicos';
import ListaDePets from './listaDePets';
import ListagensEspecificas from './listagensEspecificas';
import Compras from './pedidos';
import Home from './home';

type RoteadorState = {
    tela: string;
};

type RoteadorProps = {}; // No additional props needed in this component

export default class Roteador extends Component<RoteadorProps, RoteadorState> {
    constructor(props: RoteadorProps) {
        super(props);
        this.state = {
            tela: 'Home', // Initial view is 'Home'
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        this.setState({ tela: novaTela });
    }

    render() {
        const menu = (
            <Menu
                seletorView={this.selecionarView}
                buttons={['Home', 'Clientes', 'Pets', 'Produtos/Serviços', 'Listagens', 'Fazer pedido']}
            />
        );

        switch (this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {menu}
                        <ListaCliente />
                    </>
                );
            case 'Cadastro de Pets':
                return (
                    <>
                        {menu}
                        <FormularioCadastroPet />
                    </>
                );
            case 'Cadastro de Produto e Serviço':
                return (
                    <>
                        {menu}
                        <FormularioCadastroProdutoServico />
                    </>
                );
            case 'Produtos/Serviços':
                return (
                    <>
                        {menu}
                        <ListaProdutoServico />
                    </>
                );
            case 'Pets':
                return (
                    <>
                        {menu}
                        <ListaDePets />
                    </>
                );
            case 'Listagens':
                return (
                    <>
                        {menu}
                        <ListagensEspecificas />
                    </>
                );
            case 'Fazer pedido':
                return (
                    <>
                        {menu}
                        <Compras />
                    </>
                );
            case 'Home': // Explicitly handle the 'Home' case
                return (
                    <>
                        {menu}
                        <Home />
                    </>
                );
            default: // This handles any unexpected cases
                return (
                    <>
                        {menu}
                        <FormularioCadastroCliente />
                    </>
                );
        }
    }
}