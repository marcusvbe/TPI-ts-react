// mockDataProdutosServicos.ts
import { Produto, Servico } from './../modelo/item';

const produtosNomes = ['Racao para Caes', 'Racao para Gatos', 'Brinquedos para Pets', 'Coleiras', 'Camas para Pets', 'Shampoo para Pets', 'Medicamentos para Pets', 'Vitaminas para Pets', 'Acessorios para Pets', 'Roupas para Pets'];
const servicosNomes = ['Banho', 'Tosa', 'Consulta Veterinaria', 'Vacinacao', 'Adestramento', 'Hotel para Pets', 'Transporte para Pets', 'Cremacao de Pets', 'Cirurgias Veterinarias', 'Exames Veterinarios'];

const produtos: Produto[] = produtosNomes.map((nome, index) => new Produto(index + 1, nome, Math.floor(Math.random() * 100) + 1));
const servicos: Servico[] = servicosNomes.map((nome, index) => new Servico(index + 1, nome, Math.floor(Math.random() * 100) + 1));
export { produtos, servicos };