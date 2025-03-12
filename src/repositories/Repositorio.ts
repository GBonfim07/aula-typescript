export interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  