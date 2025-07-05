import React from "react";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2 className="form-title">Welcome Back</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="signin-btn">Sign In</button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
