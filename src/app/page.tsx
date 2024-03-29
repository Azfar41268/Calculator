'use client'

import { useState } from "react";
import Button from "./button";


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
      setTimeout(() => {
        setCurrent(`${result}`)
      }, 3000)
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
            <Button onClick={() => setCurrent(current + '1')}>
              1
            </Button>
            <Button onClick={() => setCurrent(current + '2')}>
              2
            </Button>
            <Button onClick={() => setCurrent(current + '3')}>
              3
            </Button>
            <Button onClick={() => setCurrent(current + '4')}>
              4
            </Button>
            <Button onClick={() => setCurrent(current + '5')}>
              5
            </Button>
            <Button onClick={() => setCurrent(current + '6')}>
              6
            </Button>
            <Button onClick={() => setCurrent(current + '7')}>
              7
            </Button>
            <Button onClick={() => setCurrent(current + '8')}>
              8
            </Button>
            <Button onClick={() => setCurrent(current + '9')}>
              9
            </Button>
            <Button onClick={() => setCurrent(current + '0')}>
              0
            </Button>
            <Button onClick={() => setCurrent(current + '.')}>
              .
            </Button>
          </div>
          {/* Functions */}
          <div className="flex flex-wrap space-x-2 space-y-2 w-full lg:w-64 md:w-56 justify-center items-center">
            <Button onClick={() => setCurrent(current + '+')}>
                +
              </Button>
            <Button onClick={() => setCurrent(current + '-')}>
                -
              </Button>
            <Button onClick={() => setCurrent(current + 'x')}>
                x
              </Button>
            <Button onClick={() => setCurrent(current + '÷')}>
              ÷
            </Button>
            <Button onClick={() => setCurrent(current + '^')}>
              x^
            </Button>
            <Button onClick={() => evaluate(current)}>
                =
            </Button>
            <Button onClick={() => setCurrent(current.slice(0, current.length -1))}>
                {'<-'}
            </Button>
            <Button onClick={() => setCurrent('')} >
                Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
