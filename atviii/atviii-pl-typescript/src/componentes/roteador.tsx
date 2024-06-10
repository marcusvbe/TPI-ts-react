import React, { useState } from 'react';
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

const Roteador: React.FC = () => {
    const [tela, setTela] = useState('Home');

    const selecionarView = (novaTela: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setTela(novaTela);
    }

    const menu = (
        <Menu
            seletorView={selecionarView}
            buttons={['Home', 'Clientes', 'Pets', 'Produtos/Serviços', 'Listagens', 'Fazer pedido']}
        />
    );

    switch (tela) {
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
        case 'Home':
            return (
                <>
                    {menu}
                    <Home />
                </>
            );
        default:
            return (
                <>
                    {menu}
                    <FormularioCadastroCliente />
                </>
            );
    }
}

export default Roteador;