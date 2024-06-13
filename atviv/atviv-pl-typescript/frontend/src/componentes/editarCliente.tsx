import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ExcluirClienteClientSide from "../excluir/excluirClienteClientSide";
import ObterClientes from "../obter/obterClientes";
import ExcluirCliente from "../excluir/excluirCliente";

const Clientes = () => {
    const [clientes, setClientes] = useState([]);

    const buscarClientes = () => {
        let obterClientes = new ObterClientes();
        const clientes = obterClientes.obter();
        clientes.then(clientes => {
            setClientes(clientes);
        });
    };

    const excluirServerSide = (idCliente) => {
        let excluir = new ExcluirCliente();
        excluir.excluir({ id: idCliente });
    };

    const excluirClientSide = (id, e) => {
        e.preventDefault();
        let excluirClienteClientSide = new ExcluirClienteClientSide();
        let updatedClientes = excluirClienteClientSide.excluir(clientes, id);
        setClientes(updatedClientes);
        excluirServerSide(id);
    };

    useEffect(() => {
        buscarClientes();
    }, []);

    let numeroClientes = clientes.length;
    if (numeroClientes >= 0) {
        let listagem = clientes.map(cliente =>
            <li className="list-group-item" key={cliente['id']}>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="mb-1">{cliente['nome']}</h5>
                        <p className="mb-1">{cliente['nomeSocial']}</p>
                    </div>
                    <div>
                        <Link to={`/cliente/${cliente["id"]}`} className="btn btn-primary">
                            Detalhes
                        </Link>
                        <button onClick={(e) => excluirClientSide(cliente['id'], e)} className="btn btn-danger">
                            Excluir
                        </button>
                    </div>
                </div>
            </li>
        );
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item active"><h4>Clientes</h4></li>
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