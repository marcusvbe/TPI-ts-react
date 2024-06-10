import React, { useState, useEffect, ChangeEvent } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import "./estilos/lista.css";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';

type TelefoneInfo = {
    telefone: string;
};

type RgInfo = {
    rg: string;
    dataEmissao: string;
};

const ListaCliente = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showProdutoModal, setShowProdutoModal] = useState(false);
    const [rgList, setRgList] = useState<RgInfo[]>([{ rg: "", dataEmissao: "" }]);
    const [telefoneList, setTelefoneList] = useState<TelefoneInfo[]>([{ telefone: "" }]);

    useEffect(() => {
        M.AutoInit();
    });


    const handleShowProdutoModal = (event: React.MouseEvent) => {
        event.preventDefault();
        const elem = document.getElementById('modal-produto');
        if (elem !== null) {
            const instance = M.Modal.getInstance(elem);
            instance.open();
        }
    };

    const handleCloseProdutoModal = () => {
        setShowProdutoModal(false);
    }

    const handleShowInfoModal = (event: React.MouseEvent) => {
        event.preventDefault();
        const elem = document.getElementById('modal-cliente');
        if (elem !== null) {
            const instance = M.Modal.getInstance(elem);
            instance.open();
        }
    };

    const handleCloseInfoModal = () => {
        setShowInfoModal(false);
    };

    const handleShowEditModal = (event: React.MouseEvent) => {
        event.preventDefault();
        const elem = document.getElementById('modal-atualizar');
        if (elem !== null) {
            const instance = M.Modal.getInstance(elem);
            instance.open();
        }
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const addRgField = () => {
        setRgList([...rgList, { rg: "", dataEmissao: "" }]);
    };

    const addTelefoneField = () => {
        setTelefoneList([...telefoneList, { telefone: "" }]);
    };

    const handleRgChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        setRgList(prevState => {
            const updatedRgList = [...prevState];
            updatedRgList[index].rg = value;
            return updatedRgList;
        });
    };

    const handleDataEmissaoChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        setRgList(prevState => {
            const updatedRgList = [...prevState];
            updatedRgList[index].dataEmissao = value;
            return updatedRgList;
        });
    };

    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        setTelefoneList(prevState => {
            const updatedTelefoneList = [...prevState];
            updatedTelefoneList[index].telefone = value;
            return updatedTelefoneList;
        });
    };

    return (
        <div className="container">
            <div id="modal-cliente" className="modal">
                <div className="modal-content">
                    <h4>Dados do cliente</h4>
                    <p>Nome:</p>
                    <p>Nome social:</p>
                    <p>E-mail:</p>
                    <p>CPF:</p>
                    <p>Data de emissão do CPF:</p>
                    <p>RG:</p>
                    <p>Data de emissão do RG:</p>
                    <p>Telefone:</p>

                    <div className="pets-cliente">
                        <h5 style={{ textAlign: "center" }}>Pets</h5>
                        <p>Nome:</p>
                        <p>Tipo:</p>
                        <p>Raça:</p>
                        <p>Gênero:</p>
                    </div>

                    <div className="produtos-servicos">
                        <h5 style={{ textAlign: "center" }}>Produtos e serviços consumidos</h5>
                        <p>Nome:</p>
                        <p>Valor:</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light modal-close" type="button">Fechar</button>
                </div>
            </div>

            <div id="modal-atualizar" className="modal">
                <div className="modal-content">
                    <h4>Atualizar cliente</h4>
                    <form>
                        <div className="input-field">
                            <input id="nome" type="text" className="validate" />
                            <label htmlFor="nome">Nome:</label>
                        </div>

                        <div className="input-field">
                            <input id="nome_social" type="text" className="validate" />
                            <label htmlFor="nome_social">Nome social:</label>
                        </div>

                        <div className="input-field">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-mail:</label>
                        </div>

                        <div className="input-field">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF:</label>
                        </div>

                        <div className="input-field">
                            <input id="data_emissao_cpf" type="date" className="validate" />
                            <label htmlFor="data_emissao_cpf">Data de Emissão do CPF:</label>
                        </div>

                        {rgList.map((rg, index) => (
                            <div key={index}>
                                <div className="input-field">
                                    <input id={`rg_${index}`} type="text" className="validate" value={rg.rg} onChange={(e) => handleRgChange(e, index)} />
                                    <label htmlFor={`rg_${index}`}>RG</label>
                                </div>
                                <div className="input-field">
                                    <input id={`data_emissao_rg_${index}`} type="date" className="validate" value={rg.dataEmissao} onChange={(e) => handleDataEmissaoChange(e, index)} />
                                    <label htmlFor={`data_emissao_rg_${index}`}>Data de Emissão do RG</label>
                                </div>
                            </div>
                        ))}

                        <button className="btn waves-effect waves-light" type="button" onClick={addRgField}>Adicionar RG</button>

                        {telefoneList.map((telefone, index) => (
                            <div key={index} className="input-field">
                                <input id={`telefone_${index}`} type="text" className="validate" value={telefone.telefone} onChange={(e) => handleTelefoneChange(e, index)} />
                                <label htmlFor={`telefone_${index}`}>Telefone</label>
                            </div>
                        ))}

                        <button className="btn waves-effect waves-light" type="button" onClick={addTelefoneField}>Adicionar Telefone</button>

                        <div className="input-field center-align">
                            <button className="btn waves-effect waves-light" type="button">Atualizar</button>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light modal-close" type="button">Finalizar</button>
                </div>
            </div>

            <div id="modal-produto" className="modal">
                <div className="modal-content">
                    <h4>Produtos/serviços consumidos</h4>
                    <div className="lista-produtosServicos">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p style={{ margin: 0 }}><strong>Banho:</strong></p>
                            <div className="buttons" style={{ marginLeft: '5px' }}>
                                <button type="button" className="botao-excluir" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                    <AiFillDelete style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <p><strong>Preço do banho:</strong></p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p style={{ margin: 0 }}><strong>Tosa:</strong></p>
                            <div className="buttons" style={{ marginLeft: '5px' }}>
                                <button type="button" className="botao-excluir" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                    <AiFillDelete style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <p><strong>Preço da tosa:</strong></p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light modal-close" type="button">Fechar</button>
                </div>
            </div>

            <div className="conteudo">
                <h3 className="title">Clientes</h3>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <a href="#" className="title" onClick={handleShowInfoModal}>Joao</a>
                        <div className="secondary-content">
                            <button onClick={handleShowProdutoModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                <FaShoppingCart style={{ fontSize: 20 }} />
                            </button>
                            <button onClick={handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                <AiFillEdit style={{ fontSize: 20 }} />
                            </button>
                            <button onClick={() => console.log("Deletar Cliente")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                <AiFillDelete style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </li>
                    <li className="collection-item avatar">
                        <a href="#" className="title" onClick={handleShowInfoModal}>Antonio</a>
                        <div className="secondary-content">
                            <button onClick={handleShowProdutoModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                <FaShoppingCart style={{ fontSize: 20 }} />
                            </button>
                            <button onClick={handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                <AiFillEdit style={{ fontSize: 20 }} />
                            </button>
                            <button onClick={() => console.log("Deletar Cliente")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                <AiFillDelete style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ListaCliente;