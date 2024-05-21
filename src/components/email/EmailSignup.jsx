import React from 'react';

const EmailSignup = () => {
  return (
    <div className="max-w-md mt-10 mx-auto">
      <form className="flex items-center justify-between py-2 px-2 rounded-lg">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="flex-grow px-4 py-2 rounded-full mr-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="flex-shrink-0 px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;
