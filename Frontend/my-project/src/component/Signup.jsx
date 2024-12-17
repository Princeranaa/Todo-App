import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Ensure the server URL is correctly defined
        const user = {username,email,password}
        const response = await axios.post('http://localhost:4000/user/register', user);
  
        console.log('Signup successful:', response.data);
       
        setUsername("");
        setPassword("");
        setEmail("");
        

    } catch (error) {

        console.error('Error:', error.response?.data || error.message);
        alert('Failed to create account. Please try again.');
      }
    };

  return (
   
    <div className="h-screen w-full flex items-center justify-between p-8 bg-gray-900 gap-4">
      {/* Form Section */}
      <div className="w-[45%] h-[70vh] bg-slate-700 p-8 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-gray-200 text-sm font-semibold mb-1">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md p-2 text-zinc-300 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              required
              placeholder='Enter you username'
              />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 text-sm font-semibold mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md p-2 text-zinc-300 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              required
              placeholder='Enter email address'
              />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-200 text-sm font-semibold mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md p-2 text-zinc-300 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
              required
              placeholder='Enter your password'
              />
          </div>
          <button 
            type="submit" 
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
            Sign-up
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-[55%] h-[70vh] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <img 
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/7255726/pexels-photo-7255726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Business Woman"
          />
      </div>
    </div>
 
  );
}

export default Home;
