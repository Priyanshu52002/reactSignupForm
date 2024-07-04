import { useState } from "react";
import React from "react"; 

import './forms.css'
function Form(){
    const[formData,setformData]=useState({
        firstName:"",lastName:"",email:"",isFriendly:false,employment:""
    })
    function handleChange(event){
        const{name,value,type,checked}=event.target
        setformData((prevFormData) => {
            return{
                ...prevFormData,
                [name]:type==="checkbox"?checked:value
            }
            
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        // subitToApi(formData)
        console.log(formData)
    }
   return(
    <form className="signupform" onSubmit={handleSubmit}>
        <h2>SIGN UP</h2>
        <input
        type="text" 
        placeholder="First Name"
        onChange={handleChange}
        className="inpt"
        name="firstName"
        value={formData.firstName}
        />
        <input
        type="text" 
        placeholder="Last Name"
        onChange={handleChange}
        className="inpt"
        name="lastName"
        value={formData.lastName}
        />
        <input
        type="text" 
        placeholder="Email"
        onChange={handleChange}
        className="inpt"
        name="email"
        value={formData.email}
        />
        <div>
        <input 
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        name="isFriendly"
        onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are You Friendly?</label>
        </div>

        <div className="radiosinfo">
        <p>Do you have any work experience  : </p>
        <div>
        <input 
        type="radio"
        id="unexperienced"
        checked={formData.employment==="unexperienced"}
        name="employment"
        value="unexperienced"
        onChange={handleChange}
        />
        <label htmlFor="unexperienced">No</label>

        <input 
        type="radio"
        id="experienced"
        checked={formData.employment==="experienced"}
        name="employment"
        value="experienced"
        onChange={handleChange}
        />
        <label htmlFor="experienced">Yes</label>

        </div>    
        </div>
        <button className="btn">Submit</button>
    </form>
   )
}
export default Form;