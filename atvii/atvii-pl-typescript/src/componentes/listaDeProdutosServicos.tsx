import React, { Component } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import "./estilos/lista.css";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';

type Props = {};

interface State {
    showInfoModal: boolean;
    showEditModal: boolean;
}

export default class ListaProdutosServico extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showInfoModal: false,
            showEditModal: false,
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    componentDidUpdate() {
        M.AutoInit();
    }

    handleShowInfoModal = (event: React.MouseEvent) => {
        event.preventDefault();
        const elem = document.getElementById('modal-produtoServico');
        if (elem !== null) {
            const instance = M.Modal.getInstance(elem);
            instance.open();
        }
    };

    handleCloseInfoModal = () => {
        this.setState({ showInfoModal: false });
    };

    handleShowEditModal = (event: React.MouseEvent) => {
        event.preventDefault();
        const elem = document.getElementById('modal-atualizar');
        if (elem !== null) {
            const instance = M.Modal.getInstance(elem);
            instance.open();
        }
    };

    handleCloseEditModal = () => {
        this.setState({ showEditModal: false });
    };

    render() {

        return (
            <div className="container">
                <div id="modal-produtoServico" className="modal">
                    <div className="modal-content">
                        <h4>Informações do produto/serviço</h4>
                        <p><strong>Categoria:</strong></p>
                        <p><strong>Nome:</strong></p>
                        <p><strong>Preço:</strong></p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light modal-close" type="button">Fechar</button>
                    </div>
                </div>

                <div id="modal-atualizar" className="modal">
                    <div className="modal-content">
                        <h4>Atualizar produto/serviço</h4>
                        <form>
                            <div className="input-field">
                                <select id="tipo">
                                    <option value="" disabled selected>Tipo</option>
                                    <option value="">Selecione a opção que deseja cadastrar</option>
                                    <option value="produto">Produto</option>
                                    <option value="servico">Serviço</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <input id="nome" type="text" className="validate"/>
                                <label htmlFor="nome">Nome do produto/serviço:</label>
                            </div>

                            <div className="input-field">
                                <input id="valor" type="number" className="validate"/>
                                <label htmlFor="valor">Valor do produto/serviço:</label>
                            </div>

                            <div className="input-field center-align">
                                <button className="btn waves-effect waves-light" type="button">Atualizar</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn waves-effect waves-light modal-close" type="button">Fechar</button>
                    </div>
                </div>

                <div className="produto">
                    <h3 className="title">Produtos</h3>
                    <ul className="collection">
                        <li className="collection-item avatar">
                        <a href="#" className="title" onClick={this.handleShowInfoModal}>Racao para Caes</a>
                            <div className="secondary-content">
                                <button onClick={this.handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                    <AiFillEdit style={{ fontSize: 20 }} />
                                </button>
                                <button onClick={() => console.log("Deletar Produto")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                    <AiFillDelete style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </li>
                        <li className="collection-item avatar">
                            <a href="#" className="title" onClick={this.handleShowInfoModal}>Racao para Gatos</a>
                            <div className="secondary-content">
                                <button onClick={this.handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                    <AiFillEdit style={{ fontSize: 20 }} />
                                </button>
                                <button onClick={() => console.log("Deletar Produto")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                    <AiFillDelete style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="servico">
                    <h3 className="title">Serviços</h3>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <a href="#" className="title" onClick={this.handleShowInfoModal}>Banho</a>
                            <div className="secondary-content">
                                <button onClick={this.handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                    <AiFillEdit style={{ fontSize: 20 }} />
                                </button>
                                <button onClick={() => console.log("Deletar Serviço")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                    <AiFillDelete style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </li>
                        <li className="collection-item avatar">
                            <a href="#" className="title" onClick={this.handleShowInfoModal}>Tosa</a>
                            <div className="secondary-content">
                                <button onClick={this.handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                    <AiFillEdit style={{ fontSize: 20 }} />
                                </button>
                                <button onClick={() => console.log("Deletar Serviço")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                    <AiFillDelete style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}