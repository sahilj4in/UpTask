import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-emerald-600">
            <form onSubmit={(e) =>{
              submitHandler(e);
            }} className="flex flex-col items-center justify-center p-20">
                <input
                value={email} 
                onChange={(e)=>{
                  setEmail(e.target.value);
                }} required className=" outline-none bg-transparent border-2 border-emerald-600 
                text-xl py-3 px-5 rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your email"></input>
                <input 
                value={password} 
                onChange={(e)=>{
                  setPassword(e.target.value);
                }} required className=" outline-none bg-transparent border-2 border-emerald-600
                 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400" type="password" placeholder="Enter password"></input>
                <button className=" outline-none bg-emerald-600 border-none text-xl py-3 px-5 rounded-full mt-5 placeholder:text-gray-400">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
