import { Component } from "react";
import M from 'materialize-css';
import "./estilos/form.css"
import 'materialize-css/dist/css/materialize.min.css';

type props = {}

export default class FormularioCadastroProdutoServico extends Component<props> {

    componentDidMount() {
        M.AutoInit();
    }

    componentDidUpdate() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="container">
                <h3 className="center-align">Cadastro de produtos e serviços</h3>
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
                        <input id="nome_produto_servico" type="text" className="validate" />
                        <label htmlFor="nome_produto_servico">Nome do produto/serviço:</label>
                    </div>
                    <div className="input-field">
                        <span className="prefix">R$</span>
                        <input id="valor_produto_servico" type="number" className="validate" />
                        <label htmlFor="valor_produto_servico">Valor do produto/serviço:</label>
                    </div>

                    <div className="center-align">
                        <button className="btn waves-effect waves-light" type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}