import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type Props = {
    tituloSite: string
}

const Menu: React.FC<Props> = ({ tituloSite }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <a className="navbar-brand navbar-brand-right" href="/">{tituloSite}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href='/'> Ver clientes </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-custom" href='/cliente/cadastrar'> Cadastrar cliente </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu;