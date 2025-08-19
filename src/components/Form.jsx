import { useState } from "react"

const Form = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        console.log(`Username: ${username} and Password: ${password}`);
    }


  return (
    <div className="m-10">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input className="border border-slate-400 p-2 rounded-md block" 
                type="text" 
                name="username" 
                id="username" 
                onChange={e => setUsername(e.target.value) }
                />
            </div>
             <div>
                <label htmlFor="password">password</label>
                <input className="border border-slate-400 p-2 rounded-md block"
                 type="text" 
                 name="password" 
                 id="password" 
                  onChange={e => setPassword(e.target.value) }
                 />
            </div>
            <button className="bg-slate-800 p-2 rounded-md text-white">login</button>
        </form>
    </div>
  )
}
export default Form