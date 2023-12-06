import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

      // handling signup button as well as sign with thw help of firebase
    const signUp = async(e) => {
        e.preventDefault();
        if(password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth,email,password);
                navigate('/');
            } catch (error) {
                console.log(error, 'signup error');
                alert("Something went wrong, try again later!");
            }
        } else {
            alert("Password and confirm password do not match!");
        }
    }

  return (
    <div className="main">
        <div className='auth'>
            <img src='https://freepngdesign.com/content/uploads/images/world-globe-1881681472.png' alt='logo' />
            <h1>Register</h1>
            <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Password" required minLength={6} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" name="confirm-password" placeholder="Confirm Password" required minLength={6} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button onClick={(e) =>signUp(e)}>Register</button>
            <Link className="link" to='/login'>Already have an account? Login Here. </Link>
        </div>
    </div>
  )
}

export default Register