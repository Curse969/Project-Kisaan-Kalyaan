import React,{useState} from 'react'



function Sign_Up({Login,error}) {
    const [details,setDetails]=useState({firstname:"",lastname:"", username:"", email:"",password:"",dob:"",mbn:"",address:"",district:"",state:"",pincode:""});
const submitHandler=e=>{
e.preventDefault();

}


 return (
    
 <form className="main-forme" onSubmit={submitHandler}>
            <div className="form-inner">
                <h2 className="text-white">Sign Up</h2>
                {/*Error*/}
            <div className="row">
                      <div className="col">
                      <div className="form-group">
                      
                      <label for="firstname" className="text-white ">First Name</label>
                      <input id="firstname" name="firstname" placeholder="Enter your first name" className="form-control " type="text" onChange={e=>setDetails({...details,firstname:e.target.value})}   value={details.firstname} required></input>
                      </div>
                      </div>
                 

                <div className="col">
                <div className="form-group">
                   
                   <label for="lastname" className="text-white ">Last Name</label>
                   <input id="lastname" name="lastname" placeholder="Enter your last name" className="form-control " type="text" onChange={e=>setDetails({...details,lastname:e.target.value})}   value={details.lastname}></input>
               </div>
                </div>
                <div className="col">
                <div className="form-group ">
                   
                   <label for="username"className="text-white">Username</label>
                   <input  id="username" placeholder="Enter your Username" className="form-control" type="username" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.username} required></input>
         </div></div>
                 

                <div className="col"> 
              <div className="form-group">
                   
                       <label for="email"className="text-white">Email</label>
                       <input id="email" placeholder="Enter your Email ID" className="form-control" type="email" onChange={e=>setDetails({...details,email:e.target.value})}   value={details.email} required></input>
         </div></div>
         <div className="col">
         <div className="form-group">
                   
                   <label for="password"className="text-white">Password</label>
                   <input id="password" placeholder="Enter your Password" className="form-control" type="password" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.password} required></input>
         </div></div>

                
                     <div className="col">

                     <div className="form-group">
                   
                   <label for="dob"className="text-white">Date of Birth</label>
                   <input id="dob" placeholder="(DD/MM/YYYY)" className="form-control" type="dob" onChange={e=>setDetails({...details,email:e.target.value})}   value={details.dob} required></input>
                     </div> </div>


      


         <div className="col">
         <div className="form-group ert">
                   
                   <label for="address"className="text-white">Address</label>
                   <input id="address" placeholder="Enter your Address" className="form-control" type="text" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.address} required></input>
         </div></div>
         <div className="col">
         <div className="form-group">
                   
                   <label for="district"className="text-white">District</label>
                   <input id="district" placeholder="Enter District" className="form-control" type="text" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.district}></input>
         </div></div>
         <div className="col">
         <div className="form-group">
                   
                   <label for="state"className="text-white">State</label>
                   <input id="state" placeholder="Enter State" className="form-control" type="text" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.state}></input>
         </div></div>
         <div className="col">
         <div className="form-group">
                   
                   <label for="pincode"className="text-white">Pincode</label>
                   <input id="pincode" placeholder="Enter Pincode" className="form-control" type="text" onChange={e=>setDetails({...details,password:e.target.value})}   value={details.pincode}></input>
         </div></div>
         <div className="col">
        <div className="form-group">
                      
                      <label for="mbn"className="text-white">Mobile Number</label>
                      <input id="mbn" placeholder="Enter your Mobile No" className="form-control" type="number" onChange={e=>setDetails({...details,email:e.target.value})}   value={details.mbn} required></input>
        </div></div>
         

</div>
      <br/>
        <button className="btn btn-success wer" >Sign Up</button>

         
         </div>



       </form>
    )
}

export default Sign_Up
