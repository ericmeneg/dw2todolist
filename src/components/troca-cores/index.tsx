"use client"
import { useState } from "react"

export default function TrocaCores() {

    const [color, setColor] = useState("bg-slate-400")

    return (
        <>
            <div className={color}>
                <button
                    style={{ padding: "0.2rem" }}
                    className="border-2 border-solid m-3 bg-red-500"
                    onClick={() => setColor("bg-red-300")}>
                    Red
                </button>
                <button
                    style={{ padding: "0.2rem" }}
                    className="border-2 border-solid m-3 bg-blue-500"
                    onClick={() => setColor("bg-blue-300")}>
                    Blue
                </button><button
                    style={{ padding: "0.2rem" }}
                    className="border-2 border-solid m-3 bg-green-500"
                    onClick={() => setColor("bg-green-300")}>
                    Green
                </button>
            </div>
        </>
    )
}