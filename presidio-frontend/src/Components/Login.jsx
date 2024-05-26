import React, { useState, useEffect } from 'react';
import { login } from '../Redux/AuthReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const state1 = useSelector((store) => store.authreducer);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(location.state?.from || '/', { replace: true });
    }
  }, [navigate, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }

    const userData = { email, password };
    dispatch(login(userData))
      .then(() => {
        const token = localStorage.getItem('token');
        if (token) {
          navigate(location.state?.from || '/', { replace: true });
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <h3 className="error" style={{color:"red"}}> {state1.loginMessage}</h3>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{color: "red"}}>{emailError}</p>}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{color: "red"}}>{passwordError}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
