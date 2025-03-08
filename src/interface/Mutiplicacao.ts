interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log(multiplicar(5, 3)); // Teste com valores diferentes
console.log(multiplicar(10, 2));

