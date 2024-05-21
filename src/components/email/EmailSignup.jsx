import React, { useState } from 'react';

const EmailSignup = () => {
  const [joined, setJoined] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any necessary logic here, such as sending the email address to a server
    setJoined(true);
  };

  return (
    <div className="max-w-2xl mt-20 mx-auto  px-6">
      <form 
        className="flex flex-col gap-x-3 sm:flex-row sm:items-center sm:justify-between gap-y-2 sm:gap-y-0 py-4 px-6 rounded-lg shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-2 mb-2 sm:mb-0 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Join Waitlist
        </button>
      </form>
      {joined && (
        <p className="text-center text-xl font-semibold text-white mt-4">
          Thank you for your interest! You will receive updates now.
        </p>
      )}
    </div>
  );
};

export default EmailSignup;
