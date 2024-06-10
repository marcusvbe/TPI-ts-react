import { Component, ChangeEvent } from "react";
import "./estilos/form.css";
import 'materialize-css/dist/css/materialize.min.css';


type TelefoneInfo = {
    telefone: string;
};

type RgInfo = {
    rg: string;
    dataEmissao: string;
};

type Props = {};

type State = {
    rgList: RgInfo[];
    telefoneList: TelefoneInfo[];
};

export default class FormularioCadastroCliente extends Component<Props, State> {
    state: State = {
        rgList: [{ rg: "", dataEmissao: "" }],
        telefoneList: [{ telefone: "" }],
    };

    addRgField = () => {
        this.setState((prevState) => ({
            rgList: [...prevState.rgList, { rg: "", dataEmissao: "" }],
        }));
    };

    addTelefoneField = () => {
        this.setState((prevState) => ({
            telefoneList: [...prevState.telefoneList, { telefone: "" }],
        }));
    };

    handleRgChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedRgList = [...prevState.rgList];
            updatedRgList[index].rg = value;
            return { rgList: updatedRgList };
        });
    };

    handleDataEmissaoChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedRgList = [...prevState.rgList];
            updatedRgList[index].dataEmissao = value;
            return { rgList: updatedRgList };
        });
    };

    handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedTelefoneList = [...prevState.telefoneList];
            updatedTelefoneList[index].telefone = value;
            return { telefoneList: updatedTelefoneList };
        });
    };

    render() {

        return (
            <div className="container">
                <h3 className="center-align">
                    Cadastro de Clientes
                </h3>
                <form>
                    <div className="input-field">
                        <input id="nome" type="text" className="validate" />
                        <label htmlFor="nome">Nome</label>
                    </div>

                    <div className="input-field">
                        <input id="nome_social" type="text" className="validate" />
                        <label htmlFor="nome_social">Nome social</label>
                    </div>

                    <div className="input-field">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="input-field">
                        <input id="cpf" type="text" className="validate" />
                        <label htmlFor="cpf">CPF</label>
                    </div>

                    <div className="input-field">
                        <input id="data_emissao_cpf" type="date" className="validate" />
                        <label htmlFor="data_emissao_cpf">Data de Emissão do CPF</label>
                    </div>

                    {this.state.rgList.map((rg, index) => (
                        <div key={index}>
                            <div className="input-field">
                                <input
                                    id={`rg_${index}`}
                                    type="text"
                                    className="validate"
                                    value={rg.rg}
                                    onChange={(e) => this.handleRgChange(e, index)}
                                />
                                <label htmlFor={`rg_${index}`}>RG</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id={`data_emissao_rg_${index}`}
                                    type="date"
                                    className="validate"
                                    value={rg.dataEmissao}
                                    onChange={(e) => this.handleDataEmissaoChange(e, index)}
                                />
                                <label htmlFor={`data_emissao_rg_${index}`}>Data de Emissão do RG</label>
                            </div>
                        </div>
                    ))}

                    <button
                        className="btn waves-effect waves-light"
                        type="button"
                        onClick={this.addRgField}
                    >
                        Adicionar RG
                    </button>

                    {this.state.telefoneList.map((telefone, index) => (
                        <div key={index} className="input-field">
                            <input
                                id={`telefone_${index}`}
                                type="text"
                                className="validate"
                                value={telefone.telefone}
                                onChange={(e) => this.handleTelefoneChange(e, index)}
                            />
                            <label htmlFor={`telefone_${index}`}>Telefone</label>
                        </div>
                    ))}

                    <button
                        className="btn waves-effect waves-light"
                        type="button"
                        onClick={this.addTelefoneField}
                    >
                        Adicionar Telefone
                    </button>

                    <div className="center-align">
                        <button className="btn waves-effect waves-light" type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
