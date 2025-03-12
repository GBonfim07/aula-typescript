// Definição da interface para a função de multiplicação
interface Multiplicacao {
    (a: number, b: number): number;
}

// Implementação da função usando a interface
const multiplicar: Multiplicacao = (a, b) => a * b;

// Testes com diferentes valores
console.log("Multiplicação:");
console.log(multiplicar(5, 3));  // 15
console.log(multiplicar(10, 2)); // 20
console.log(multiplicar(7, -1)); // -7

// =====================================

// Função genérica para inverter um array de qualquer tipo
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

// Testando a função com um array de números
const numeros = [1, 2, 3, 4, 5];
console.log("Array invertido (números):", inverterArray(numeros)); 

// Testando a função com um array de strings
const palavras = ["TypeScript", "é", "muito", "legal"];
console.log("Array invertido (strings):", inverterArray(palavras)); 

//exercicio 5
export type RespostaServidor = string | boolean;

// Função para processar a resposta do servidor
export function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Servidor respondeu com mensagem: "${resposta}"`);
  } else if (typeof resposta === "boolean") {
    console.log(`Servidor retornou um status: ${resposta ? "Sucesso" : "Falha"}`);
  }
}

import { EstudanteTrabalhador } from "../modelos/EstudanteTrabalhador";

export function exibirInformacoes(pessoa: EstudanteTrabalhador): void {
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Curso: ${pessoa.curso}`);
  console.log(`Empresa: ${pessoa.empresa}`);
  console.log(`Cargo: ${pessoa.cargo}`);
}
