import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(cleinte: Cliente): Promise<Cliente>
    excluir(cleinte: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}