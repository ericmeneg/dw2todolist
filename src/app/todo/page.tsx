import ButtonFatec from "@/components/button-fatec";
import Link from "next/link";

export default function TodoList(){
    return (
        <body className="bg-slate-100">
        <h1>To-do List</h1>
        <Link href='/'>
            <span className="text-yellow-300 hover:underline">Home</span>
        </Link>
        <ButtonFatec text="" /> {/*como o ButtonFatec não tem conteúdo podemos colocar a barra dentro da prórpia tag para indicar que ela é fechada logo em seguida*/}
        </body>
    )
}