import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('shreyash@gmail.com');
    const [password, setPassword] = useState('123456');
    const [confirmPassword, setConfirmPassword] = useState('123456');
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
            console.log("Error")
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
    <div class="bg-white p-8 rounded shadow-md w-96">
        <h1 class="text-2xl font-semibold mb-4 text-center">Registration</h1>
        <form onSubmit={register}>
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" value={username} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setusername(e.target.value)}/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={email} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" value={password} name="password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="mb-4">
                <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div class="mb-4">
                <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
            </div>
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
