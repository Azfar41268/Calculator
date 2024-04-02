export default function Top({ setCurrent, current, evaluate }: any) {
    return(
        <div className="w-full h-full flex flex-col justify-bwetween items-center space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                Calculator
            </h1>
            <input type="text" onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    evaluate(current)
                }
            }} value={current} onChange={(e) => setCurrent(e.currentTarget.value)} className="h-12 py-3 w-full px-4 rounded-md border-black/40 border-4 bg-transparent text-white" />
        </div>
    )
}