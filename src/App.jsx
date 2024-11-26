import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router and Routes for routing
import Loginsignup from './components/Loginsignup';
import Home from './components/Home';
import Forgotpassword from './components/Forgotpassword';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={isLoggedIn ? <Home /> : <Loginsignup onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
}

export default App;
