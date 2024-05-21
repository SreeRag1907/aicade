import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const SignIn = () => {
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
                <span className="text-3xl font-black lowercase tracking-tight opacity-100 ">aicade.</span>
              </a>
            </div>
            {/* /Logo */}
            <h4 className="mb-2 font-medium text-center text-gray-300 xl:text-xl">Sign in to your account</h4>

            <form id="" className="mb-4" action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-300">Email or Username</label>
                <input type="text" className="block w-full cursor-text rounded-md border border-gray-400 bg-gray-700 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-gray-600 focus:text-gray-300 focus:shadow" id="email" name="email-username" placeholder="Enter your email or username" autoFocus />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-300" htmlFor="password">Password</label>
                  <a href="auth-forgot-password-basic.html" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                    <small className="">Forgot Password?</small>
                  </a>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input type="password" id="password" className="relative block flex-auto cursor-text rounded-md border border-gray-400 bg-gray-700 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-gray-600 focus:text-gray-300 focus:shadow" name="password" placeholder="············" />
                </div>
              </div>
              <div className="mb-4">
                <div className="block">
                  <input className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow" type="checkbox" id="remember-me" style={{backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke='%23fff\' strokeLinecap=\'round\' strokeLinejoin=\'round\' strokeWidth=\'2\' d=\'M6 10l3 3l6-6\'/%3e%3c/svg%3e')"}} checked />
                  <label className="inline-block" htmlFor="remember-me"> Remember Me </label>
                </div>
              </div>
              <div className="mb-4">
                <button className="w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign in</button>
              </div>
            </form>

            <p className="mb-4 text-center">
              New on aicade?
              <Link to={'/signup'} className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"> Create an account </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
