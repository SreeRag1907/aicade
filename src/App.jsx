import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
// import SignIn from './components/signIn/SignIn';
// import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes without the Navbar */}
          <Route path="/" element={<Hero />} />
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
