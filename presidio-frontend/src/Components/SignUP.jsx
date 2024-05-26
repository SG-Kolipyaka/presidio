import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../Redux/AuthReducer/action'; 
import "../css/signup.css";

const initialData = {
  firstname: '',
  lastname: '',
  email: '',
  phoneno: '',
  password: '',
  user: ''
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const { isLoading, isError, signupMessage } = useSelector((store) => store.authreducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstname.trim()) {
      errors.firstname = 'First name is required';
    }
    if (!formData.lastname.trim()) {
      errors.lastname = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.phoneno.trim()) {
      errors.phoneno = 'Phone number is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!formData.user) {
      errors.user = 'User type is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(signup(formData))
        .then(() => {
          setFormData(initialData);
        })
        .catch((error) => {
          console.error("Signup failed:", error);
        });
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>User SignUp</h1>
        {isError && <h3 className="error" style={{ color: 'red' }}>Signup Failed: {signupMessage}</h3>}
        {signupMessage && !isError && <h3 className="success">{signupMessage} go to <Link to="/login"> Login </Link></h3>}
        <input
          type="text"
          placeholder="Enter your firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        {formErrors.firstname && <p className="error" style={{ color: 'red' }}>{formErrors.firstname}</p>}
        <input
          type="text"
          placeholder="Enter your lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        {formErrors.lastname && <p className="error" style={{ color: 'red' }}>{formErrors.lastname}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="error" style={{ color: 'red' }}>{formErrors.email}</p>}
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleChange}
        />
        {formErrors.phoneno && <p className="error" style={{ color: 'red' }}>{formErrors.phoneno}</p>}
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <p className="error" style={{ color: 'red' }}>{formErrors.password}</p>}
        <select
          name="user"
          value={formData.user}
          onChange={handleChange}
        >
          <option value="">Select user type</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        {formErrors.user && <p className="error" style={{ color: 'red' }}>{formErrors.user}</p>}
        <button type="submit" disabled={isLoading}>SignUp</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
