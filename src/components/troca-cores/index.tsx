"use client"
import { useState } from "react"

export default function TrocaCores() {

    const [color, setColor] = useState("bg-slate-400")

    return (
        <>
            <div className={`bg-${color}-400`}>
                <button
                    style={{ padding: "0.2rem" }}
                    className="border-2 border-solid m-3 bg-red-500"
                    onClick={() => setColor("red")}>
                    Red
                </button>
                <button
                    style={{ padding: "0.2rem" }}
                    className="border-2 border-solid m-3 bg-blue-500"
                    onClick={() => setColor("blue")}>
                    Blue
                </button><button
                    style={{ padding: "0.2rem" }}
                    className="border-2 border-solid m-3 bg-green-500"
                    onClick={() => setColor("green")}>
                    Green
                </button>
            </div>
        </>
    )
}