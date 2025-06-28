import React from "react";
import "./Auth.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-image-section">
        <img src="/decor1.png" alt="decor" />
      </div>

      <div className="auth-form-section">
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Full Name" {...register("name")} required />
          <input type="email" placeholder="Email" {...register("email")} required />
          <input type="password" placeholder="Password" {...register("password")} required />
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} required />

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