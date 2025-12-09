import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import facebookIcon from "../../assets/facebook.svg";
import googleIcon from "../../assets/google.svg";
import linkedinIcon from "../../assets/linkedin.svg";

function Login() {
  return (
    <div className="login-page">
      <main className="main-container">
      <section className="left-container">
        <h1>Sign In to Keepr</h1>
        <div className="login-icons">
          <img src={facebookIcon} alt="facebook icon" />
          <img src={googleIcon} alt="google icon" />
          <img src={linkedinIcon} alt="linkedin icon" />
        </div>
        <p className="subtitle">Or use your email account</p>

        <form>
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
          <div className="link">
            <Link to="/signup">Create an account</Link>
            <span>|</span>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </section>

      <aside className="right-container">
        <img src="./bg-image.jpg" alt="background image" />


        <caption className="caption">
          <h2>Your Notes, Secured</h2>
          <p>Login to continue writing.</p>
        </caption>
      </aside>
    </main> 
    </div>
  );
}

export default Login;
