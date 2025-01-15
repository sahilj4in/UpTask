
const CompleteTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-pink-500 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
            <h4 className="text-sm">2 Jan 2025</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
          <p className="text-sm mt-2">{data.taskDescription}</p>
          <div className="mt-2">
            <button className="w-full p-1 bg-violet-800 rounded mt-4">Completed</button>
          </div>
    </div>
    
  )
}

export default CompleteTask