import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handling login button as well as login with thw help of firebase
  const login = async(e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error, "login error");
      alert('You entered wrong username or password.');
    }
  }

  return (
    <div className="main">
      <div className="auth">
        <img src='https://freepngdesign.com/content/uploads/images/world-globe-1881681472.png' alt='logo' />
        <h1>LOGIN</h1>
        <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e) => login(e)}>Login</button>
        <Link className="link" to='/register'>Don't have an account? Register Here.</Link>
      </div>
    </div>
  )
}

export default Login