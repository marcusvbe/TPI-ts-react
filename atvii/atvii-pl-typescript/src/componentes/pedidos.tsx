import React, { Component } from "react";
import "./estilos/lista.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

interface Item {
    nome: string;
    tipo: "produto" | "servico";
    preco: number;
}

type Props = {};

interface State {
    selectedItem: Item | null;
    counters: Record<string, number>;
    cpfCliente: string; // State to hold the CPF input
}

export default class ListaDeProdutosServicos extends Component<Props, State> {
    produtos: Item[] = [
        { nome: "Racao para Caes", tipo: "produto", preco: 50.99 },
        { nome: "Racao para Gatos", tipo: "produto", preco: 45.50 },
    ];

    servicos: Item[] = [
        { nome: "Banho", tipo: "servico", preco: 35.00 },
        { nome: "Tosa", tipo: "servico", preco: 60.00 },
    ];

    constructor(props: Props) {
        super(props);
        this.state = {
            selectedItem: null,
            counters: {},
            cpfCliente: '',
        };
    }

    componentDidMount() {
        this.initializeModals(); // Call on mount to initialize modals initially
    }

    componentDidUpdate(_prevProps: Props, prevState: State) {
        if (prevState.selectedItem !== this.state.selectedItem) {
            this.initializeModals(); // Re-initialize when the selected item changes
        }
    }

    initializeModals() {
        const elems = document.querySelectorAll(".modal");
        M.Modal.init(elems);
    }


    handleOpenModal = (item: Item) => {
        this.setState({ selectedItem: item });
    };

    handleCloseModal = () => {
        this.setState({
            selectedItem: null,
            cpfCliente: '', // Clear CPF input when modal closes
        });
    };

    handleIncrementCounter = () => {
        if (this.state.selectedItem) {
            const nome = this.state.selectedItem.nome;
            this.setState((prevState) => ({
                counters: {
                    ...prevState.counters,
                    [nome]: (prevState.counters[nome] || 0) + 1,
                },
            }));
        }
    };

    handleDecrementCounter = () => {
        if (this.state.selectedItem) {
            const nome = this.state.selectedItem.nome;
            if (this.state.counters[nome] > 0) {
                this.setState((prevState) => ({
                    counters: {
                        ...prevState.counters,
                        [nome]: prevState.counters[nome] - 1,
                    },
                }));
            }
        }
    };

    handleConfirm = () => {
        console.log(
            "Confirmação:",
            this.state.selectedItem,
            "Quantidade:",
            this.state.counters[this.state.selectedItem!.nome] || 0
        );
        // Add your confirmation logic here
    };

    handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ cpfCliente: e.target.value });
    };

    renderItem(item: Item) {
        return (
            <li className="collection-item" key={item.nome}>
                <div>
                    {item.nome} (R$ {item.preco.toFixed(2)})
                    <a
                        href="#modal-compra"
                        className="btn waves-effect waves-light secondary-content modal-trigger"
                        onClick={() => this.handleOpenModal(item)}
                    >
                        Comprar
                    </a>
                </div>
            </li>
        );
    }

    render() {
        return (
            <div className="container">
                {/* Modal (rendered only when an item is selected) */}
                {this.state.selectedItem && (
                    <div id="modal-compra" className="modal">
                        <div className="modal-content">
                            <h4>Fazer pedido de {this.state.selectedItem.tipo}</h4>
                            <div>
                                <div className="input-field">
                                    <input
                                        id="cpf_cliente"
                                        type="text"
                                        className="validate"
                                        value={this.state.cpfCliente}
                                        onChange={this.handleCpfChange}
                                    />
                                    <label htmlFor="cpf_cliente">CPF do cliente</label>
                                </div>
                                <h5>
                                    Nome do {this.state.selectedItem.tipo}:{" "}
                                    {this.state.selectedItem.nome}
                                </h5>
                                <h5>Preço: R$ {this.state.selectedItem.preco.toFixed(2)}</h5>
                                <h5>Quantidade:</h5>
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <div className="buttons d-flex align-items-center mb-2">
                                        <button
                                            onClick={this.handleDecrementCounter}
                                            className="btn"
                                            disabled={
                                                !this.state.selectedItem ||
                                                this.state.counters[this.state.selectedItem.nome] === 0
                                            }
                                        >
                                            <FaMinus style={{ fontSize: 20 }} />
                                        </button>
                                        <p className="counter">
                                            {this.state.counters[this.state.selectedItem.nome] || 0}
                                        </p>
                                        <button
                                            onClick={this.handleIncrementCounter}
                                            className="btn"
                                        >
                                            <FaPlus style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                    <br />
                                    <button
                                        onClick={this.handleConfirm}
                                        className="btn"
                                        disabled={!this.state.selectedItem}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={this.handleCloseModal}
                                className="btn waves-effect waves-green modal-close"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}

                <div className="produto">
                    <h3 className="title">Produtos</h3>
                    <ul className="collection">
                        {this.produtos.map((item) => this.renderItem(item))}
                    </ul>
                </div>

                <div className="servico">
                    <h3 className="title">Serviços</h3>
                    <ul className="collection">
                        {this.servicos.map((item) => this.renderItem(item))}
                    </ul>
                </div>
            </div>
        );
    }
}