import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setusername] = useState('');
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
    

//     const register = async (e) => {
    
//         const response = await fetch("http://localhost:5000/register", {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({username, email, password }),
//         });
//         const json = await response.json();
//         console.log(json)
//         if (response.ok) {
//           // save the user to local storage
//           localStorage.setItem("user", JSON.stringify(json));
    
//           // update the auth context
// navigate.push('/login')    
//           // update loading state
//         }
//       };
 const register =async (e) => {
    e.preventDefault()

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
            setError(data.error)
        }
        else {
            console.log(data)
            navigate("/login")
            
        }
    })
    .catch(err => {
        console.log(err.message)
    })
}

    return (


        <div class="flex justify-center items-center h-screen">
    <div class="p-8 rounded w-96">
        <h1 class="text-2xl font-semibold mb-4 text-center">Registration</h1>
        <form onSubmit={register}>
            <div className='login-box'>
                <div class="user-box">
      <input type="text" name="username" required="" onChange={(e) => setusername(e.target.value)}/>
      <label>Username</label>
    </div>
        <div class="user-box">
<input type="email" onChange={handleChange} style={{ borderColor: isValid ? 'green' : 'red' }} />

                <label>Email</label>
                {!isValid && <p className='text-red-500'>Please enter a valid email address.</p>}
            </div>
    <div class="user-box">
      <input type="password" name="password" required="" onChange={(e) => setPassword(e.target.value)}/>
      <label>Password</label>
    </div>
    <div class="user-box">
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
      {!error=='' && <p className='text-red-500'>{error}</p>}
    </a></div>
        </form>
    </div>
</div>
        // {/* // <div>
        // //     <h2>Register</h2>
        // //     {error && <div style={{ color: 'red' }}>{error}</div>}
        // //     <form onSubmit={handleSubmit}>
        // //         <div>
        // //             <label>Email:</label>
        // //             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        // //         </div>
        // //         <div>
        // //             <label>Password:</label>
        // //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        // //         </div>
        // //         <div>
        // //             <label>Confirm Password:</label>
        // //             <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        // //         </div>
        // //         <button type="submit">Register</button>
        // //     </form>
        // // </div> */}
    );
}

export default Register;
