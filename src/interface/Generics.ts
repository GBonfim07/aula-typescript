function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(inverterArray([1, 2, 3, 4])); 
console.log(inverterArray(["a", "b", "c", "d"])); 

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];

    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }

    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });

console.log(repo.obterTodos());
