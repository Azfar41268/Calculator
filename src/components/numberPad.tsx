export default function NumberPad({ setCurrent, current}: any ) {
    let name = "lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2"
    return(
        <div className="flex flex-wrap space-x-2 space-y-2 w-full lg:w-64 md:w-56 justify-center items-center">
            <button onClick={() => setCurrent(current + `1`)} className={name}>
              1
            </button>
            <button onClick={() => setCurrent(current + `2`)} className={name}>
              2
            </button>
            <button onClick={() => setCurrent(current + `3`)} className={name}>
              3
            </button>
            <button onClick={() => setCurrent(current + `4`)} className={name}>
              4
            </button>
            <button onClick={() => setCurrent(current + `5`)} className={name}>
              5
            </button>
            <button onClick={() => setCurrent(current + `6`)} className={name}>
              6
            </button>
            <button onClick={() => setCurrent(current + `7`)} className={name}>
              7
            </button>
            <button onClick={() => setCurrent(current + `8`)} className={name}>
              8
            </button>
            <button onClick={() => setCurrent(current + `9`)} className={name}>
              9
            </button>
            <button onClick={() => setCurrent(current + `0`)} className={name}>
              0
            </button>
            <button onClick={() => setCurrent(current + `0`)} className={name}>
              .
            </button>
          </div>
    )
}