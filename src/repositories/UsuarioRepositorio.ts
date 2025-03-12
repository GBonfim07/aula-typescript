import { Repositorio } from "./Repositorio";
import { Usuario } from "../modelos/Usuarios";

export class UsuarioRepositorio implements Repositorio<Usuario> {
  private usuarios: Usuario[] = [];

  salvar(dado: Usuario): void {
    this.usuarios.push(dado);
  }

  obterTodos(): Usuario[] {
    return this.usuarios;
  }
}
