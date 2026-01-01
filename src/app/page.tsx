'use client';

import { useState } from "react";

export default function Page() {
    const st = "px-4 sm:px-6 sm:py-2 md:px-8 md:py-4 rounded-full border-black border-2 bg-black text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all"
    const st2 = "px-4 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full border-black border-2 bg-red-500 text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all"
    const [num, setNum] = useState("")
    const [dis, setDis] = useState("")
    const [res, setRes] = useState("")
    const [pressed, setPressed] = useState(false)
    let pressCount = 0;
    function eva() {
        try {
            setRes("="+eval(num))
            setPressed(true)
        } catch (err) {
            console.log(err)
            setRes("Error")
        }
    }
    function upd(digit: string) {
        if (pressed && digit != "√" && digit != "^") {
            setNum(digit)
            setDis(digit)
            setPressed(false)
        } else if (digit == "√") {
            setDis(num+"**(1/2)")
            setNum(num+"**(1/2)")
        } else if(digit == "^") {
            setNum(num+"**")
            setDis(dis+"^")
        } else {
            setNum(num+digit)
            setDis(dis+digit)
        }
    }
    function clear() {
        pressCount++
        if (pressCount == 2) {
            setRes("")
            pressCount = 0
        }
        setNum("")
        setDis("")
    }
    return (
        <div className="flex items-center justify-center h-screen bg-slate-700">
            <div className="flex flex-col space-y-10 px-3 py-5 md:px-9 md:py-16 bg-slate-400 w-fit rounded-lg text-lg md:text-2xl">
                {/* Screen */}
                <div className="flex flex-col w-full items-center justify-between">
                    <div className="flex w-full justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-4">BOB-67</h1>
                    </div>
                    <input className="p-2 w-full md:p-4 rounded-t-md border-black border-t-2 border-x-2 pb-5 md:pb-10 focus:outline-none" type="text" value={dis} onChange={(e) => {setNum(e.target.value); setDis(e.target.value)}}/>
                    <div className="flex justify-end w-full bg-white rounded-b-md border-x-2 border-b-2 border-black">
                        <h1 className="p-4">{res}</h1>
                    </div>
                </div>
                <div className="flex space-x-4 bg-gray-800 p-4 md:p-10 rounded-lg">
                    {/* Number Pad */}
                    <div className="flex flex-col space-y-6 justify-between items-center">
                        <div className="flex justify-between items-center space-x-4">
                            <button onClick={() => upd("1")} className={st}>1</button>
                            <button onClick={() => upd("2")} className={st}>2</button>
                            <button onClick={() => upd("3")} className={st}>3</button>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <button onClick={() => upd("4")} className={st}>4</button>
                            <button onClick={() => upd("5")} className={st}>5</button>
                            <button onClick={() => upd("6")} className={st}>6</button>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <button onClick={() => upd("7")} className={st}>7</button>
                            <button onClick={() => upd("8")} className={st}>8</button>
                            <button onClick={() => upd("9")} className={st}>9</button>
                        </div>
                        <div className="flex justify-between items-center space-x-4">
                            <button onClick={() => upd("0")} className={st}>0</button>
                            <button onClick={() => upd(".")} className={st}>.</button>
                            <button onClick={clear} className={st}>C</button>
                        </div>
                    </div>
                    {/* Functions Pad */}
                    <div className="flex flex-col space-y-6 justify-between items-center">
                        <div className="flex space-x-4 justify-between items-center">
                            <button onClick={() => upd("+")} className={st2}>+</button>
                            <button onClick={() => upd("-")} className={st2}>-</button>
                        </div>
                        <div className="flex space-x-4 justify-between items-center">
                            <button onClick={() => upd("*")} className={st2}>X</button>
                            <button onClick={() => upd("/")} className={st2}>/</button>
                        </div>
                        <div className="flex space-x-4 justify-between items-center">
                            <button onClick={() => upd("^")} className={st2}>^</button>
                            <button onClick={() => upd("√")} className={st2}>√</button>
                        </div>
                        <div className="flex space-x-4 justify-between items-center">
                            <button onClick={eva} className="px-4 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full border-black border-2 bg-yellow-500 text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all">=</button>
                            <button onClick={() => {setNum(num.slice(0, num.length - 1)); setDis(dis.slice(0, dis.length-1))}} className="px-4 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full border-black border-2 bg-purple-600 text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}