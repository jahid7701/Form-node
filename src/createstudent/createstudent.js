import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./create.css";


const Createstudent = () => {
    const[title,setTitle]=useState('')
    const[registration,setRegistration]=useState('')
    const navigate=useNavigate();
    function handlesubmit(event){
        event.preventDefault();
        axios.post("http://localhost:3000/student/create",{title,registration})
        .then(res=>{console.log(res)
        navigate("/")})
        .catch(err=>console.log(err))

    }
    return <div>
<div className='jahid'>
<form  className="jalil"onSubmit={handlesubmit}>
<h2>ADD STUDENT</h2>
<div>
    <label htmlFor=''>Title</label>
    <input type='text' placeholder='Enter Title' onChange={e=>setTitle(e.target.value)} required className='shakti'/>
</div>
<div className='hasi'>
    <label htmlFor=''>Registration</label>
    <input type='text' className='gazi' placeholder='Registration'onChange={e=>setRegistration(e.target.value)} required/>
</div>
<button className='fahi'>Submit</button>

</form>


</div>



    </div>;
}


export default Createstudent;