import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-image-section">
        <img src="/decor3.png" alt="decor" />
      </div>
      <div className="auth-form-section">
        <h2>Welcome back</h2>
        <p>Login to continue</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="remember-box">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="footer-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;