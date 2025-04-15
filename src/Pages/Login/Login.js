import React, { useState } from "react";
import "./Login.css";
import { login, signup } from "../../firebase";

const Login = () => {
  const [loginHold, setLoginHold] = useState("sign in");

  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const Enter = async () => {
    if (loginHold === "sign in") {
      await login(getEmail, getPassword);
    } else {
      await signup(getName, getEmail, getPassword);
    }
  };

  const setForm = (e) => {
    setLoginHold(e);
  };

  return (
    <div>
      <div className="Login_Page">
        <div className="Logo_netflix">
          <img className="NetFlix_Logo" src="/logo.png" alt="Netflix Logo" />
        </div>

        <div className="Login_Form">
          <h1>{loginHold}</h1>
          <div className="inputs">
            {loginHold === "sign up" && (
              <input
                className="Name"
                placeholder="Your Name"
                value={getName}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              className="Email"
              placeholder="Email"
              value={getEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="Password"
              placeholder="Password"
              type="password"
              value={getPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="SignUp_btn">
            <button onClick={Enter}>
              {loginHold === "sign in" ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="help">
            <div className="CheckBox">
              <div>
                <input
                  className="CheckBox_input"
                  type="checkbox"
                  id="remember"
                />
                <label htmlFor="remember"> Remember Me</label>
              </div>
              <div>Need Help?</div>
            </div>

            <div className="Sign">
              {loginHold === "sign in" ? (
                <div className="sign_up_now">
                  <label>New to Netflix?</label>
                  <p onClick={() => setForm("sign up")}>Sign Up Now</p>
                </div>
              ) : (
                <div className="sign_in_now">
                  <label>Already have an account?</label>
                  <p onClick={() => setForm("sign in")}>Sign in Now</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
