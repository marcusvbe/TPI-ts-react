import React, { Component } from 'react';
import './estilos/lista.css'; // Keep your custom styles if needed
import 'materialize-css/dist/css/materialize.min.css';

type Props = {};

export default class ListagensEspecificas extends Component<Props> {
    renderList(title: string, items: string[]) {
        return (
            <div>
                <h5 className="subtitle">{title}</h5>
                <ul className="collection">
                    {items.map((item, index) => (
                        <li key={index} className="collection-item">
                            <a href="#" className="link">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    renderListWithSubheaders(title: string, data: Record<string, string[]>) {
        return (
            <div>
                <h5 className="subtitle">{title}</h5>
                {Object.entries(data).map(([subheader, items]) => (
                    <div key={subheader}>
                        <h6 className="subtitle">{subheader}</h6>
                        <ul className="collection">
                            {items.map((item, index) => (
                                <li key={index} className="collection-item">
                                    <a href="#" className="link">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }

    render() {
        // Sample Data (replace with your actual data)
        const top10ClientsQuantity = [
            'Joao', 'Antonio', 'Manuel', 'Jose', 'Luis',
            'Paulo', 'Carlos', 'Pedro', 'Lucas', 'Jonas'
        ];
        const top5ClientsValue = ['Jonas', 'Jose', 'Carlos', 'Luis', 'Fernanda'];
        const topServices = ['Banho', 'Tosa', 'Consulta Veterinaria', 'Vacinacao', 'Adestramento'];
        const topProducts = ['Racao para Caes', 'Racao para Gatos', 'Brinquedos para Pets', 'Coleiras', 'Camas para Pets'];

        const topProductsByType = {
            'Cão': ['Racao para Caes', 'Brinquedos para Pets', 'Camas para Pets'],
            'Gato': ['Racao para Gato', 'Coleiras', 'Shampoo para Pets']
        };
        const topServicesByType = {
            'Cão': ['Banho', 'Consulta Veterinaria', 'Adestramento'],
            'Gato': ['Tosa', 'Vacinacao', 'Hotel para Pets']
        };

        const topProductsByBreed = {
            'Cão - Raça: Vira-lata': ['Racao para Caes', 'Brinquedos para Pets', 'Camas para Pets'],
            'Gato - Raça: Vira-lata': ['Racao para Gatos', 'Coleira', 'Shampoo para Pets']
        };
        const topServicesByBreed = {
            'Cão - Raça: Vira-lata': ['Banho', 'Consulta Veterinaria', 'Adestramento'],
            'Gato - Raça: Vira-lata': ['Tosa', 'Vacinacao', 'Hotel para Pets']
        };

        return (
            <div className="container container-narrow">
                <div className="listagens">
                    <h3 className="title">Listagens Específicas</h3>
                    <br />

                    {this.renderList('10 clientes que mais consumiram produtos ou serviços (em quantidade):', top10ClientsQuantity)}
                    {this.renderList('5 clientes que mais consumiram produtos ou serviços (em valor):', top5ClientsValue)}
                    {this.renderList('Serviços mais consumidos em geral:', topServices)}
                    {this.renderList('Produtos mais consumidos em geral:', topProducts)}
                    {this.renderListWithSubheaders('Produtos mais consumidos (por tipo de pet):', topProductsByType)}
                    {this.renderListWithSubheaders('Serviços mais consumidos (por tipo de pet):', topServicesByType)}
                    {this.renderListWithSubheaders('Produtos mais consumidos por raça de pet:', topProductsByBreed)}
                    {this.renderListWithSubheaders('Serviços mais consumidos por raça de pet:', topServicesByBreed)}
                </div>
            </div>
        );
    }
}
