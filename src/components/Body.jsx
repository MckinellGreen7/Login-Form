import { useState } from "react"
const Body = () => {

  const [pass,setPass] = useState("password");
  const [text,setText]=useState("Show Password");
  const handlePass = ()=>{
    if (pass=="password")
    {setPass("text")
     setText("Hide Password")  }
    else{
        setPass("password")
        setText("Show Password")
    }
  }

  return (
    <div className="pt-[30px] max-w-[1340px] mx-auto ">
        <div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-2 border-3 border-white-500 shadow-2xl">
            <div className="p-5 md:col-span-2 md:border-r-2 border-b-2 pb-2 md:border-r-slate-400">
                <img className="" src="login.svg" alt="" />
            </div>
            <div className="md:col-span-3 p-4">
                <h1 className="flex justify-center text-3xl font-extrabold md:pt-2 pt-8 underline">Login</h1>
                <p className="p-3 pt-7 text-lg">Login Id</p>
                <input className="mx-3 w-[90%] p-2 rounded-md" type="text" placeholder="Enter Login Id" />  
                <p className="p-3 pt-7 text-lg">Password</p>
                <div className="flex">
                <input className="mx-3 w-[90%] p-2 rounded-md" type={pass} placeholder="Enter Password" />
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[20%] justify-center flex mx-auto" onClick={handlePass}>{text}</button>
                </div>
                <div className="flex justify-between">
                <div className="flex pt-2">   
                <p className="px-3">Remember Me</p>
                <input className="" type="checkbox" name="" id="" />
                </div>
                <div className="pt-3 underline text-blue-700">
                    <p>Change Password</p>
                </div>
                </div>
                <div className="flex">
                <p className="px-3">Agree to <a className="text-blue-700 underline hover:text-slate-500" href="">Terms & Conditions</a></p>
                <input type="checkbox" name="" id="" />
                </div>
                <button type="button" class="text-white text-[20px] bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 w-[40%] justify-center flex mx-auto">Login</button>
                <p className="pt-5 flex justify-center">Don't have an account? <a className="text-blue-700 underline hover:text-slate-500 pl-1" href=""> Create Here</a></p>
            </div>
        </div>
    </div>
  )
}
export default Body