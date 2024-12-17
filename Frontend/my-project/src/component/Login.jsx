import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  
    function formsubmit(e){
       e.preventDefault()
       console.log("hello")
    }

    



  return (
    <div className="h-screen w-full flex items-center justify-between p-8 bg-gray-900 gap-5">
      {/* Form Section */}
      <div className="w-[45%] h-[70vh] p-8 rounded-lg bg-slate-800 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
        <form onSubmit={formsubmit} className="space-y-4 ">
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full bg-transparent p-2 rounded-md border-gray-500 shadow-sm "
              placeholder='Email Address' 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-semibold mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              className="mt-1 block p-2 w-full bg-transparent rounded-md "
              placeholder='password' 
            />
          </div>
          <button 
            type="submit" 
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-[55%] h-[70vh] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <img 
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/5313158/pexels-photo-5313158.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Business Woman"
        />
      </div>
</div>
  );
}

export default Home;
