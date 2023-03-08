import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const Signin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  };

  return (
    <div className='grad'>
        <div className='box6'></div>
        <div className='box7'>
            <h2 className='t4'>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" className='pass' placeholder='Email' value={email} onChange={handleEmailChange}/>
                <br></br>
                <br></br>
                <input type="password" id="password" className='pass' placeholder='Password' value={password} onChange={handlePasswordChange}/>
                <br></br>
                <br></br>
                <br></br>
                <Link to="Home"><button type="submit" className='b4'>Sign In</button></Link>
                <br></br>
                <div><h2 className='t5'>Don't have an account ?</h2> 
                    <Link to="Signup"><button type="submit" className='b4'>Sign Up</button></Link>
                </div>
            </form>
        </div>
    </div>        
  );
};

export default Signin;
