'use client'

export default function Button({ children }: any){
    return(
        <button className="lg:w-16 lg:h-16 md:h-14 md:w-14 h-12 w-12 text-lg font-medium rounded-full hover:scale-105 active:scale-95 transition-all border-black border-2 ">
            {children}
        </button>
    )
}