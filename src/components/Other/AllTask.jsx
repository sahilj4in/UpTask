/* eslint-disable react/jsx-key */ 
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

    const [authData] = useContext(AuthContext);

    console.log(authData)
  return (
    
      <div className="bg-[#1c1c1c] p-5 mt-5 h-64 rounded">
            <div className="text-lg font-semibold bg-black-500 mb-2 px-4 py-2 flex justify-between" >
                <h2 className="w-1/5">Employee Name</h2>
                <h3 className="w-1/5">Accepted Task</h3>
                <h3 className="w-1/5">New Task</h3>
                <h3 className="w-1/5">Completed Task</h3>   
                <h3 className="w-1/5">Failed Task</h3>
            </div>
            <div className="h-[80%] overflow-auto">
                {authData.employees.map((elem,idx)=>{
                     return <div key={idx} className="text-lg bg-black-500 border-2 border-emerald-600 mb-2 px-4 py-2 flex justify-between" >
                        <h2 className="w-1/5">{elem.firstName}</h2>
                        <h3 className="w-1/5 pl-10">{elem.taskCounts.active}</h3>
                        <h3 className="w-1/5 pl-9">{elem.taskCounts.newTask}</h3>
                        <h3 className="w-1/5 pl-12">{elem.taskCounts.completed}</h3>   
                        <h3 className="w-1/5 pl-10">{elem.taskCounts.failed}</h3>
            </div>
                })}
            </div>
        </div>
  )
}

export default AllTask
