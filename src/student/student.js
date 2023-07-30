import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./student.css"
import { Link } from 'react-router-dom';


const Student = () => {
    const[student,setStudent]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/student')
        .then((student)=>setStudent(student.data))
        .catch(err=>console.log(err))      
    },[])
    const handleDelete= async(id)=>{
        try{
            await axios.delete('http://localhost:3000/delete/'+id)
           window.location.reload();
        }
        catch(error){
            console.log("Error")
        }

    }
    

    return <div> 
         <div className='por'>
            <Link to="/student/create" className='dia'>ADD +</Link>
            <table className='fahim' >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Registration</th>
                    <th>Action</th></tr>
                </thead>
                <tbody>{
                   student.map((data,i)=>{
                    return(
<tr key={i}>
<td>{data.title}</td>
<td>{data.registration}</td> 
<td> <button className='hamid'><Link to={`update/${data._id}`} className='gafi'>Update</Link></button>  
<button className='delete' onClick={e=>handleDelete(data._id)}>Delete</button>  </td>
</tr>

                   )}) 
                    
                    
                    
                    }
             </tbody>
            </table>
        
        
        
        </div>
          </div>;
}



export default Student;