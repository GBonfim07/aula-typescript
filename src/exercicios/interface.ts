// Definição da interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}

// Objeto que implementa a interface
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0L"
};

// Exibindo os dados no console
console.log(meuCarro);
