import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('token');
      if (isAuthenticated) {
        navigate('/input'); // Redirect to dashboard if user is already authenticated
      }
    }, [navigate]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
    //         localStorage.setItem('token', response.data.token);
    //         navigate.push('/input');
    //     } catch (error) {
    //       setError('Invalid email or password');
    //     }
    // }
    const handleSubmit =async (e) => {
      e.preventDefault()

      fetch("http://localhost:5000/login", {
          method: "post",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password })
      })
      .then(res => res.json())
      .then(data => {
          if (data.error) {
            setError(data.error)
              console.log("Error")
          }
          else {
            localStorage.setItem('token', data.token);
              window.location.reload();
              
          }
      })
      .catch(err => {
          console.log(err.message)
      })
  }

    return (
        // <div>
        //   <h2>Login</h2>
        //     {error && <div style={{ color: 'red' }}>{error}</div>} 
        //     <form onSubmit={handleSubmit}>
        //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <button type="submit">Login</button>
        //     </form>
        // </div>
     
        <div class="flex justify-center items-center h-screen">
             {error && <div style={{ color: 'red' }}></div>} 
    <div class="bg-white p-8 rounded shadow-md w-96">
        <h1 class="text-2xl font-semibold mb-4 text-center">Login</h1>
        {error && <div style={{ color: 'red' }}>{error}</div>} 
        <form onSubmit={handleSubmit}>
            <div class="mb-4">
                <label for="username" class="block font-medium text-gray-700">Email</label>
                <input type="text" value={email} id="email" name="email" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium text-gray-700">Password</label>
                <input type="password" value={password} id="password" name="password" class="mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="mb-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
            </div>
        </form>
        <span>Don't have an account.. <a className='text-blue-500' href='/register'>Register</a></span>
    </div>
</div>

    );
}

export default Login;
