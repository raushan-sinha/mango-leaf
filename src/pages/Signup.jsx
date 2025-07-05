import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2 className="form-title">Create Account</h2>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" required />
                </div>

                <button type="submit" className="signup-btn">Sign Up</button>
                <p className="login-link">
                    Already have an account? <a href="/login">Sign In</a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
