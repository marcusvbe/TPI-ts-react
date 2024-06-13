import React, { useEffect, useState } from "react";
import CadastrarCliente from "../cadastrar/cadastrarCliente";
import Endereco from "../endereco";
import Telefone from "../telefone";
import Menu from "./menu";
import ExcluirCliente from "../excluir/excluirCliente";
import 'bootstrap/dist/css/bootstrap.min.css';


const FormClienteEditar = () => {

        const [id, setId] = useState(null);
        const [nome, setNome] = useState("");
        const [nomeSocial, setNomeSocial] = useState("");
        const [email, setEmail] = useState("");
        const [ddd, setDdd] = useState("");
        const [numeroTelefone, setNumeroTelefone] = useState("");
        const [rua, setRua] = useState("");
        const [ruaNumero, setRuaNumero] = useState("");
        const [bairro, setBairro] = useState("");
        const [codigoPostal, setCodigoPostal] = useState("");
        const [cidade, setCidade] = useState("");
        const [estado, setEstado] = useState("");
        const [informacoesAdicionais, setinformacoesAdicionais] = useState("");

        const cadastrarCliente = (objeto) => {
            let cadastrar = new CadastrarCliente();
            cadastrar.cadastrar(objeto);
        }
    
        const excluirServerSide = (idCliente) => {
            let excluir = new ExcluirCliente();
            excluir.excluir({ id: idCliente });
        }

        const handleNome = (evento) => {
            setNome(evento.target.value);
        }
    
        const handleNomeSocial = (evento) => {
            setNomeSocial(evento.target.value);
        }
    
        const handleEmail = (evento) => {
            setEmail(evento.target.value);
        }

        const handleDDD = (evento) => {
            setDdd(evento.target.value);
        }

        const handleNumeroTelefone = (evento) => {
            setNumeroTelefone(evento.target.value);
        }

        const handleRua = (evento) => {
            setRua(evento.target.value);
        }

        const handleRuaNumero = (evento) => {
            setRuaNumero(evento.target.value);
        }
    
        const handleBairro = (evento) => {
            setBairro(evento.target.value);
        }    

        const handleCodigoPostal = (evento) => {
            setCodigoPostal(evento.target.value);
        }
    
        const handleCidade = (evento) => {
            setCidade(evento.target.value);
        }
    
        const handleEstado = (evento) => {
            setEstado(evento.target.value);
        }
    
        const handleOutrasInformacoes = (evento) => {
            setinformacoesAdicionais(evento.target.value);
        }
    

        const limparFormulario = () => {
            setId(null);
            setNome("");
            setNomeSocial("");
            setEmail("");
            setDdd("");
            setNumeroTelefone("");
            setRua("");
            setRuaNumero("");
            setBairro("");
            setCodigoPostal("");
            setCidade("");
            setEstado("");
            setinformacoesAdicionais("");
        }

        const submeterFormulario = (evento:any) => {
            evento.preventDefault();
            let endereco = new Endereco(rua, ruaNumero, bairro, codigoPostal, cidade, estado, informacoesAdicionais);
            let telefones = new Telefone(ddd, numeroTelefone);
            let cliente = {
                nome,
                nomeSocial,
                email,
                endereco,
                telefones: [telefones]
            }
    
            excluirServerSide(id);
            cadastrarCliente(cliente);
            limparFormulario()
        }
    
        useEffect(() => {
        async function buscarDadosCliente() {
            const url = window.location.href.split("/");
            const response = await fetch(`http://localhost:32831/cliente/${url[5]}`);
            const data = await response.json();
            console.log("Data:", data);
            setId(data.id);
            setNome(data.nome);
            setNomeSocial(data.nomeSocial);
            setEmail(data.email);
            setDdd(data.telefones[0].ddd);
            setNumeroTelefone(data.telefones[0].numero);
            setRua(data.endereco.rua);
            setRuaNumero(data.endereco.numero);
            setBairro(data.endereco.bairro);
            setCodigoPostal(data.endereco.codigoPostal);
            setCidade(data.endereco.cidade);
            setEstado(data.endereco.estado);
            setinformacoesAdicionais(data.endereco.informacoesAdicionais);
        }

        buscarDadosCliente()
    }, []);

    return (
        <>
          <Menu tituloSite="PetLovers" /> 
          <div className="container-fluid mt-4"> 
            <div className="row">
              <div className="col-12"> 
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={(e) => submeterFormulario(e)}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="nome" className="form-label">Nome:</label>
                          <input type="text" className="form-control" id="nome" value={nome} onChange={handleNome} maxLength={30} required placeholder="Nome" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="nomeSocial" className="form-label">Nome Social:</label>
                          <input type="text" className="form-control" id="nomeSocial" value={nomeSocial} onChange={handleNomeSocial} maxLength={30} required placeholder="Nome Social" />
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label htmlFor="email" className="form-label">E-mail:</label>
                          <input type="text" className="form-control" id="email" value={email} onChange={handleEmail} maxLength={30} required placeholder="E-mail" />
                        </div>
                        <div className="col-md-2 mb-3">
                          <label htmlFor="ddd" className="form-label">DDD:</label>
                          <input type="text" className="form-control" id="ddd" value={ddd} onChange={handleDDD} maxLength={30} required placeholder="DDD do telefone" />
                        </div>
                        <div className="col-md-2 mb-3">
                          <label htmlFor="numero" className="form-label">Número:</label>
                          <input type="text" className="form-control" id="numero" value={numeroTelefone} onChange={handleNumeroTelefone} maxLength={30} required placeholder="Telefone" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 mb-3">
                          <label htmlFor="rua" className="form-label">Rua:</label>
                          <input type="text" className="form-control" id="rua" value={rua} onChange={handleRua}
                                       maxLength={30} required placeholder="Rua"/>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="ruaNumero" className="form-label">Número:</label>
                          <input type="text" className="form-control" id="ruaNumero" value={ruaNumero} onChange={handleRuaNumero}
                                       maxLength={30} required placeholder="Número da Rua"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                        <label htmlFor="bairro" className="form-label">Bairro:</label>
                        <input type="text" className="form-control" id="bairro" value={bairro} onChange={handleBairro} maxLength={30} required placeholder="Bairro" />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="codigoPostal" className="form-label">CEP:</label>
                          <input type="text" className="form-control" id="codigoPostal" value={codigoPostal} onChange={handleCodigoPostal} maxLength={30} required placeholder="CEP" />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="cidade" className="form-label">Cidade:</label>
                          <input type="text" className="form-control" id="cidade" value={cidade} onChange={handleCidade} maxLength={30} required placeholder="Cidade" />
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-4 mb-3"> 
                          <label htmlFor="estado" className="form-label">Estado:</label>
                          <input type="text" className="form-control" id="estado" value={estado} onChange={handleEstado} maxLength={30} required placeholder="Estado" />
                        </div>
                        <div className="col-md-8 mb-3">
                          <label htmlFor="informacoesAdicionais" className="form-label">Outras informações:</label>
                          <input type="text" className="form-control" id="informacoesAdicionais" value={informacoesAdicionais} onChange={handleOutrasInformacoes} maxLength={255} required placeholder="Outras Informações" />
                        </div>
                      </div>
    
                      <div className="row mt-4"> 
                        <div className="col-12">
                          <button className="btn btn-primary" type="submit">
                            Cadastrar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    
        };

export default FormClienteEditar;