import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-image-section">
        <img src="/decor1.png" alt="decor" />
      </div>
      <div className="auth-form-section">
        <h2>Create your account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm" required />

          <button type="submit">Sign Up</button>
        </form>
        <p className="footer-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;