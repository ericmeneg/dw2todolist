import ButtonFatec from "@/components/button-fatec";
import TrocaCores from "@/components/troca-cores";
import Link from "next/link";

export default function Home(){
  return (
    <body className="bg-slate-100">
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-violet-600">Olá mundo!</h1>
      <Link href='/todo'>
            <span className="text-yellow-300 hover:underline">To-do</span>
        </Link>
        <ButtonFatec text="Clique aqui 1" />
        <ButtonFatec text="Clique aqui 2" />
        <TrocaCores />
    </div>
    </body>
  )
}