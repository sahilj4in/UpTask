/* eslint-disable react/prop-types */

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5">
        <div className="w-[45%] px-9 py-6  rounded-xl bg-blue-600">
            <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
            <h3 className="text-xl font-medium ">NewTask</h3>
        </div>
        <div className="w-[45%] px-9 py-6  rounded-xl bg-green-500">
            <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
            <h3 className="text-xl font-medium ">Completed Task</h3>
        </div>
        <div className="w-[45%] px-9 py-6  rounded-xl bg-yellow-300 ">
            <h2 className="text-3xl font-semibold text-black">{data.taskCounts.active}</h2>
            <h3 className="text-xl font-medium text-black">Accepted Task</h3>
        </div>
        <div className="w-[45%] px-9 py-6  rounded-xl bg-red-500">
            <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
            <h3 className="text-xl font-medium ">Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
