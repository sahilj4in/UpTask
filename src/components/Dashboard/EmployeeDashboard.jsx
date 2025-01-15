/* eslint-disable react/prop-types */
import Header from "../Other/Header"
import TaskListNumbers from "../Other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen ">
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
