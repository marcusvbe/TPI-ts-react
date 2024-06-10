import React, { useState, useEffect } from "react";
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

const ListaDeProdutosServicos: React.FC<Props> = () => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [counters, setCounters] = useState<Record<string, number>>({});
    const [cpfCliente, setCpfCliente] = useState<string>('');

    const produtos: Item[] = [
        { nome: "Racao para Caes", tipo: "produto", preco: 50.99 },
        { nome: "Racao para Gatos", tipo: "produto", preco: 45.50 },
    ];

    const servicos: Item[] = [
        { nome: "Banho", tipo: "servico", preco: 35.00 },
        { nome: "Tosa", tipo: "servico", preco: 60.00 },
    ];

    useEffect(() => {
        const elems = document.querySelectorAll(".modal");
        M.Modal.init(elems);
    }, [selectedItem]);

    const handleOpenModal = (item: Item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setCpfCliente('');
    };

    const handleIncrementCounter = () => {
        if (selectedItem) {
            const nome = selectedItem.nome;
            setCounters(prevCounters => ({
                ...prevCounters,
                [nome]: (prevCounters[nome] || 0) + 1,
            }));
        }
    };

    const handleDecrementCounter = () => {
        if (selectedItem) {
            const nome = selectedItem.nome;
            if (counters[nome] > 0) {
                setCounters(prevCounters => ({
                    ...prevCounters,
                    [nome]: prevCounters[nome] - 1,
                }));
            }
        }
    };

    const handleConfirm = () => {
        console.log(
            "Confirmação:",
            selectedItem,
            "Quantidade:",
            counters[selectedItem!.nome] || 0
        );
        // Add your confirmation logic here
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpfCliente(e.target.value);
    };

    const renderItem = (item: Item) => (
        <li className="collection-item" key={item.nome}>
            <div>
                {item.nome} (R$ {item.preco.toFixed(2)})
                <a
                    href="#modal-compra"
                    className="btn waves-effect waves-light secondary-content modal-trigger"
                    onClick={() => handleOpenModal(item)}
                >
                    Comprar
                </a>
            </div>
        </li>
    );

    return (
        <div className="container">
            {/* Modal (rendered only when an item is selected) */}
            {selectedItem && (
                <div id="modal-compra" className="modal">
                    <div className="modal-content">
                        <h4>Fazer pedido de {selectedItem.tipo}</h4>
                        <div>
                            <div className="input-field">
                                <input
                                    id="cpf_cliente"
                                    type="text"
                                    className="validate"
                                    value={cpfCliente}
                                    onChange={handleCpfChange}
                                />
                                <label htmlFor="cpf_cliente">CPF do cliente</label>
                            </div>
                            <h5>
                                Nome do {selectedItem.tipo}:{" "}
                                {selectedItem.nome}
                            </h5>
                            <h5>Preço: R$ {selectedItem.preco.toFixed(2)}</h5>
                            <h5>Quantidade:</h5>
                            <div className="d-flex flex-column align-items-center mt-3">
                                <div className="buttons d-flex align-items-center mb-2">
                                    <button
                                        onClick={handleDecrementCounter}
                                        className="btn"
                                        disabled={
                                            !selectedItem ||
                                            counters[selectedItem.nome] === 0
                                        }
                                    >
                                        <FaMinus style={{ fontSize: 20 }} />
                                    </button>
                                    <p className="counter">
                                        {counters[selectedItem.nome] || 0}
                                    </p>
                                    <button
                                        onClick={handleIncrementCounter}
                                        className="btn"
                                    >
                                        <FaPlus style={{ fontSize: 20 }} />
                                    </button>
                                </div>
                                <br />
                                <button
                                    onClick={handleConfirm}
                                    className="btn"
                                    disabled={!selectedItem}
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={handleCloseModal}
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
                    {produtos.map((item) => renderItem(item))}
                </ul>
            </div>

            <div className="servico">
                <h3 className="title">Serviços</h3>
                <ul className="collection">
                    {servicos.map((item) => renderItem(item))}
                </ul>
            </div>
        </div>
    );
}

export default ListaDeProdutosServicos;