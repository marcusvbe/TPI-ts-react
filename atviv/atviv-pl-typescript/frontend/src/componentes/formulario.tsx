import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import CadastrarCliente from "../cadastrar/cadastrarCliente";
import Endereco from "../endereco";
import Telefone from "../telefone";
import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';

const FormCliente = () => {
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
    const [informacoesAdicionais, setInformacoesAdicionais] = useState("");

    const cadastrarCliente = (objeto) => {
        let cadastrador = new CadastrarCliente();
        cadastrador.cadastrar(objeto);
    }

    const enviarFormulario = (evento) => {
        evento.preventDefault();
        let endereco = new Endereco(rua, ruaNumero, bairro, codigoPostal, cidade, estado, informacoesAdicionais);
        let telefones = new Telefone(ddd, numeroTelefone);
        let cliente = {
            nome,
            nomeSocial,
            email,
            endereco,
            telefones: [telefones]
        };
        cadastrarCliente(cliente);
        evento.target.reset();
    }

    return (
        <>
            <Menu tituloSite="PetLovers" />
            <Card className="m-3">
                <Card.Body>
                    <Form onSubmit={enviarFormulario}>
                        <Row>
                            <Col>
                                <Form.Group controlId="nome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="nomeSocial">
                                    <Form.Label>Nome Social</Form.Label>
                                    <Form.Control type="text" placeholder="Nome Social" onChange={e => setNomeSocial(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="email">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="ddd">
                                    <Form.Label>DDD</Form.Label>
                                    <Form.Control type="text" placeholder="DDD do Telefone" onChange={e => setDdd(e.target.value)} required maxLength={2} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="numero">
                                    <Form.Label>Número do telefone</Form.Label>
                                    <Form.Control type="text" placeholder="Número do Telefone" onChange={e => setNumeroTelefone(e.target.value)} required maxLength={9} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="rua">
                                    <Form.Label>Rua</Form.Label>
                                    <Form.Control type="text" placeholder="Rua" onChange={e => setRua(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="ruaNumero">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="text" placeholder="Número" onChange={e => setRuaNumero(e.target.value)} required maxLength={10}  />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="codigoPostal">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" placeholder="CEP" onChange={e => setCodigoPostal(e.target.value)} required maxLength={10} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="bairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" placeholder="Bairro" onChange={e => setBairro(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="cidade">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="text" placeholder="Cidade" onChange={e => setCidade(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="estado">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" placeholder="Estado" onChange={e => setEstado(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="informacoesAdicionais">
                                    <Form.Label>Outras Informações</Form.Label>
                                    <Form.Control type="text" placeholder="Outras informações" onChange={e => setInformacoesAdicionais(e.target.value)} required maxLength={255} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default FormCliente;