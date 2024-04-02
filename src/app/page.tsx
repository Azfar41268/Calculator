'use client'

import Functions from "@/components/Functions";
import Top from "@/components/Top";
import NumberPad from "@/components/numberPad";
import { useState } from "react";



export default function Home() {
  const [current, setCurrent] = useState('')
  let name = "lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2"

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function evaluate(equation: string) {
    for (let i = 0; i < equation.length; i++) {
      if (equation[i] === 'x') {
        equation = equation.replace('x', '*')
      } else if (equation[i] === '÷') {
        equation = equation.replace('÷', '/')
      } else if (equation[i] === '^') {
        equation = equation.replace('^', '**')
      } else if (equation[i] === '✓') {
        equation = equation.replace('✓', '**(1/2)')
      } else if (equation[i] === '!') {
        let k: number = Number(equation[i - 1])
        let total: number = factorial(k)
        equation = equation.replace(equation[i-1], `${total}`)
        equation = equation.replace(equation[i], '')
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
      setTimeout(() => {
        setCurrent(equation)
      }, 3000)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-12/12 bg-gradient-to-tr from-black via-indigo-800 to-blue-900 py-10">
      <div className="flex flex-col items-center justify-between p-4 space-y-4 rounded-lg bg-slate-400/15 w-screen lg:w-6/12">
        <Top setCurrent={setCurrent} current={current} evaluate={evaluate} />
        <div className="flex flex-col md:flex-row justify-center items-center px-4 py-4 text-white space-y-3">
          {/* Numbers */}
          <NumberPad setCurrent={setCurrent} current={current} />
          {/* Functions */}
          <Functions setCurrent= {setCurrent} current={current} evaluate={evaluate} />
        </div>
      </div>
    </div>
  );
}
