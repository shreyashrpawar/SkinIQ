import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isValidpass, setisValidpass] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputValue));
  };

  const handleConfirm = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
    setisValidpass(inputValue === password);
  };

  const register = async (e) => {
    e.preventDefault();

    console.log(username);
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        navigate("/login");
      }
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 rounded w-96">
        <form onSubmit={register}>
          {/* "Registration" heading */}
          
          <div className='login-box'>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">Registration</h1>
          </div>
            <div className="user-box">
              <input type="text" name="username" required="" onChange={(e) => setUsername(e.target.value)}/>
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="email" onChange={handleChange} style={{ borderColor: isValid ? 'green' : 'red' }} />
              <label>Email</label>
              {!isValid && <p className='text-red-500'>Please enter a valid email address.</p>}
            </div>
            <div className="user-box">
              <input type="password" name="password" required="" onChange={(e) => setPassword(e.target.value)}/>
              <label>Password</label>
            </div>
            <div className="user-box">
              <input type="password" name="confirm_password" required="" onChange={handleConfirm}/>
              <label>Confirm password</label>
              {!isValidpass && <p className='text-red-500'>password and confirm password should match.</p>}
            </div>

            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type='submit' className='border m-2'>Submit</button>
            </a>
            {!error=='' && <p className='text-red-500'>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
