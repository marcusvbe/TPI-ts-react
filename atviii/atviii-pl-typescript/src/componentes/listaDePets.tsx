import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import M from 'materialize-css';

import "./estilos/lista.css";
import "materialize-css/dist/css/materialize.min.css";

type Props = {};

const ListaDePets: React.FC<Props> = () => {
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        M.AutoInit();
    }, []);

    const handleShowInfoModal = (event: React.MouseEvent) => {
        event.preventDefault();
        const elem = document.getElementById('modal-pet');
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

    return (
        <div className="container">
            <div id="modal-pet" className="modal">
                <div className="modal-content">
                    <h4>Detalhes do pet</h4>
                    <p><strong>Nome:</strong></p>
                    <p><strong>Tipo:</strong></p>
                    <p><strong>Raça:</strong></p>
                    <p><strong>Gênero:</strong></p>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light modal-close" type="button">Fechar</button>
                </div>
            </div>

            <div id="modal-atualizar" className="modal">
                <div className="modal-content">
                    <h4>Atualizar pet</h4>
                    <form>
                        <div className="input-field">
                            <input id="cpf_cliente" type="text" className="validate" />
                            <label htmlFor="cpf_cliente">CPF do cliente:</label>
                        </div>

                        <h5>Pets:</h5>
                        <div className="input-field">
                            <input id="nome_pet" type="text" className="validate" />
                            <label htmlFor="nome_pet">Nome do pet:</label>
                        </div>

                        <div className="input-field">
                            <input id="tipo_pet" type="text" className="validate" />
                            <label htmlFor="tipo_pet">Tipo:</label>
                        </div>

                        <div className="input-field">
                            <input id="raca_pet" type="text" className="validate" />
                            <label htmlFor="raca_pet">Raça:</label>
                        </div>

                        <div className="input-field">
                            <input id="genero_pet" type="text" className="validate" />
                            <label htmlFor="genero_pet">Gênero:</label>
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

            <div className="conteudo">
                <h3 className="title">Pets</h3>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <a href="#" className="title" onClick={handleShowInfoModal}>Rex</a>
                        <div className="secondary-content">
                            <button onClick={handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                <AiFillEdit style={{ fontSize: 20 }} />
                            </button>
                            <button onClick={() => console.log("Deletar Pet")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                <AiFillDelete style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </li>
                    <li className="collection-item avatar">
                        <a href="#" className="title" onClick={handleShowInfoModal}>Bella</a>
                        <div className="secondary-content">
                            <button onClick={handleShowEditModal} type="button" className="btn-floating btn-small waves-effect waves-light blue">
                                <AiFillEdit style={{ fontSize: 20 }} />
                            </button>
                            <button onClick={() => console.log("Deletar Pet")} type="button" className="btn-floating btn-small waves-effect waves-light red">
                                <AiFillDelete style={{ fontSize: 20 }} />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ListaDePets;