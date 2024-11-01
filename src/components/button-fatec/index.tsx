"use client"
import { useState } from "react"

interface ButtonFatecProps {
    text: string
}

export default function ButtonFatec({text}: ButtonFatecProps) { //dentro das chaves passamos a lista de todas as propriedades da interface para que estas possam ser usadas diretamente, pode-se também usar (nomeDaVariavelLocal: ButtonFatecProps), daí quando for-se fazer uso das propriedades deve-se escrever nomeDaVariavelLocal.text
    if(text === '') return <p className="text-slate-400 hover:text-slate-500">Botão desativado</p>

    const [contador, setContador] = useState(0)

    return (
        <button 
        className="border-2 border-solid m-3"
        onClick={()=>setContador(contador + 1)}>
            {text} - Cliques {contador}
        </button>
    )
}