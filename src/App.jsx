import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user,setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState([]);
  const [authData] = useContext(AuthContext);

  useEffect(()=>{
    
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])

  const handleLogin = (email, password) => {
    if (!authData || !authData.employees) {
        return alert("Please wait, loading data...");
    }

    if (authData) {
      const admin = authData.admin.find((e) => email === e.email && password === e.password);
      if(admin){
        setUser("admin");
        setLoggedInUserData(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({role:"admin",data:admin}));
      }
      const employee = authData.employees.find((e) => email === e.email && password === e.password);
      if(employee){
        setUser( "employee" );
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role:"employee",data:employee}));
      }
    } else {
        alert("Invalid credentials");
    }
};

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) } 
    </>
  )
}

export default App
