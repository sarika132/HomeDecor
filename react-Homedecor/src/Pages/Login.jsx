import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (data.email === storedUser.email && data.password === storedUser.password) {
      alert("Login successful!");
      navigate("/homepage");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-image-section">
        <img src="/decor3.png" alt="decor" />
      </div>
      <div className="auth-form-section">
        <h2>Welcome back</h2>
        <p>Login to continue</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" {...register("email")} required />
          <input type="password" placeholder="Password" {...register("password")} required />
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