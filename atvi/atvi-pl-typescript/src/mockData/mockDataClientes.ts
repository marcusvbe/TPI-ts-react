import Cliente from '../modelo/cliente'
import CPF from '../modelo/cpf';
import RG from '../modelo/rg';
import Telefone from '../modelo/telefone';
import Pet from '../modelo/pet';

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nomesMasculinos = ['João', 'Antônio', 'Manuel', 'José', 'Luís', 'Paulo', 'Carlos', 'Pedro', 'Lucas', 'Jonas'];
const nomesFemininos = ['Maria', 'Francisca', 'Adriana', 'Ana', 'Juliana', 'Márcia', 'Fernanda', 'Patrícia', 'Rafaela', 'Aline'];
const nomesSociaisMasculinos = ['João', 'Antônio', 'Manuel', 'José', 'Luís', 'Paulo', 'Carlos', 'Pedro', 'Lucas', 'Jonas'];
const nomesSociaisFemininos = ['Maria', 'Francisca', 'Adriana', 'Ana', 'Juliana', 'Márcia', 'Fernanda', 'Patrícia', 'Rafaela', 'Aline'];

const nomesMasculinosDiferentes = ['Ricardo', 'Leonardo', 'Gabriel', 'Mateus', 'Miguel', 'Rafael', 'Daniel', 'Bruno', 'Alexandre', 'Felipe'];
const nomesFemininosDiferentes = ['Carolina', 'Larissa', 'Natália', 'Bianca', 'Camila', 'Isabela', 'Beatriz', 'Gabriela', 'Leticia', 'Amanda'];

const petNamesMale = ['Rex', 'Juninho', 'Chinelo', 'Coisinha', 'Feroz'];
const petNamesFemale = ['Bella', 'Flor', 'Pipoca', 'Joaninha', 'Princesa'];
const petTypes = ['Cão', 'Gato'];

const Clientes: Cliente[] = [];

let cliente: Cliente; 

for (let i = 0; i < 20; i++) {
    const nome = i < 10 ? nomesMasculinos[i] : nomesFemininos[i - 10];
    const nomeSocial = i < 10 ? nomesSociaisMasculinos[i] : nomesSociaisFemininos[i - 10];
    const cpfNumber = getRandomInt(10000000000, 99999999999).toString();
    const cpf = new CPF(cpfNumber, new Date());
    const genero = i < 10 ? 'Masculino' : 'Feminino';

    cliente = new Cliente(nome, nomeSocial, cpf, genero);

    const ddd = getRandomInt(10, 99).toString();
    const numero = getRandomInt(10000000, 99999999).toString();
    
    const telefone = new Telefone(ddd, numero);
    cliente.adicionarTelefone(telefone);

    const rgNumber = getRandomInt(1000000000, 9999999999).toString();
    const rg = new RG(rgNumber, new Date());
    cliente.adicionarRG(rg);

    const petName = i < 10 ? petNamesMale[i % 5] : petNamesFemale[(i - 10) % 5];
    const petType = petTypes[i % 2];
    const petRace = 'Vira-lata';
    const petGender = i < 10 ? 'Masculino' : 'Feminino';
    const pet = new Pet(petName, petType, petRace, petGender);
    cliente.adicionarPet(pet);

    Clientes.push(cliente);
}

const petNamesParrotMale = ['Tião', 'Josué', 'Antigo', 'Cantador', 'Tagarela'];
const petNamesTurtleFemale = ['Veloz', 'Menina', 'Relaxada', 'Calminha', 'Lentinha'];


for (let i = 0; i < 10; i++) {
    const nome = nomesMasculinosDiferentes[i];
    const nomeSocial = nomesFemininosDiferentes[i];
    const cpfNumber = getRandomInt(10000000000, 99999999999).toString();
    const cpf = new CPF(cpfNumber, new Date());
    const genero = 'Feminino';

    cliente = new Cliente(nome, nomeSocial, cpf, genero);

    const ddd = getRandomInt(10, 99).toString();
    const numero = getRandomInt(10000000, 99999999).toString();
    const telefone = new Telefone(ddd, numero);
    cliente.adicionarTelefone(telefone);

    const rgNumber = getRandomInt(1000000000, 9999999999).toString();
    const rg = new RG(rgNumber, new Date());
    cliente.adicionarRG(rg);
    

    const petName = i < 5 ? petNamesParrotMale[i] : petNamesTurtleFemale[i - 5];
    const petType = i < 5 ? 'Papagaio' : 'Tartaruga';
    const petRace = 'Desconhecida';
    const petGender = i < 5 ? 'Masculino' : 'Feminino';
    const pet = new Pet(petName, petType, petRace, petGender);
    cliente.adicionarPet(pet);

    Clientes.push(cliente);
}

export default Clientes;