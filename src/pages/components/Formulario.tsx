import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";

interface FormilarioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelar?: () => void
}

export default function Formulario(props: FormilarioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada somenteLeitura text="Código" valor={id} className="mb-4"/>
            ) : false}

            <Entrada text="Nome" valor={nome} valorMudou={setNome} className="mb-5"/>
            <Entrada text="Idade" valor={idade} valorMudou={setIdade} />

            <div className="flex justify-end mt-5">
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelar}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}