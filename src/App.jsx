import React, { useState } from 'react';
import Loginsignup from './components/Loginsignup';
import Home from './components/Home';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      
      {isLoggedIn ? <Home /> : <Loginsignup onLoginSuccess={handleLoginSuccess} />}
    </>
  );
}

export default App;
