import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Style.css'
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { firstName, lastName, email, password });
  };

  return (
    <div className='grad'>
        
        <div className='box6'><Link to="Signin"><div className="back1"></div></Link></div>
        <div className='box7'>
            <h2 className='t4'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
          <input type="text" id="first-name" placeholder='Firstname' className='pass' value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
          <br></br>
          <br></br>
          <input type="text" id="last-name" placeholder='Lastname' className='pass' value={lastName} onChange={(event) => setLastName(event.target.value)}/>
          <br></br>
          <br></br>
          <input type="email" id="email" placeholder='Email' className='pass' value={email} onChange={(event) => setEmail(event.target.value)}/>
          <br></br>
          <br></br>
          <input type="password" id="password" placeholder='Password' className='pass' value={password} onChange={(event) => setPassword(event.target.value)}/>
          <br></br>
          <br></br>
          <Link to="Signin"><button type="submit" className='b4'>Submit</button></Link>
      </form>
      </div>
    </div>
  );
}

export default Signup;
