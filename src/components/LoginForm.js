import React,{useState} from 'react'

function LoginForm({Login,error}) {
    const [details,setDetails]=useState({fullname:"", email:"",password:""});
const submitHandler=e=>{
e.preventDefault();
Login(details);
}

    return (
      
 <form className="main-form" onSubmit={submitHandler}>
         <div className="form-inner">
             <h2 className="text-white">Login</h2>
             {/*Error*/}
             <div className="form-group">
                   
                       <label for="fullname" className="text-white">Full Name</label>
                       <input id="fullname" name="fullname" placeholder="Enter your full name" className="form-control" type="text" onChange={e=>setDetails({...details,fullname:e.target.value})}   value={details.fullname} required></input>
                   </div>
                  
         <div className="form-group">
                   
                       <label for="email"className="text-white">Email</label>
                       <input id="email" placeholder="Enter your Email ID" className="form-control" type="email" onChange={e=>setDetails({...details,email:e.target.value})}   value={details.email} required></input>
         </div>
         <div className="form-group">
                   
                   <label for="password"className="text-white">Password</label>
                   <input id="password" placeholder="Enter your Password" className="form-control" type="password" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.password} required></input>
         </div>

         <div className="abc"/>
        <button className="btn btn-success" >Login</button>


         
         </div>
       </form>
       )
}

export default LoginForm
