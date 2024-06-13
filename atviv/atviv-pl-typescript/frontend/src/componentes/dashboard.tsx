import { Component } from "react";
import Menu from "./menu";
import Clientes from "./clientes";


type props = {
    tituloSite: string
}

export default class Dashboard extends Component<props> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div>
                    <Menu tituloSite={this.props.tituloSite} />
                    <Clientes />
                </div>
            )
        }
}
