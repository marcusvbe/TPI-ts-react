import React, { Component } from "react";
import "./estilos/home.css";
import "materialize-css/dist/css/materialize.min.css";

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <div className="container">
                <h2 className="title-home">PetLovers</h2>
                <br></br>
                <br></br>
                <h3 className="subtitle-home">Bem-vindo ao Grupo PetLovers, sua plataforma de pet shops e clínicas veterinárias!</h3>
            </div>
        );
    }
}