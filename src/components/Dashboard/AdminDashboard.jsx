import AllTask from "../Other/AllTask"
import CreateTask from "../Other/CreateTask"
import Header from "../Other/Header"

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
        <Header changeUser={props.changeUser} data={props.data} />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
