import { useEffect, useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
    const [on,setOn] = useState(false)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    const toggle = () =>{
        setOn(!on)
    }

    useEffect(()=>{
        console.log('clicked');
    },[count])

  return (
    <div className="m-10 border border-slate-300 rounded-md p-4 flex flex-col gap-4 items-center w-fit">
        <h1>Counter App</h1>
        <p>{count}</p>
        <div className="space-x-2">
            <button onClick={increment} className="bg-slate-800 text-white px-4 py-2 rounded-md cursor-pointer">
                add
            </button>
            <button onClick={decrement} className="bg-slate-800 text-white px-4 py-2 rounded-md cursor-pointer">
                subtract
            </button>
            <button onClick={reset} className="bg-slate-800 text-white px-4 py-2 rounded-md cursor-pointer">
                reset
            </button>
        </div>

        <div className="mt-4">
           <p>{on ? "switch on" : "switch off"}</p>

           <button onClick={toggle} className="bg-slate-800 text-white px-4 py-2 rounded-md cursor-pointer">
            toogle
        </button>
        </div>
    </div>
  )
}
export default Counter