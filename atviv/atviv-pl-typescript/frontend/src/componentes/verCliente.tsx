import React, { useEffect, useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import './style.css'

const InfoCliente = () => {
  const [cliente, setCliente] = useState(null);
  const url = window.location.href.split("/");

  useEffect(() => {
    const buscarInfoCliente = async () => {
      try {
        const response = await fetch(`http://localhost:32831/cliente/${url[4]}`);

        const data = await response.json();
        setCliente(data);
        data.array.forEach(dado => {
          if (dado == null || dado == ''){
            dado = "Não há"
          }
        });
        console.log("Data:", data)
      } catch (error) {
        console.error(error.message);
      }
    };

    buscarInfoCliente();
  }, [url[4]]);

  return (
    <div>
      {cliente && (
        <div>
          <Menu tituloSite={`PetLovers`}/>
          <section className="container">
              <div className="row">
                <h6>Nome:</h6>
                <p>{cliente.nome}</p>
              </div>
              <div className="row">
                <h6>Nome Social:</h6>
                <p>{cliente.nomeSocial}</p>
              </div>
              <div className="row">
                <h6>E-mail:</h6>
                <p>{cliente.email}</p>
              </div>
              <div className="row">
                  <h6>Telefone:</h6>
                  <p>{"(" + cliente.telefones[0].ddd + ")" + " " + cliente.telefones[0].numero}</p>
              </div>
              <div className="row">
                  <h6>Endereço:</h6>
                  <p> {cliente.endereco.rua} n°{cliente.endereco.numero}</p>
                  <p>{cliente.endereco.bairro} - {cliente.endereco.codigoPostal} </p>
                  <p> {cliente.endereco.cidade} - {cliente.endereco.estado}</p>
              </div>
              <div className="row">
                  <h6>Informações adicionais:</h6>
                  <p>{cliente.endereco.informacoesAdicionais}</p>
              </div>
          </section>
          <div className="d-flex justify-content-center">
            <Link to={`/cliente/editar/${cliente["id"]}`} className="btn btn-primary"> Editar </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCliente;