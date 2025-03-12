import { UsuarioRepositorio } from "./repositories/UsuarioRepositorio";
import { Usuario } from "./modelos/Usuarios";

const repo = new UsuarioRepositorio();

repo.salvar(new Usuario("João Silva", "joao@email.com"));
repo.salvar(new Usuario("Maria Souza", "maria@email.com"));

console.log(repo.obterTodos());

//exercicio 5
import { processarResposta } from "./exercicios/funcoes";

console.log("\nTestando processarResposta:");
processarResposta("Operação concluída com êxito.");
processarResposta(true);
processarResposta(false);

import { exibirInformacoes } from "./exercicios/funcoes";
import { EstudanteTrabalhador } from "./modelos/EstudanteTrabalhador";

// Criando um objeto EstudanteTrabalhador
const pessoa: EstudanteTrabalhador = {
  nome: "Carlos Silva",
  curso: "Engenharia de Software",
  empresa: "Tech Solutions",
  cargo: "Desenvolvedor Júnior",
};

// Chamando a função para exibir os dados
console.log("\nInformações do Estudante Trabalhador:");
exibirInformacoes(pessoa);

