'use client';

import { useState } from "react";

export default function Page() {
    const st = "px-4 sm:px-6 sm:py-2 md:px-8 md:py-4 rounded-full border-black border-2 bg-black text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all"
    const st2 = "px-4 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full border-black border-2 bg-red-500 text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all"
    const [dis, setDis] = useState("")
    const [res, setRes] = useState("")
    const [ans, setAns] = useState("0")
    const [pressed, setPressed] = useState(false)

    function eva() {
        if (!dis) return;
        try {
            // Replace Ans first so that √ can parse it if it is wrapped in parentheses
            let expression = dis.replace(/Ans/g, `(${ans})`);

            expression = expression
                .replace(/\^/g, '**')
                .replace(/√(\(?-?\d+(\.\d+)?\)?)/g, 'Math.sqrt($1)');

            expression = expression.replace(/[\+\-\*\/\^\√]+$/, '');

            if (expression === '') return;

            // eslint-disable-next-line no-eval
            let evaluated = eval(expression);

            if (!isFinite(evaluated) || isNaN(evaluated)) {
                setRes("Error");
            } else {
                evaluated = Math.round(evaluated * 100000000) / 100000000;
                setRes("=" + evaluated);
                setAns(evaluated.toString());
            }
            setPressed(true);
        } catch (err) {
            console.log(err);
            setRes("Error");
        }
    }

    function upd(digit: string) {
        let currentDis = dis;

        if (pressed) {
            if (/[\+\-\*\/\^]/.test(digit)) {
                const lastResult = res.replace('=', '');
                if (lastResult !== 'Error' && lastResult !== '') {
                    currentDis = lastResult;
                } else {
                    currentDis = "";
                }
            } else {
                currentDis = "";
            }
            setRes("");
            setPressed(false);
        }

        const operators = ['+', '-', '*', '/', '^'];
        const lastChar = currentDis.slice(-1);

        if (operators.includes(digit)) {
            if (operators.includes(lastChar)) {
                currentDis = currentDis.slice(0, -1) + digit;
            } else {
                currentDis = currentDis + digit;
            }
        } else if (digit === "√") {
            if (currentDis === "" || operators.includes(lastChar)) {
                currentDis = currentDis + "√";
            } else {
                currentDis = currentDis + "*√";
            }
        } else if (digit === ".") {
            const segments = currentDis.split(/[\+\-\*\/\^√]/);
            const lastSegment = segments[segments.length - 1];
            if (!lastSegment.includes(".")) {
                currentDis = currentDis + digit;
            }
        } else {
            currentDis = currentDis + digit;
        }

        setDis(currentDis);
    }

    function backspace() {
        if (pressed) {
            setDis("");
            setRes("");
            setPressed(false);
            return;
        }
        setDis(dis.slice(0, -1));
    }

    function clear() {
        setDis("");
        setRes("");
        setPressed(false);
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value.replace(/[^0-9\+\-\*\/\^\√\.Ans]/g, '');
        setDis(val);
        setPressed(false);
        setRes("");
    }
    return (
        <div className="flex items-center justify-center h-screen bg-slate-700">
            <div className="flex flex-col space-y-10 px-3 py-5 md:px-9 md:py-16 bg-slate-400 w-fit rounded-lg text-lg md:text-2xl">
                {/* Screen */}
                <div className="flex flex-col w-full items-center justify-between">
                    <div className="flex w-full justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-4">CALCULATOR</h1>
                    </div>
                    <input className="p-2 w-full md:p-4 rounded-t-md border-black border-t-2 border-x-2 pb-5 md:pb-10 focus:outline-none" type="text" value={dis} onChange={handleInput} />
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
                            <button onClick={backspace} className="px-4 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full border-black border-2 bg-purple-600 text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all">Back</button>
                        </div>
                        <div className="flex space-x-4 justify-between items-center w-full">
                            <button onClick={() => upd("Ans")} className="px-4 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full border-black border-2 bg-blue-500 text-white hover:scale-105 hover:transition-all active:scale-95 active:transition-all w-full">Ans</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}