import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-between p-8 bg-gray-100">
      {/* Left side */}
      <div className="w-[40%] h-[70vh] flex flex-col gap-8">
        <div className="flex justify-center mb-4 text-cyan-400 font-extrabold italic">
          Welcome to the Dashboard
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[60px] min-h-[60px] font-bold leading-none tracking-wide px-4 text-zinc-700 py-2">
            Went to Create Your first{" "}
            <span className="text-teal-600">Todo?</span>
          </h3>

          <div className="flex gap-6 text-zinc-200">
            <button>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white hover:text-zinc-200 font-semibold px-4 py-2 rounded transition duration-300 ease-in-out"
              >
                Login here
              </Link>
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-zinc-200 font-semibold px-4 py-2 rounded transition duration-300 ease-in-out">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-[50%] h-[70vh] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
