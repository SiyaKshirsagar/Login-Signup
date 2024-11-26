import React, { useState } from 'react';
import './Loginsignup.css';
import person from "../assets/person.png";
import email from "../assets/email.png";
import lock from "../assets/lock.png";
import { useNavigate } from 'react-router-dom';

function Loginsignup({ onLoginSuccess }) {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({ name: "",  email: "",  password: "",});

  const [uname] = useState({
    email: 'siyashivajik@gmail.com',
    password: 'sk2022',
  });

  const navigate = useNavigate();
 
  const [popupMessage, setPopupMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (action === "Login") {
      if (formData.email === uname.email && formData.password === uname.password) {
        setPopupMessage("Login successful! Welcome back.");
        setTimeout(() => {
          onLoginSuccess(); 
        }, 1000); 

      } else if (!formData.email || !formData.password) {
        setPopupMessage("Please fill in all required fields.");
      } else {
        setPopupMessage("Invalid email or password.");
      }

    } else if (action === "Sign Up") {
      if (formData.name && formData.email && formData.password) {
        setPopupMessage("Sign Up successful! Welcome to our platform.");
      } else {
        setPopupMessage("Please fill in all required fields.");
      }
    }
  };

  const closePopup = () => {
    setPopupMessage("");
  };
  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {action === "Sign Up" && (
        <div className="inputs">
          <img src={person} alt="user" height={20} width={20} />
          <input   type="text"  name="name"  placeholder="User Name"  value={formData.name}  onChange={handleInputChange}/>
        </div>
      )}

      <div className="inputs">
        <img src={email} alt="email" height={20} width={20} />
        <input  type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleInputChange}/>
      </div>

      <div className="inputs">
        <img src={lock} alt="password" height={20} width={20} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
      </div>

      {action === "Login" && (
        <div className="lost-password">
          Forgot Password?<span> <button className='lostpass' onClick={handleForgotPassword}>Click Here</button></span>
        </div>
      )}

      <div className="submit-container">
          <button  className={`toggle-button ${action === "Sign Up" ? "active" : ""}`}
          onClick={() => setAction("Sign Up")} >Sign Up</button>

          <button
          className={`toggle-button ${action === "Login" ? "active" : ""}`}
          onClick={() => setAction("Login")} >Login</button>
      </div>

      <button className="submit" onClick={handleSubmit}>
        {action}
      </button>

      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loginsignup;
