import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value ;
        
          
    }
    return (

            <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form  onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none'>Please Login</Link> </p>
        </div>

      
    );
};

export default Register;