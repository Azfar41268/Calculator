export default function Functions({ setCurrent, current, evaluate }: any) {
    let name = "lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2"
    return(
        <div className="flex flex-wrap space-x-2 space-y-2 w-full lg:w-64 md:w-56 justify-center items-center">
            <button onClick={() => setCurrent(current + `+`)} className={name}>
                +
              </button>
            <button onClick={() => setCurrent(current + `-`)} className={name}>
                -
              </button>
            <button onClick={() => setCurrent(current + `x`)} className={name}>
                x
              </button>
            <button onClick={() => setCurrent(current + `÷`)} className={name}>
              ÷
            </button>
            <button onClick={() => setCurrent(current + `^`)} className={name}>
              x^
            </button>
            <button onClick={() => setCurrent(current + `✓`)} className={name}>
              ✓x
            </button>
            <button onClick={() => setCurrent(current + `!`)} className={name}>
              x!
            </button>
            <button onClick={() => evaluate(current)} className={name}>
              =
            </button>
            <button onClick={() => setCurrent(current.slice(0, current.length -1))} className={name}>
                {'<-'}
            </button>
            <button onClick={() => setCurrent('')} className={name}>
                Clear
            </button>
          </div>
    )
}