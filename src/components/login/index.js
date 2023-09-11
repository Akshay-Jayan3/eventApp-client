import React from "react";
import styles from "./styles.module.scss";

const LoginCard = ({ credentials, handleLogin, handleInputChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h2>Welcome Back !</h2>
        <p>Please enter your username and password to login</p>
      </div>

      <form onSubmit={handleLogin}>
        <div>
          <input
            className={styles.inputContainer}
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <input
            className={styles.inputContainer}
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
      <div className={styles.signup}><p>Don't have an account ?</p><span><a href="/signup">Sign up</a></span></div>
    </div>
  );
};

export default LoginCard;