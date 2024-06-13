import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ExcluirClienteClientSide from "../excluir/excluirClienteClientSide";
import ObterClientes from "../obter/obterClientes";
import ExcluirCliente from "../excluir/excluirCliente";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    const obterClientes = () => {
        let getClientes = new ObterClientes();
        const clientes = getClientes.obter();
        clientes.then(clientes => {
            setClientes(clientes);
        });
    };

    const excluirRemoto = (idCliente) => {
        let excluir = new ExcluirCliente();
        excluir.excluir({ id: idCliente });
    };

    const excluirClientSide = (id, e) => {
        e.preventDefault();
        let excluirClientSide = new ExcluirClienteClientSide();
        let updatedClientes = excluirClientSide.excluir(clientes, id);
        setClientes(updatedClientes);
        excluirRemoto(id);
    };

    useEffect(() => {
        obterClientes();
    }, []);

    let lengthClientes = clientes.length;
    if (lengthClientes >= 0) {
        let listagem = clientes.map(cliente =>
            <li className="list-group-item" key={cliente['id']}>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="mb-1">{cliente['nome']}</h5>
                        <p className="mb-1">{cliente['nomeSocial']}</p>
                    </div>
                    <div>
                        <Link to={`/cliente/${cliente["id"]}`} className="btn btn-primary">
                            Informações
                        </Link>
                        <button onClick={(e) => excluirClientSide(cliente['id'], e)} className="btn btn-danger">
                            Excluir
                        </button>
                    </div>
                </div>
            </li>
        );
        return (
            <div className="clientes-lista">
                <h2 className="clientes-heading">Clientes</h2>
                <ul className="list-group">
                    {listagem}
                </ul>
            </div>
        );
    } else {
        return (
            <div> </div>
        );
    }
};

export default Clientes;