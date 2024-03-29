'use client'

import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState('')

  function evaluate(equation: string) {
    for (let i = 0; i < equation.length; i++) {
      if (equation[i] === 'x') {
        equation = equation.replace('x', '*')
      } else if (equation[i] === '÷') {
        equation = equation.replace('÷', '/')
      } else if (equation[i] === '^') {
        equation = equation.replace('^', '**')
      }
    }
    
    try {
      let result = eval(equation);

      setCurrent(`${equation} = ${result}`);
    } catch (error) {
      setCurrent("Error in expression");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-12/12 bg-gradient-to-tr from-black via-indigo-800 to-blue-900 py-10">
      <div className="flex flex-col items-center justify-between p-4 space-y-4 rounded-lg bg-slate-400/15 w-screen lg:w-6/12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
          Calculator
        </h1>
        <input type="text" onKeyDown={(event) => {
          if (event.key === 'Enter') {
            evaluate(current)
          }
        }} value={current} onChange={(e) => setCurrent(e.currentTarget.value)} className="h-12 py-3 w-full px-4 rounded-md border-black/40 border-4 bg-transparent text-white" />
        <div className="flex flex-col md:flex-row justify-center items-center px-4 py-4 text-white space-y-3">
          {/* Numbers */}
          <div className="flex flex-wrap space-x-2 space-y-2 w-full lg:w-64 md:w-56 justify-center items-center">
            <button onClick={() => setCurrent(current + '1')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              1
            </button>
            <button onClick={() => setCurrent(current + '2')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              2
            </button>
            <button onClick={() => setCurrent(current + '3')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              3
            </button>
            <button onClick={() => setCurrent(current + '4')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              4
            </button>
            <button onClick={() => setCurrent(current + '5')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              5
            </button>
            <button onClick={() => setCurrent(current + '6')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              6
            </button>
            <button onClick={() => setCurrent(current + '7')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              7
            </button>
            <button onClick={() => setCurrent(current + '8')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              8
            </button>
            <button onClick={() => setCurrent(current + '9')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              9
            </button>
            <button onClick={() => setCurrent(current + '0')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              0
            </button>
          </div>
          {/* Functions */}
          <div className="flex flex-wrap space-x-2 space-y-2 w-full lg:w-64 md:w-56 justify-center items-center">
            <button onClick={() => setCurrent(current + '+')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
                +
              </button>
            <button onClick={() => setCurrent(current + '-')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
                -
              </button>
            <button onClick={() => setCurrent(current + 'x')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
                x
              </button>
            <button onClick={() => setCurrent(current + '÷')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              ÷
            </button>
            <button onClick={() => setCurrent(current + '^')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
              x^
            </button>
            <button onClick={() => evaluate(current)} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
                =
            </button>
            <button onClick={() => setCurrent(current.slice(0, current.length -1))} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
                {'<-'}
            </button>
            <button onClick={() => setCurrent('')} className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-md md:text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
                Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
