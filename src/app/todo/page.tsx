"use client" //sempre que se usa "useEffect, useState, etc..." precisa-se adicionar essa linha no começo da página

import ButtonFatec from "@/components/button-fatec";
import TrocaCores from "@/components/troca-cores";
import { useState, useEffect } from "react"
import Link from "next/link";
import { ITodo, getTodos } from "./api"

export default function TodoList() {

    const [tarefas, setTarefas] = useState<ITodo[]>([])
    useEffect(() => { //use effect recebe dois parâmetros, uma função e uma variável de dependência, sempre que a variável de dependência é atualizada a função é executada de novo (nesse caso a variável passada garante que a função só sera executada uma vez)
        const fetchTodos = async () => {
            const listaTarefas = await getTodos()
            listaTarefas.splice(10)
            setTarefas(listaTarefas)
        }

        fetchTodos()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-violet-600">To-do</h1>
            <Link href='/'>
                <span className="text-yellow-300 hover:underline">Home</span>
            </Link>
            <hr />
            <ul>
                {
                    tarefas.map((tarefa) => ( //o .map é parecido com o .forEach, ele roda a função para cada elemento
                        <li key={tarefa.id}>
                            {tarefa.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}