import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"

const Edit = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  const [input,setInput]=useState({
    name:"",
    email:"",
    age:"",
});
  useEffect(()=>{
    const getAllData=async ()=>{
        const res=await axios.get(`http://localhost:3001/api/v1/users/single/${id}`)
        setInput(res.data);
    }
    getAllData();
},[]);
const handleEditData=async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:3001/api/v1/users/${id}`,input);
  navigate("/");
}
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-12 mt-2">
            <div style={{backgroundColor:"blue"}}>
                <h1 className='text-white text-center'> Update</h1>
            </div>
            </div>
           <div className="col-md-12">
           <form onSubmit={handleEditData}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input name="name" value={input.name} onChange={(e)=>
        setInput({...input,[e.target.name]:e.target.value})
    } type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input  name="email" value={input.email} onChange={(e)=>
        setInput({...input,[e.target.name]:e.target.value})
    } type="email" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input  name="age" value={input.age} onChange={(e)=>
        setInput({...input,[e.target.name]:e.target.value})
    }  type="number" class="form-control" id="exampleInputPassword1"/>
  </div>

  
<button type="submit" class="btn btn-primary">Update</button>
</form>
           </div>
           <div className="col-md-6">
           
           </div>
           
        </div>
        <button onClick={()=>navigate("/")}

           
            className="btn btn-info mt-2">Go to Home</button>
    </div>
    </>
  )
}

export default Edit
