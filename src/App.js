
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import Navbar1 from './components/Navbar1';
import Sign_Up from './components/Sign_Up';
import axios from'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const adminUser={
    fullname:"Abhinav Gupta",
    
    email:"guptaabhinav018@gmail.com",
    password:"heydude"
  }
  const [user,setUser]=useState({fullname:"",email:"",password:""});
  
const Login = details =>{
  setUser({
    fullname:details.fullname,
    email:details.email,
    password:details.password
  });

}
const Logout=()=>{

  setUser({
    fullname:"",
    email:"",
    password:""
  });
}


  return (<div>
   
    <div className="navbar text-white " ><br/><span><h1 className="asd">Welcome To Kisan Kalyan!!!</h1></span><br/></div>


    <div className="App">
      {(user.email!="")
      
      ?
      
      ( <div className="welcome">
      <h2 className="text-white">Welcome <span>{user.fullname}</span></h2>
      <button onClick={Logout}>Logout</button>
    </div> )
      
      :

      ( <LoginForm Login={Login} /> )}
    </div> </div> );
}

export default App;
