import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import facebookIcon from "../../assets/facebook.svg";
import googleIcon from "../../assets/google.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Signup() {
  return (
    <div className="signup-page">
      <main className="main-container">
        <aside className="right-container">
          <img src="./bg-image.jpg" alt="background image" />

          <div className="caption">
            <h2>Hello, New Friend!</h2>
            <p>Let’s create your account.</p>
          </div>
        </aside>

        <section className="left-container">
          <h1>Create Account</h1>
          <div className="login-icons">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={googleIcon} alt="google icon" />
            <img src={linkedinIcon} alt="linkedin icon" />
          </div>
          <p className="subtitle">Or use your email account</p>

          <form>
            <input
              id="name"
              type="name"
              placeholder="Name"
              aria-label="Name"
              required
            />

            <input
              id="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              aria-label="Password"
              required
            />

            <button type="submit">Login</button>
            <Link to="/login">Already have an account?</Link>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Signup;
