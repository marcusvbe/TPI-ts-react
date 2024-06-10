import React, { useState, ChangeEvent } from "react";
import "./estilos/form.css";
import 'materialize-css/dist/css/materialize.min.css';

type Pet = {
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
};

const FormularioCadastroPet = () => {
    const [petList, setPetList] = useState<Pet[]>([{ nome: "", tipo: "", raca: "", genero: "" }]);

    const addPetField = () => {
        setPetList([...petList, { nome: "", tipo: "", raca: "", genero: "" }]);
    };

    const handlePetChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
        campo: keyof Pet
    ) => {
        const { value } = e.target;
        const updatedPetList = [...petList];
        updatedPetList[index][campo] = value;
        setPetList(updatedPetList);
    };

    return (
        <div className="container">
            <h3 className="center-align">
                Cadastro de Pets
            </h3>
            <form>
                <div className="input-field">
                    <input id="cpf_cliente" type="text" className="validate" />
                    <label htmlFor="cpf_cliente">CPF do cliente</label>
                </div>

                <h5 className="form-title">Pets:</h5>
                {petList.map((pet, index) => (
                    <div key={index}>
                        <div className="input-field">
                            <input
                                id={`nome_pet_${index}`}
                                type="text"
                                className="validate"
                                value={pet.nome}
                                onChange={(e) => handlePetChange(e, index, "nome")}
                            />
                            <label htmlFor={`nome_pet_${index}`}>Nome do pet</label>
                        </div>

                        <div className="input-field">
                            <input
                                id={`tipo_pet_${index}`}
                                type="text"
                                className="validate"
                                value={pet.tipo}
                                onChange={(e) => handlePetChange(e, index, "tipo")}
                            />
                            <label htmlFor={`tipo_pet_${index}`}>Tipo</label>
                        </div>

                        <div className="input-field">
                            <input
                                id={`raca_pet_${index}`}
                                type="text"
                                className="validate"
                                value={pet.raca}
                                onChange={(e) => handlePetChange(e, index, "raca")}
                            />
                            <label htmlFor={`raca_pet_${index}`}>Raça</label>
                        </div>

                        <div className="input-field">
                            <input
                                id={`genero_pet_${index}`}
                                type="text"
                                className="validate"
                                value={pet.genero}
                                onChange={(e) => handlePetChange(e, index, "genero")}
                            />
                            <label htmlFor={`genero_pet_${index}`}>Gênero</label>
                        </div>
                    </div>
                ))}

                <button
                    className="btn waves-effect waves-light"
                    type="button"
                    onClick={addPetField}
                >
                    Adicionar Pet
                </button>

                <div className="center-align">
                    <button className="btn waves-effect waves-light" type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioCadastroPet;