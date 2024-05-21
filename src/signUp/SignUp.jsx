import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute z-10 -left-20 -top-20">
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6) rotate(0)">
                <rect x="0" y="0" width="100%" height="100%" fill="none"/>
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" strokeWidth="1" stroke="none" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)"/>
          </svg>
        </div>

        {/* Register */}
        <div className="relative flex flex-col sm:w-96 rounded-lg z-50 border border-gray-400 bg-gray-950 shadow-lg px-4">
          <div className="flex-auto p-6">
            {/* Logo */}
            <div className="mb-10 flex items-center justify-center overflow-hidden">
              <a href="#" className="flex items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
                <span className="text-3xl font-black lowercase tracking-tight opacity-100">aicade.</span>
              </a>
            </div>
            {/* /Logo */}
            <h4 className="mb-2 font-medium text-center text-gray-300 xl:text-xl">Sign up to your account</h4>

            <form id="" className="mb-4" action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-300">Email</label>
                <input type="email" className="block w-full cursor-text rounded-md border border-gray-400 bg-gray-700 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-gray-600 focus:text-gray-300 focus:shadow" id="email" name="email" placeholder="Enter your email" autoFocus />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-300">Password</label>
                <input type="password" id="password" className="block w-full cursor-text rounded-md border border-gray-400 bg-gray-700 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-gray-600 focus:text-gray-300 focus:shadow" name="password" placeholder="Enter your password" />
              </div>
              <div className="mb-4">
                <label htmlFor="confirm-password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-300">Confirm Password</label>
                <input type="password" id="confirm-password" className="block w-full cursor-text rounded-md border border-gray-400 bg-gray-700 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-gray-600 focus:text-gray-300 focus:shadow" name="confirm-password" placeholder="Confirm your password" />
              </div>
              <div className="mb-4">
                <button className="w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign up</button>
              </div>
            </form>

            <p className="mb-4 text-center">
              Already have an account?
              <Link to={'/signin'} className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"> Sign in </Link>
            </p>
          </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  );
};

export default SignUp;
