import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';

type props = {
    buttons: string[],
    seletorView: Function
}

export default class Menu extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.createMenuItems = this.createMenuItems.bind(this);
    }

    componentDidMount() {
        M.AutoInit();
    }

    componentDidUpdate() {
        M.AutoInit();
    }

    createMenuItems() {
        if (this.props.buttons.length <= 0) {
            return <></>;
        } else {
            let itens = this.props.buttons.map(valor => (
                <li key={valor} className="tab">
                    <a href="#" onClick={(e) => this.props.seletorView(valor, e)} style={{ fontSize: '18px' }}>
                        {valor}
                    </a>
                </li>
            ));
            return itens;
        }
    }

    render() {
        return (
            <>
                <nav className="menu-color">
                    <div className="nav-wrapper">
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <ul className="left hide-on-med-and-down" style={{ paddingLeft: '10px' }}>
                                {this.createMenuItems()}
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="#" onClick={(e) => this.props.seletorView('Cadastro de Cliente', e)}
                                       style={{fontSize: '18px'}}>
                                        Cadastro de Cliente
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => this.props.seletorView('Cadastro de Pets', e)}
                                       style={{fontSize: '18px'}}>
                                        Cadastro de Pets
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => this.props.seletorView('Cadastro de Produto e Serviço', e)}
                                       style={{fontSize: '18px'}}>
                                        Cadastro de Produtos/Serviços
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="sidenav" id="mobile-demo">
                            {this.createMenuItems()}
                            <li>
                                <a href="#" onClick={(e) => this.props.seletorView('Cadastro de Cliente', e)}
                                   style={{fontSize: '18px'}}>
                                    Cadastro de Cliente
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.props.seletorView('Cadastro de Pets', e)}
                                   style={{fontSize: '18px'}}>
                                    Cadastro de Pets
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => this.props.seletorView('Cadastro de Produto e Serviço', e)}
                                   style={{fontSize: '18px'}}>
                                    Cadastro de Produtos/Serviços
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}