import React, { useState, ChangeEvent } from "react";
import "./estilos/form.css";
import 'materialize-css/dist/css/materialize.min.css';

type TelefoneInfo = {
    telefone: string;
};

type RgInfo = {
    rg: string;
    dataEmissao: string;
};

const FormularioCadastroCliente = () => {
    const [rgList, setRgList] = useState<RgInfo[]>([{ rg: "", dataEmissao: "" }]);
    const [telefoneList, setTelefoneList] = useState<TelefoneInfo[]>([{ telefone: "" }]);

    const addRgField = () => {
        setRgList([...rgList, { rg: "", dataEmissao: "" }]);
    };

    const addTelefoneField = () => {
        setTelefoneList([...telefoneList, { telefone: "" }]);
    };

    const handleRgChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const updatedRgList = [...rgList];
        updatedRgList[index].rg = value;
        setRgList(updatedRgList);
    };

    const handleDataEmissaoChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const updatedRgList = [...rgList];
        updatedRgList[index].dataEmissao = value;
        setRgList(updatedRgList);
    };

    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const updatedTelefoneList = [...telefoneList];
        updatedTelefoneList[index].telefone = value;
        setTelefoneList(updatedTelefoneList);
    };

    return (
        <div className="container-fluid">
            <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
                Cadastro de Clientes
            </h3>
            <form>
                <label className="form-titulo">Nome:</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Digite o nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">Nome social:</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Digite o nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">E-mail:</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Digite o E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">CPF:</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder=" Digite o CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">Data de Emissão do CPF:</label>
                <div className="input-group mb-3">
                    <input type="date" className="form-control" placeholder="Data de Emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" />
                </div>

                <label className="form-titulo">RG:</label>
                {rgList.map((rg, index) => (
                    <div key={index}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o RG"
                                value={rg.rg}
                                onChange={(e) => handleRgChange(e, index)}
                            />
                        </div>
                        <div>
                            <label className="form-titulo">Data de Emissão do RG:</label>
                            <div className="input-group mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Data de Emissão do RG"
                                    value={rg.dataEmissao}
                                    onChange={(e) => handleDataEmissaoChange(e, index)}
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={addRgField}
                >
                    Adicionar RG
                </button>

                <br />

                <label className="form-titulo">Telefone:</label>
                {telefoneList.map((telefone, index) => (
                    <div key={index} className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o telefone"
                            value={telefone.telefone}
                            onChange={(e) => handleTelefoneChange(e, index)}
                        />
                    </div>
                ))}

                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={addTelefoneField}
                >
                    Adicionar Telefone
                </button>

                <div className="input-group mb-3">
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <button className="btn btn-outline-secondary" type="button">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormularioCadastroCliente;