import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {
    const[title,setTitle]=useState('')
    const[registration,setRegistration]=useState('')
    const{id}=useParams();
    const navigate=useNavigate();
    function handlesubmit(event){
        event.preventDefault();
        axios.put("http://localhost:3000/update/"+id,{title,registration})
        .then(res=>{console.log(res)
            navigate("/");})
        .catch(err=>console.log(err))

    }
    return <div>
<div className='jahid'>
<form  className="jalil"onSubmit={handlesubmit}>
<h2>UPDATE STUDENT</h2>
<div>
    <label htmlFor=''>Title</label>
    <input type='text' placeholder='Enter Title'className='shakti' onChange={e=>setTitle(e.target.value)} required/>
</div >
<div className='hasi'>
    <label htmlFor=''>Registration</label>
    <input type='text' className='gazi'  placeholder='Registration'onChange={e=>setRegistration(e.target.value)} required/>
</div>
<button className='fahi'>Update</button>

</form>


</div>



    </div>;
}


export default Update;